/* eslint-disable @wordpress/no-unsafe-wp-apis */

/**
 * Utility for libraries from the `Lodash`.
 */
import { get, max } from 'lodash';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * This packages includes a library of generic WordPress components to be used for
 * creating common UI elements shared between screens and features of the WordPress dashboard.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { PanelBody, RangeControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InspectorControls, __experimentalPanelColorGradientSettings as PanelColorGradientSettings } from '@wordpress/block-editor';

/**
 * Inspector Controls appear in the post settings sidebar when a block is being edited.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/inspector-controls/README.md
 * @param 	{Object} 	props 					    Block meta-data properties.
 * @param 	{Object} 	props.attributes 		    Block attributes.
 * @param 	{Object} 	props.backgroundColor 	    Background-color hex code and CSS class name.
 * @param 	{Function} 	props.setBackgroundColor 	Update background-color value.
 * @param 	{Function} 	props.useGradient 	        Update, get background gradient color.
 * @param 	{Function} 	props.handleOnChange 	    Update, spacer height.
 * @param   {Object}  	props.utils 			    Utility helper methods/variables.
 * @return 	{WPElement} 						    Inspector element to render.
 */
export default function Inspector( { attributes, backgroundColor, setBackgroundColor, useGradient, handleOnChange, utils } ) {
	const thresholds = get( utils, 'thresholds' );
	const { height } = attributes;
	const { setGradient, gradientValue } = useGradient;

	return (
		<InspectorControls>
			<PanelBody initialOpen={ true }>
				<RangeControl
					label={ __( 'Height in pixels', 'sixa' ) }
					min={ get( thresholds, 'size.min' ) }
					max={ max( [ get( thresholds, 'size.max' ), height ] ) }
					value={ height }
					onChange={ handleOnChange }
				/>
			</PanelBody>
			<PanelColorGradientSettings
				title={ __( 'Color Settings', 'sixa' ) }
				initialOpen={ true }
				settings={ [
					{
						label: __( 'Background', 'sixa' ),
						colorValue: get( backgroundColor, 'color' ),
						gradientValue,
						onColorChange: setBackgroundColor,
						onGradientChange: setGradient,
					},
				] }
			/>
		</InspectorControls>
	);
}
