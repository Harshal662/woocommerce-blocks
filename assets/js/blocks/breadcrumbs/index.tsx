/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';

registerBlockType( metadata, {
	attributes: {
		...metadata.attributes,
	},
	edit,
	save() {
		return null;
	},
} );
