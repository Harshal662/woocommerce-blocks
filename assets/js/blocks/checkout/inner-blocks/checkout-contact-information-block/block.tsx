/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	ValidatedTextInput,
	CheckboxControl,
} from '@woocommerce/blocks-checkout';
import {
	useCheckoutContext,
	useCheckoutAddress,
	useStoreEvents,
} from '@woocommerce/base-context';
import { getSetting } from '@woocommerce/settings';

/**
 * Internal dependencies
 */

const Block = ( {
	allowCreateAccount,
}: {
	allowCreateAccount: boolean;
} ): JSX.Element => {
	const {
		customerId,
		shouldCreateAccount,
		setShouldCreateAccount,
	} = useCheckoutContext();
	const { billingData, setEmail } = useCheckoutAddress();
	const { dispatchCheckoutEvent } = useStoreEvents();

	const onChangeEmail = ( value ) => {
		setEmail( value );
		dispatchCheckoutEvent( 'set-email-address' );
	};

	const createAccountUI = ! customerId &&
		allowCreateAccount &&
		getSetting( 'checkoutAllowsGuest', false ) &&
		getSetting( 'checkoutAllowsSignup', false ) && (
			<CheckboxControl
				className="wc-block-checkout__create-account"
				label={ __(
					'Create an account?',
					'woo-gutenberg-products-block'
				) }
				checked={ shouldCreateAccount }
				onChange={ ( value ) => setShouldCreateAccount( value ) }
			/>
		);

	return (
		<>
			<ValidatedTextInput
				id="email"
				type="email"
				label={ __( 'Email address', 'woo-gutenberg-products-block' ) }
				value={ billingData.email }
				autoComplete="email"
				onChange={ onChangeEmail }
				required={ true }
			/>
			{ createAccountUI }
		</>
	);
};

export default Block;
