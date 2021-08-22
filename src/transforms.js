/**
 * Utility for libraries from the `Lodash`.
 */
import get from 'lodash/get';

/**
 * Utility helper methods specific for Sixa projects.
 */
import { blockClassName } from '@sixach/wp-block-utils';

/**
 * Given a block object, returns a copy of the block object.
 *
 * @see    https://github.com/WordPress/gutenberg/tree/HEAD/packages/blocks/README.md
 */
import { createBlock, getBlockAttributes } from '@wordpress/blocks';

/**
 * Block Transforms is the API that allows a block to be transformed from and to other blocks, as well as from other entities.
 * Existing entities that work with this API include shortcodes, files, regular expressions, and raw DOM nodes.
 */
const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/spacer' ],
			transform: ( { height } ) =>
				createBlock( 'sixa/spacer', {
					height,
				} ),
		},
		{
			type: 'raw',
			selector: blockClassName( 'spacer' ),
			transform: ( node ) =>
				createBlock( 'sixa/spacer', {
					...getBlockAttributes( 'sixa/spacer', get( node, 'outerHTML' ) ),
				} ),
		},
	],
	to: [
		{
			type: 'block',
			blocks: [ 'core/spacer' ],
			transform: ( { height } ) =>
				createBlock( 'core/spacer', {
					height,
				} ),
		},
	],
};

export default transforms;
