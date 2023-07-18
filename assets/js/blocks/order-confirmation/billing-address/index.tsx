/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Icon } from '@wordpress/icons';
import { totals } from '@woocommerce/icons';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import attributes from './attributes';
import './style.scss';

registerBlockType( metadata, {
	icon: {
		src: (
			<Icon
				icon={ totals }
				className="wc-block-editor-components-block-icon"
			/>
		),
	},
	attributes,
	edit,
	save() {
		return null;
	},
} );
