/**
 * Define structured data of this block.
 */

/**
 * External dependencies
 */
import { visibilityAttrs } from "@sixa/wp-block-utils";

const attributes = {
	height: {
		type: 'number',
		default: 100,
	},
	visible: {
		type: 'object',
		default: visibilityAttrs(),
	},
	backgroundColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
	},
	gradient: {
		type: 'string',
	},
	customGradient: {
		type: 'string',
	},
};

export default attributes;
