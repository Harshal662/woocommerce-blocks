<?php
namespace Automattic\WooCommerce\StoreApi\Utilities;

use Automattic\WooCommerce\StoreApi\Utilities\ProductQuery;
use Exception;
use WP_REST_Request;

/**
 * Product Query filters class.
 */
class ProductQueryFilters {
	/**
	 * Get filtered min price for current products.
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return object
	 */
	public function get_filtered_price( $request ) {
		global $wpdb;

		// Regenerate the products query without min/max price request params.
		unset( $request['min_price'], $request['max_price'] );

		// Grab the request from the WP Query object, and remove SQL_CALC_FOUND_ROWS and Limits so we get a list of all products.
		$product_query = new ProductQuery();

		add_filter( 'posts_clauses', array( $product_query, 'add_query_clauses' ), 10, 2 );
		add_filter( 'posts_pre_query', '__return_empty_array' );

		$query_args                   = $product_query->prepare_objects_query( $request );
		$query_args['no_found_rows']  = true;
		$query_args['posts_per_page'] = -1;
		$query                        = new \WP_Query();
		$result                       = $query->query( $query_args );
		$product_query_sql            = $query->request;

		remove_filter( 'posts_clauses', array( $product_query, 'add_query_clauses' ), 10 );
		remove_filter( 'posts_pre_query', '__return_empty_array' );

		$price_filter_sql = "
			SELECT min( min_price ) as min_price, MAX( max_price ) as max_price
			FROM {$wpdb->wc_product_meta_lookup}
			WHERE product_id IN ( {$product_query_sql} )
		";

		return $wpdb->get_row( $price_filter_sql ); // phpcs:ignore
	}

	/**
	 * Get stock status counts for the current products.
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return array status=>count pairs.
	 */
	public function get_stock_status_counts( $request ) {
		global $wpdb;
		$product_query         = new ProductQuery();
		$stock_status_options  = array_map( 'esc_sql', array_keys( wc_get_product_stock_status_options() ) );
		$hide_outofstock_items = get_option( 'woocommerce_hide_out_of_stock_items' );
		if ( 'yes' === $hide_outofstock_items ) {
			unset( $stock_status_options['outofstock'] );
		}

		add_filter( 'posts_clauses', array( $product_query, 'add_query_clauses' ), 10, 2 );
		add_filter( 'posts_pre_query', '__return_empty_array' );

		$query_args = $product_query->prepare_objects_query( $request );
		unset( $query_args['stock_status'] );
		$query_args['no_found_rows']  = true;
		$query_args['posts_per_page'] = -1;
		$query                        = new \WP_Query();
		$result                       = $query->query( $query_args );
		$product_query_sql            = $query->request;

		remove_filter( 'posts_clauses', array( $product_query, 'add_query_clauses' ), 10 );
		remove_filter( 'posts_pre_query', '__return_empty_array' );

		$stock_status_counts = array();

		foreach ( $stock_status_options as $status ) {
			$stock_status_count_sql = $this->generate_stock_status_count_query( $status, $product_query_sql, $stock_status_options );

			$result = $wpdb->get_row( $stock_status_count_sql ); // phpcs:ignore
			$stock_status_counts[ $status ] = $result->status_count;
		}

		return $stock_status_counts;
	}

	/**
	 * Generate calculate query by stock status.
	 *
	 * @param string $status status to calculate.
	 * @param string $product_query_sql product query for current filter state.
	 * @param array  $stock_status_options available stock status options.
	 *
	 * @return false|string
	 */
	private function generate_stock_status_count_query( $status, $product_query_sql, $stock_status_options ) {
		if ( ! in_array( $status, $stock_status_options, true ) ) {
			return false;
		}
		global $wpdb;
		$status = esc_sql( $status );
		return "
			SELECT COUNT( DISTINCT posts.ID ) as status_count
			FROM {$wpdb->posts} as posts
			INNER JOIN {$wpdb->postmeta} as postmeta ON posts.ID = postmeta.post_id
            AND postmeta.meta_key = '_stock_status'
            AND postmeta.meta_value = '{$status}'
			WHERE posts.ID IN ( {$product_query_sql} )
		";
	}

	/**
	 * Get terms list for a given taxonomy.
	 *
	 * @param string $taxonomy Taxonomy name.
	 *
	 * @return array
	 */
	public function get_terms_list( string $taxonomy ) {
		global $wpdb;

		return $wpdb->get_results(
			$wpdb->prepare(
				"SELECT term_id as term_count_id,
            count(DISTINCT product_or_parent_id) as term_count
			FROM {$wpdb->prefix}wc_product_attributes_lookup
			WHERE taxonomy = %s
			GROUP BY term_id",
				$taxonomy
			)
		);
	}

	/**
	 * Get the empty terms list for a given taxonomy.
	 *
	 * @param string $taxonomy Taxonomy name.
	 *
	 * @return array
	 */
	public function get_empty_terms_list( string $taxonomy ) {
		global $wpdb;

		return $wpdb->get_results(
			$wpdb->prepare(
				"SELECT DISTINCT term_id as term_count_id,
            0 as term_count
			FROM {$wpdb->prefix}wc_product_attributes_lookup
			WHERE taxonomy = %s",
				$taxonomy
			)
		);
	}



	/**
	 * Get attribute and meta counts.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @param string          $filtered_attribute The attribute to count.
	 *
	 * @return array
	 */
	public function get_attribute_and_meta_counts( $request, $filtered_attribute ) {
		global $wpdb;

		$attributes_data            = $request->get_param( 'attributes' );
		$calculate_attribute_counts = $request->get_param( 'calculate_attribute_counts' );
		$min_price                  = $request->get_param( 'min_price' );
		$max_price                  = $request->get_param( 'max_price' );
		$rating                     = $request->get_param( 'rating' );

		if ( empty( $attributes_data ) && empty( $min_price ) && empty( $max_price ) && empty( $rating ) ) {
			$counts = $this->get_terms_list( $filtered_attribute );

			return array_map( 'absint', wp_list_pluck( $counts, 'term_count', 'term_count_id' ) );
		}

		$where_clause = '';
		if ( ! empty( $min_price ) || ! empty( $max_price ) || ! empty( $rating ) ) {
			$product_metas = [
				'min_price' => $min_price,
				'max_price' => $max_price,
				'rating'    => $rating,
			];

			$filtered_products_by_metas           = $this->get_product_by_metas( $product_metas );
			$formatted_filtered_products_by_metas = implode( ',', array_map( 'intval', $filtered_products_by_metas ) );

			if ( ! empty( $formatted_filtered_products_by_metas ) ) {
				$where_clause .= sprintf( ' AND product_attribute_lookup.product_id IN (%1s)', $formatted_filtered_products_by_metas );
			} else {
				$counts = $this->get_empty_terms_list( $filtered_attribute );

				return array_map( 'absint', wp_list_pluck( $counts, 'term_count', 'term_count_id' ) );
			}
		}

		$join_type = 'LEFT';
		foreach ( $attributes_data as $attribute ) {
			$filtered_terms = $attribute['slug'] ?? '';

			if ( empty( $filtered_terms ) ) {
				continue;
			}

			$taxonomy = $attribute['attribute'] ?? '';
			$term_ids = [];
			if ( in_array( $taxonomy, wc_get_attribute_taxonomy_names(), true ) ) {
				foreach ( $filtered_terms as $filtered_term ) {
					$term = get_term_by( 'slug', $filtered_term, $taxonomy );
					if ( is_object( $term ) ) {
						$term_ids[] = $term->term_id;
					}
				}
			}

			if ( empty( $term_ids ) ) {
				continue;
			}

			foreach ( $calculate_attribute_counts as $calculate_attribute_count ) {
				if ( ! isset( $calculate_attribute_count['taxonomy'] ) && ! isset( $calculate_attribute_count['query_type'] ) ) {
					continue;
				}

				$query_type                           = $calculate_attribute_count['query_type'];
				$filtered_products_by_terms           = $this->get_product_by_filtered_terms( $calculate_attribute_count['taxonomy'], $term_ids, $query_type );
				$formatted_filtered_products_by_terms = implode( ',', array_map( 'intval', $filtered_products_by_terms ) );

				if ( ! empty( $formatted_filtered_products_by_terms ) ) {
					$where_clause .= sprintf( ' AND product_attribute_lookup.product_or_parent_id IN (%1s)', $formatted_filtered_products_by_terms );
				}

				if ( $calculate_attribute_count['taxonomy'] === $filtered_attribute ) {
					$join_type = 'or' === $query_type ? 'LEFT' : 'INNER';
				}
			}
		}

		$counts = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT attributes.term_id as term_count_id, coalesce(term_count, 0) as term_count
	FROM (
	         SELECT DISTINCT term_id
	         FROM {$wpdb->prefix}wc_product_attributes_lookup
	         WHERE taxonomy = %s) as attributes
	         %1s JOIN (
	    SELECT COUNT(DISTINCT product_attribute_lookup.product_or_parent_id) as term_count, product_attribute_lookup.term_id
	    FROM {$wpdb->prefix}wc_product_attributes_lookup product_attribute_lookup
	             INNER JOIN {$wpdb->posts} posts
	                        ON posts.ID = product_attribute_lookup.product_id
	    WHERE posts.post_type IN ('product', 'product_variation') AND posts.post_status = 'publish'%1s
	    GROUP BY product_attribute_lookup.term_id
	) summarize ON attributes.term_id = summarize.term_id",
				$filtered_attribute,
				$join_type,
				$where_clause
			)
		);

		return array_map( 'absint', wp_list_pluck( $counts, 'term_count', 'term_count_id' ) );
	}

	/**
	 * Get rating counts for the current products.
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return array rating=>count pairs.
	 */
	public function get_rating_counts( $request ) {
		global $wpdb;

		// Regenerate the products query without rating request params.
		unset( $request['rating'] );

		// Grab the request from the WP Query object, and remove SQL_CALC_FOUND_ROWS and Limits so we get a list of all products.
		$product_query = new ProductQuery();

		add_filter( 'posts_clauses', array( $product_query, 'add_query_clauses' ), 10, 2 );
		add_filter( 'posts_pre_query', '__return_empty_array' );

		$query_args                   = $product_query->prepare_objects_query( $request );
		$query_args['no_found_rows']  = true;
		$query_args['posts_per_page'] = -1;
		$query                        = new \WP_Query();
		$result                       = $query->query( $query_args );
		$product_query_sql            = $query->request;

		remove_filter( 'posts_clauses', array( $product_query, 'add_query_clauses' ), 10 );
		remove_filter( 'posts_pre_query', '__return_empty_array' );

		$rating_count_sql = "
			SELECT COUNT( DISTINCT product_id ) as product_count, ROUND( average_rating, 0 ) as rounded_average_rating
			FROM {$wpdb->wc_product_meta_lookup}
			WHERE product_id IN ( {$product_query_sql} )
			AND average_rating > 0
			GROUP BY rounded_average_rating
			ORDER BY rounded_average_rating ASC
		";

		$results = $wpdb->get_results( $rating_count_sql ); // phpcs:ignore

		return array_map( 'absint', wp_list_pluck( $results, 'product_count', 'rounded_average_rating' ) );
	}

	/**
	 * Gets product by metas.
	 *
	 * @since TBD
	 * @param array $metas Array of metas to query.
	 * @return array $results
	 */
	public function get_product_by_metas( $metas = array() ) {
		global $wpdb;

		if ( empty( $metas ) ) {
			return array();
		}

		$where   = array();
		$results = array();
		$params  = array();

		foreach ( $metas as $column => $value ) {
			if ( empty( $value ) ) {
				continue;
			}

			if ( 'min_price' === $column ) {
				$where[]  = "{$column} >= %d";
				$params[] = intval( $value ) / 100;
				continue;
			}

			if ( 'max_price' === $column ) {
				$where[]  = "{$column} <= %d";
				$params[] = intval( $value ) / 100;
				continue;
			}

			if ( 'rating' === $column ) {
				$value    = is_array( $value ) ? implode( ',', $value ) : $value;
				$where[]  = sprintf( 'average_rating BETWEEN %s - 0.5 AND %s + 0.5', $value, $value );
				continue;
			}

			$where[]  = "{$column} = %s";
			$params[] = is_array( $value ) ? implode( ',', $value ) : $value;
		}

		if ( ! empty( $where ) ) {
			$where_clause = implode( ' AND ', $where );
			$where_clause = sprintf( $where_clause, ...$params );

			$results      = $wpdb->get_col(
				$wpdb->prepare(
					"SELECT DISTINCT product_id FROM {$wpdb->prefix}wc_product_meta_lookup WHERE %1s",
					$where_clause
				)
			);
		}

		return $results;
	}

	/**
	 * Gets product by filtered terms.
	 *
	 * @since TBD
	 * @param string $taxonomy Taxonomy name.
	 * @param array  $term_ids Term IDs.
	 * @param string $query_type or | and.
	 * @return array Product IDs.
	 */
	public function get_product_by_filtered_terms( $taxonomy = '', $term_ids = array(), $query_type = 'or' ) {
		global $wpdb;

		$term_count = count( $term_ids );
		$results    = array();
		$term_ids   = implode( ',', array_map( 'intval', $term_ids ) );

		if ( 'or' === $query_type ) {
			$results = $wpdb->get_col(
				$wpdb->prepare(
					"
					SELECT DISTINCT `product_or_parent_id`
					FROM {$wpdb->prefix}wc_product_attributes_lookup
					WHERE `taxonomy` = %s
					AND `term_id` IN (%1s)
					",
					$taxonomy,
					$term_ids
				)
			);
		}

		if ( 'and' === $query_type ) {
			$results = $wpdb->get_col(
				$wpdb->prepare(
					"
					SELECT DISTINCT `product_or_parent_id`
					FROM {$wpdb->prefix}wc_product_attributes_lookup
					WHERE `taxonomy` = %s
					AND `term_id` IN (%1s)
					GROUP BY `product_or_parent_id`
					HAVING COUNT( DISTINCT `term_id` ) >= %d
					",
					$taxonomy,
					$term_ids,
					$term_count
				)
			);
		}

		return $results;
	}
}
