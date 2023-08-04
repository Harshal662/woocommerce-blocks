<?php
/**
 * Controller Tests.
 */

namespace Automattic\WooCommerce\Blocks\Tests\StoreApi\Routes;

use Automattic\WooCommerce\Blocks\Tests\Helpers\FixtureData;


/**
 * CartUpdateCustomer Controller Tests.
 */
class CartUpdateCustomer extends ControllerTestCase {

	/**
	 * Setup test product data. Called before every test.
	 */
	protected function setUp(): void {
		parent::setUp();

		$fixtures = new FixtureData();
		$fixtures->shipping_add_flat_rate();

		$this->products = array(
			$fixtures->get_simple_product(
				array(
					'name'          => 'Test Product 1',
					'stock_status'  => 'instock',
					'regular_price' => 10,
					'weight'        => 10,
				)
			),
			$fixtures->get_simple_product(
				array(
					'name'          => 'Test Product 2',
					'stock_status'  => 'instock',
					'regular_price' => 10,
					'weight'        => 10,
				)
			),
			$fixtures->get_simple_product(
				array(
					'name'          => 'Test Product 3',
					'stock_status'  => 'instock',
					'regular_price' => 10,
					'weight'        => 10,
				)
			),
		);


		wc_empty_cart();
		$this->keys   = array();
		$this->keys[] = wc()->cart->add_to_cart( $this->products[0]->get_id(), 2 );
		$this->keys[] = wc()->cart->add_to_cart( $this->products[1]->get_id() );

		// Draft order.
		$order = new \WC_Order();
		$order->set_status( 'checkout-draft' );
		$order->save();
		wc()->session->set( 'store_api_draft_order', $order->get_id() );
	}

	public function is_rate_selected($shipping_rates, $method_id )
	{
		$rate_selected = false;

		foreach ( $shipping_rates as $shipping_rate ) {

			if ( 'Shipment 1' === $shipping_rate[ 'name' ] ) {
				$shipping_rate_details = $shipping_rate[ 'shipping_rates' ];

				foreach ( $shipping_rate_details as $rate_details ) {

					if ( $rate_details[ 'method_id' ] === $method_id)  {
						$rate_selected = $rate_details[ 'selected' ];
						break 2;
					}
				}

				break;
			}

		}
		return $rate_selected;
	}
	/**
	 * Test getting shipping method is selected if prefers_collection is true.
	 */
	public function test_selected_shipping_method() {
		$request = new \WP_REST_Request( 'POST', '/wc/store/v1/cart/update-customer' );
		$request->set_header( 'Nonce', wp_create_nonce( 'wc_store_api' ) );
		$request->set_body_params(
			array(
				'shipping_address' => (object) array(
					'country' => 'US',
				),
				'prefers_collection' => false,
			)
		);

		$response = rest_do_request( $request );
		$response_data = $response->get_data();
		$shipping_rates = $response_data['shipping_rates'];
		$method_id = 'legacy_flat_rate';

		$rate_selected = $this->is_rate_selected($shipping_rates, $method_id);

		$this->assertTrue( $rate_selected , "legacy_flat_rate should be selected.");
	}

	/**
	 * Test getting shipping method is not selected if prefers_collection is true.
	 */
	public function test_deselect_shipping_method() {
		$request = new \WP_REST_Request( 'POST', '/wc/store/v1/cart/update-customer' );
		$request->set_header( 'Nonce', wp_create_nonce( 'wc_store_api' ) );
		$request->set_body_params(
			array(
				'shipping_address' => (object) array(
					'country' => 'US',
				),
				'prefers_collection' => true,
			)
		);

		$response = rest_do_request( $request );
		$response_data = $response->get_data();
		$shipping_rates = $response_data['shipping_rates'];
		$method_id = 'legacy_flat_rate';

		$rate_selected = $this->is_rate_selected($shipping_rates, $method_id);

		$this->assertFalse( $rate_selected , "legacy_flat_rate should not be selected.");
	}
}
