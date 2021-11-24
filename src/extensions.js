/**
 * Utility for libraries from the `Lodash`.
 */
import union from 'lodash/union';

/**
 * A lightweight & efficient EventManager for JavaScript.
 * Hooks are used to manage component state and lifecycle.
 *
 * @see    https://developer.wordpress.org/block-editor/reference-guides/packages/packages-hooks/
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Add the sixa Spacer Block to an array of blocks.
 * This adds support for sixa Spacer Block with other blocks or extensions.
 *
 * @param {Array} allowedBlocks List of blocks that are adding supporting for this module.
 * @return    {Array} 		              Updated list of allowed blocks.
 */
function addSpacerBlockToArray( allowedBlocks ) {
	return union( allowedBlocks, [ 'sixa/spacer' ] );
}
addFilter( 'sixa.formAllowedBlocksArgs', 'sixa/formModifyAllowedBlocksArgs', addSpacerBlockToArray );
