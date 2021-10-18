/* eslint-disable @wordpress/no-unsafe-wp-apis */

/**
 * Helper React hooks specific for Sixa projects.
 */
import { useVisibilityClassNames } from '@sixa/wp-react-hooks';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see    https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, getColorClassName, __experimentalGetGradientClass } from '@wordpress/block-editor';

/**
 * Utility for conditionally joining CSS class names together.
 */
import classnames from 'classnames';

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
function save( { attributes } ) {
	const { backgroundColor, customBackgroundColor, customGradient: customBackgroundGradient, height, gradient: backgroundGradient, visible } = attributes;
	const backgroundColorClass = getColorClassName( 'background-color', backgroundColor );
	const backgroundGradientClass = __experimentalGetGradientClass( backgroundGradient );
	const visibilityClassNames = useVisibilityClassNames.save( visible );
	const blockProps = useBlockProps.save( {
		ariaHidden: true,
		className: classnames( visibilityClassNames, {
			'has-background': backgroundColorClass || customBackgroundColor,
			'has-background-gradient': backgroundGradientClass || customBackgroundGradient,
			[ backgroundColorClass ]: backgroundColorClass,
			[ backgroundGradientClass ]: backgroundGradientClass,
		} ),
		style: {
			backgroundColor: customBackgroundColor,
			background: customBackgroundGradient,
			height,
		},
	} );

	return <div { ...blockProps } />;
}

export default save;
