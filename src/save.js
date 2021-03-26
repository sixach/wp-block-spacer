/**
 * Defines the way in which the different attributes should be combined into the final markup.
 */

/**
 * External dependencies
 */
import { set } from 'lodash-es';
import classnames from 'classnames';
import { visibilityClassNames } from "@sixa/wp-block-utils";

/**
 * WordPress dependencies
 */
const { useBlockProps, getColorClassName, __experimentalGetGradientClass } = wp.blockEditor;

const save = ( { attributes } ) => {
	const { height, visible, backgroundColor, customBackgroundColor, gradient, customGradient } = attributes,
		backgroundColorClass = getColorClassName( 'background-color', backgroundColor ),
		gradientClass = __experimentalGetGradientClass( gradient ),
		styles = {
			height,
		};

	if ( ! backgroundColorClass ) {
		set( styles, 'backgroundColor', customBackgroundColor );
	}

	if ( ! gradientClass ) {
		set( styles, 'background', customGradient );
	}

	return (
		<div
			{ ...useBlockProps.save( {
				className: classnames( visibilityClassNames( visible ), {
					[ backgroundColorClass ]: backgroundColorClass,
					[ gradientClass ]: gradientClass,
				} ),
				style: { ...styles },
			} ) }
			aria-hidden
		/>
	);
};

export default save;
