/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './Edit';
import Icon from './Icon';
import save from './save';
import transforms from './transforms';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'sixa/spacer', {
	/**
	 * @see    https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * @see    ./Edit.js
	 */
	edit: Edit,

	/**
	 * @see    ./Icon.js
	 */
	icon: Icon,

	/**
	 * @see    ./save.js
	 */
	save,

	/**
	 * @see    ./transforms.js
	 */
	transforms,
} );
