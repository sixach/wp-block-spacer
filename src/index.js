/**
 * Define meta-data for registering block type.
 */

/**
 * Internal dependencies & components
 */
import { get } from 'lodash-es';
import edit from './edit';
import save from './save';
import attributes from './attributes';
import transforms from './transforms';
import { icons, PREFIX, blockName } from '@sixa/wp-block-utils';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Block meta-data
 */
const name = 'spacer';
const title = __( 'Spacer', 'sixa' );
const category = 'design';
const icon = get( icons, name );

/**
 * Block settings
 */
const settings = {
	title,
	description: __( 'Insert blank areas with a customizable height between blocks.', 'sixa' ),
	keywords: [
		'sixa',
		_x( 'margin', 'block keyword', 'sixa' ),
		_x( 'blank', 'block keyword', 'sixa' ),
		_x( 'divider', 'block keyword', 'sixa' ),
	],
	supports: {
		anchor: true,
		html: false,
	},
	attributes,
	transforms,
	edit,
	save,
};

const registerBlock = () => {
	registerBlockType( blockName( name ), {
		category,
		icon: {
			src: icon,
		},
		...settings,
	} );
};

export { name, title, category, icon, settings, registerBlock, PREFIX };
