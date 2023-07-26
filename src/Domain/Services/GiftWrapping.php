<?php
namespace Automattic\WooCommerce\Blocks\Domain\Services;

/**
 * A class to handle getting, setting, and displaying information related to gift-wrapping on orders.
 */
class GiftWrapping {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->init();
	}

	/**
	 * Sets up the Gift Wrapping feature, including adding hooks needed to show gift wrapping values in the order dashboard.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'woocommerce_admin_order_data_after_shipping_address', [ $this, 'show_gift_wrapping_required' ] );
	}

	/**
	 * Output whether gift wrapping is required on the admin dashboard.
	 *
	 * @param \WC_Order $order The order the value is being displayed for.
	 * @return void
	 */
	public function show_gift_wrapping_required( \WC_Order $order ) {
		$gift_wrapping_required = (bool) $order->get_meta( 'woocommerce_blocks_gift_wrapping' );

		echo esc_html( '<div class="wc-blocks-gift-wrapping"><strong>' . esc_html__( 'Gift wrapping required', 'woo-gutenberg-products-block' ) . '</strong>: ' . ( $gift_wrapping_required ? esc_html__( 'Yes', 'woo-gutenberg-products-block' ) : esc_html__( 'No', 'woo-gutenberg-products-block' ) ) . '</div>' );
	}
}
