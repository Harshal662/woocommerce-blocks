/**
 * External dependencies
 */
import { test as base, expect } from '@woocommerce/e2e-playwright-utils';

/**
 * Internal dependencies
 */
import {
	FREE_SHIPPING_NAME,
	FREE_SHIPPING_PRICE,
	SIMPLE_PHYSICAL_PRODUCT_NAME,
} from './constants';
import { CheckoutPage } from './checkout.page';

const testData = {
	firstname: 'John',
	lastname: 'Doe',
	addressfirstline: '123 Easy Street',
	addresssecondline: 'Testville',
	country: 'United States (US)',
	city: 'New York',
	state: 'New York',
	postcode: '90210',
	email: 'john.doe@test.com',
	phone: '01234567890',
};

const {
	firstname,
	lastname,
	addressfirstline,
	addresssecondline,
	city,
	postcode,
	email,
	phone,
} = testData;

const test = base.extend< { pageObject: CheckoutPage } >( {
	pageObject: async ( { page }, use ) => {
		const pageObject = new CheckoutPage( {
			page,
		} );
		await use( pageObject );
	},
} );

test.describe( 'Shopper → Order Confirmation', () => {
	test.beforeAll( async ( { page, editorUtils } ) => {
		// Set the site to use the order confirmation template.
		await page.goto( '/wp-admin/site-editor.php' );
		await page.getByRole( 'button', { name: /Templates/i } ).click();
		await page
			.getByRole( 'button', { name: /Order confirmation/i } )
			.click();
		await editorUtils.enterEditMode();
		await editorUtils.closeWelcomeGuideModal();
		await editorUtils.transformIntoBlocks();
	} );

	test( 'should be rendered on the frontend side', async ( {
		frontendUtils,
		pageObject,
		page,
	} ) => {
		await frontendUtils.emptyCart();
		await frontendUtils.goToShop();
		await frontendUtils.addToCart( SIMPLE_PHYSICAL_PRODUCT_NAME );
		await frontendUtils.goToCheckout();
		await expect(
			await pageObject.selectAndVerifyShippingOption(
				FREE_SHIPPING_NAME,
				FREE_SHIPPING_PRICE
			)
		).toBe( true );
		await pageObject.fillInCheckoutWithTestData( testData );
		await pageObject.placeOrder();
		await expect(
			page.getByText( 'Thank you. Your order has been received.' )
		).toBeVisible();
		await expect( page.getByText( email ) ).toBeVisible();
		await expect( page.getByText( FREE_SHIPPING_NAME ) ).toBeVisible();
		await expect(
			page.getByText( SIMPLE_PHYSICAL_PRODUCT_NAME )
		).toBeVisible();
		await expect(
			page
				.getByText(
					`${ firstname } ${ lastname }${ addressfirstline }${ addresssecondline }${ city }, NY ${ postcode }${ phone }`
				)
				.first()
		).toBeVisible();
		await expect(
			page
				.getByText(
					`${ firstname } ${ lastname }${ addressfirstline }${ addresssecondline }${ city }, NY ${ postcode }${ phone }`
				)
				.nth( 1 )
		).toBeVisible();
	} );
} );
