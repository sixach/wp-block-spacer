/**
 * Given a block object, returns a copy of the block object.
 *
 * @see    https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/
 */
import { createBlock, getBlockAttributes } from '@wordpress/blocks';

/**
 * Block Transforms is the API that allows a block to be transformed from and to other blocks, as well as from other entities.
 * Existing entities that work with this API include shortcodes, files, regular expressions, and raw DOM nodes.
 */
export default {
	from: [
		{
			blocks: [ 'core/spacer' ],
			transform: ( { height } ) =>
				createBlock( 'sixa/spacer', {
					height,
				} ),
			type: 'block',
		},
		{
			type: 'raw',
			selector: 'wp-block-sixa-spacer',
			transform: ( { outerHTML } ) =>
				createBlock( 'sixa/spacer', {
					...getBlockAttributes( 'sixa/spacer', outerHTML ),
				} ),
		},
	],
	to: [
		{
			blocks: [ 'core/spacer' ],
			transform: ( { height } ) =>
				createBlock( 'core/spacer', {
					height,
				} ),
			type: 'block',
		},
	],
};
