/* eslint-disable @wordpress/no-unsafe-wp-apis */

/**
 * Utility for libraries from the `Lodash`.
 */
import set from 'lodash/set';

/**
 * Utility for conditionally joining CSS class names together.
 */
import classnames from 'classnames';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see    https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, getColorClassName, __experimentalGetGradientClass } from '@wordpress/block-editor';

/**
 * Utility helper methods/variables.
 */
import utils from './utils';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see       https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @param     {Object}         props               Block meta-data properties.
 * @param     {Object}         props.attributes    Block attributes.
 * @return    {JSX.Element}                        Element to render.
 */
export default function save( { attributes } ) {
	const { height, visible, backgroundColor, customBackgroundColor, gradient, customGradient } = attributes;
	const backgroundColorClass = getColorClassName( 'background-color', backgroundColor );
	const gradientClass = __experimentalGetGradientClass( gradient );
	const styles = { height };

	if ( ! backgroundColorClass ) {
		set( styles, 'backgroundColor', customBackgroundColor );
	}

	if ( customGradient ) {
		set( styles, 'background', customGradient );
	}

	return (
		<div
			{ ...useBlockProps.save( {
				className: classnames( utils.visibilityClassNames( visible ), {
					[ backgroundColorClass ]: backgroundColorClass,
					[ gradientClass ]: gradientClass,
				} ),
				style: { ...styles },
			} ) }
			aria-hidden
		/>
	);
}
