/**
 * External dependencies
 */
import { removeAllNotices, debounce, pick } from '@woocommerce/base-utils';
import {
	CartBillingAddress,
	CartShippingAddress,
	BillingAddressShippingAddress,
} from '@woocommerce/types';
import { select, dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_KEY } from './constants';
import { processErrorResponse } from '../utils';
import { getDirtyKeys, validateDirtyProps, BaseAddressKey } from './utils';

// This is used to track and cache the local state of push changes.
const localState = {
	// True when the customer data has been initialized.
	customerDataIsInitialized: false,
	// True when a push is currently happening to avoid simultaneous pushes.
	doingPush: false,
	// Local cache of the last pushed customerData used for comparisons.
	customerData: {
		billingAddress: {} as CartBillingAddress,
		shippingAddress: {} as CartShippingAddress,
	},
	// Tracks which props have changed so the correct data gets pushed to the server.
	dirtyProps: {
		billingAddress: [] as BaseAddressKey[],
		shippingAddress: [] as BaseAddressKey[],
	},
};

/**
 * Function to dispatch an update to the server. This is debounced.
 */
const updateCustomerData = (): void => {
	if (
		! validateDirtyProps( localState.dirtyProps ) ||
		localState.doingPush
	) {
		return;
	}

	// Prevent multiple pushes from happening at the same time.
	localState.doingPush = true;

	// Find valid data from the list of dirtyProps and prepare to push to the server.
	const customerDataToUpdate = {} as Partial< BillingAddressShippingAddress >;

	if ( localState.dirtyProps.billingAddress.length ) {
		customerDataToUpdate.billing_address = pick(
			localState.customerData.billingAddress,
			localState.dirtyProps.billingAddress
		);
	}

	if ( localState.dirtyProps.shippingAddress.length ) {
		customerDataToUpdate.shipping_address = pick(
			localState.customerData.shippingAddress,
			localState.dirtyProps.shippingAddress
		);
	}

	if ( Object.keys( customerDataToUpdate ).length === 0 ) {
		localState.doingPush = false;
		return;
	}

	// If there is customer data to update, push it to the server.
	dispatch( STORE_KEY )
		.updateCustomerData( customerDataToUpdate )
		.then( () => {
			removeAllNotices();
			dispatch( STORE_KEY ).setHasDirtyAddress( false );
			localState.dirtyProps.billingAddress = [];
			localState.dirtyProps.shippingAddress = [];
			localState.doingPush = false;
		} )
		.catch( ( response ) => {
			processErrorResponse( response );
			localState.doingPush = false;
		} );
};

const debouncedUpdateCustomerData = debounce( () => {
	if ( localState.doingPush ) {
		debouncedUpdateCustomerData();
		return;
	}
	updateCustomerData();
}, 1500 );

/**
 * After cart has fully initialized, pushes changes to the server when data in the store is changed. Updates to the
 * server are debounced to prevent excessive requests.
 */
export const pushChanges = ( debounced: true ): void => {
	const store = select( STORE_KEY );

	if ( ! store.hasFinishedResolution( 'getCartData' ) ) {
		return;
	}

	// Returns all current customer data from the store.
	const newCustomerData = store.getCustomerData();

	// On first run, this will populate the customerData cache with the current customer data in the store.
	// This does not need to be pushed to the server because it's already there.
	if ( ! localState.customerDataIsInitialized ) {
		localState.customerData = newCustomerData;
		localState.customerDataIsInitialized = true;
		return;
	}

	localState.dirtyProps.billingAddress = [
		...localState.dirtyProps.billingAddress,
		...getDirtyKeys(
			localState.customerData.billingAddress,
			newCustomerData.billingAddress
		),
	];

	localState.dirtyProps.shippingAddress = [
		...localState.dirtyProps.shippingAddress,
		...getDirtyKeys(
			localState.customerData.shippingAddress,
			newCustomerData.shippingAddress
		),
	];

	// Update local cache of customer data so the next time this runs, it can compare against the latest data.
	localState.customerData = newCustomerData;

	// Trigger the update if we have any dirty props.
	if (
		localState.dirtyProps.billingAddress.length ||
		localState.dirtyProps.shippingAddress.length
	) {
		if ( ! store.hasDirtyAddress() ) {
			dispatch( STORE_KEY ).setHasDirtyAddress( true );
		}
		if ( debounced ) {
			debouncedUpdateCustomerData();
		} else {
			updateCustomerData();
		}
	}
};

// Cancel the debounced updateCustomerData function and trigger it immediately.
export const flushChanges = (): void => {
	debouncedUpdateCustomerData.flush();
};
