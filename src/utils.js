/**
 * Utility for libraries from the `Lodash`.
 */
import { get, join, trim, forOwn } from 'lodash';

/**
 * Utility for conditionally joining CSS class names together.
 */
import classnames from 'classnames';

/**
 * Retrieves the translation of text.
 *
 * @see    https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { _x } from '@wordpress/i18n';

/**
 * Helpers.
 */
const utils = {
	thresholds: {
		size: {
			min: 1,
			max: 500,
			step: 1,
		},
	},
	visibilityAttrs: {
		desktop: {
			label: _x( 'Desktop', 'visibility label', 'sixa' ),
			className: 'widescreen',
			value: false,
		},
		laptop: {
			label: _x( 'Laptop', 'visibility label', 'sixa' ),
			className: 'desktop',
			value: false,
		},
		tablet: {
			label: _x( 'Tablet', 'visibility label', 'sixa' ),
			className: 'tablet',
			value: false,
		},
		smartphone: {
			label: _x( 'Smartphone', 'visibility label', 'sixa' ),
			className: 'mobile',
			value: false,
		},
	},
	visibilityClassNames: ( breakpoints = {} ) => {
		const classNames = [];
		forOwn( breakpoints, ( value, key ) => {
			classNames.push( classnames( { [ `hide-${ get( utils.visibilityAttrs, `${ key }.className` ) }` ]: !! value } ) );
		} );
		return trim( join( classNames, ' ' ) );
	}
};

export default utils;
