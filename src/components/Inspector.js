/* eslint-disable @wordpress/no-unsafe-wp-apis */

/**
 * Utility for libraries from the `Lodash`.
 */
import max from 'lodash/max';

/**
 * This module allows you to create and use standalone block-editor element and components.
 *
 * @see    https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
 */
import { InspectorControls, __experimentalPanelColorGradientSettings } from '@wordpress/block-editor';

/**
 * This packages includes a library of generic WordPress components to be used for
 * creating common UI elements shared between screens and features of the WordPress dashboard.
 *
 * @see    https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { PanelBody, RangeControl } from '@wordpress/components';

/**
 * Internationalization utilities for client-side localization.
 *
 * @see    https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Runtime type checking for React props and similar objects.
 */
import PropTypes from 'prop-types';

/**
 * Inspector Controls appear in the post settings sidebar when a block is being edited.
 *
 * @see 	  https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/inspector-controls/README.md
 * @param 	  {Object} 	       props 				       Block meta-data properties.
 * @param 	  {Object} 	       props.attributes            Block attributes.
 * @param     {Object}  	   props.backgroundColor 	   An object containing the hex overlay color and a function to update it.
 * @param     {Object}  	   props.backgroundGradient    An object containing the gradient value and a function to update it.
 * @param     {Function}       props.setAttributes         Update block attributes.
 * @return    {JSX.Element}     						   Inspector element to render.
 */
function Inspector( { attributes, backgroundColor, backgroundGradient, setAttributes } ) {
	const { height } = attributes;
	const { backgroundColorValue, setBackgroundColor } = backgroundColor;
	const { backgroundGradientValue, setBackgroundGradient } = backgroundGradient;

	return (
		<InspectorControls>
			<PanelBody initialOpen>
				<RangeControl
					label={ __( 'Height in pixels', 'sixa-block-spacer' ) }
					max={ max( [ 500, height ] ) }
					min={ 1 }
					onChange={ ( value ) => setAttributes( { height: value } ) }
					value={ height }
				/>
			</PanelBody>
			<__experimentalPanelColorGradientSettings
				initialOpen
				settings={ [
					{
						colorValue: backgroundColorValue,
						gradientValue: backgroundGradientValue,
						label: __( 'Background', 'sixa-block-spacer' ),
						onColorChange: setBackgroundColor,
						onGradientChange: setBackgroundGradient,
					},
				] }
				title={ __( 'Color Settings', 'sixa-block-spacer' ) }
			/>
		</InspectorControls>
	);
}

Inspector.propTypes = {
	attributes: PropTypes.object.isRequired,
	backgroundColor: PropTypes.exact( {
		backgroundColorValue: PropTypes.string.isRequired,
		setBackgroundColor: PropTypes.func.isRequired,
	} ),
	backgroundGradient: PropTypes.exact( {
		backgroundGradientValue: PropTypes.string.isRequired,
		setBackgroundGradient: PropTypes.func.isRequired,
	} ),
	setAttributes: PropTypes.func.isRequired,
};

Inspector.defaultProps = {
	attributes: {},
	backgroundColor: {},
	backgroundGradient: {},
	setAttributes: () => {},
};

export default Inspector;
