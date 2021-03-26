/**
 * API that allows this block to be transformed from and to other block(s).
 */

/**
 * External dependencies
 */
import { get } from 'lodash-es';
import { blockName, blockClassName } from "@sixa/wp-block-utils";

/**
 * WordPress dependencies
 */
const { createBlock, getBlockAttributes } = wp.blocks;

/**
 * Constants
 */
const BLOCK_NAME = blockName( 'spacer' );
const BLOCK_CLASSNAME = blockClassName( 'spacer' );

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/spacer' ],
			transform: ( { height } ) =>
				createBlock( BLOCK_NAME, {
					height,
				} ),
		},
		{
			type: 'raw',
			selector: BLOCK_CLASSNAME,
			transform: ( node ) =>
				createBlock( BLOCK_NAME, {
					...getBlockAttributes( BLOCK_NAME, get( node, 'outerHTML' ) ),
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
