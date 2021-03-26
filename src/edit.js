/**
 * Describes the structure of your block in the context of the editor.
 */

/**
 * External dependencies
 */
import classnames from 'classnames';
import { add, set, get, max, min, parseInt } from 'lodash-es';
import { visibilityClassNames, VisibilityToolbar } from '@sixa/wp-block-utils';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	BlockControls,
	InspectorControls,
	withColors,
	__experimentalUseGradient,
	__experimentalPanelColorGradientSettings: PanelColorGradientSettings,
} = wp.blockEditor;
const { PanelBody, ResizableBox, RangeControl } = wp.components;
const { compose, withInstanceId } = wp.compose;
const { useDispatch } = wp.data;
const { useState } = wp.element;

/**
 * Constants
 */
const MIN_SPACER_HEIGHT = 1;
const MAX_SPACER_HEIGHT = 500;

const Edit = ( { attributes, isSelected, className, setAttributes, backgroundColor, setBackgroundColor } ) => {
	const [ isResizing, setIsResizing ] = useState( false ),
		{ toggleSelection } = useDispatch( 'core/block-editor' ),
		{ height, visible } = attributes,
		{ gradientClass, setGradient, gradientValue } = __experimentalUseGradient(),
		backgroundColorClass = get( backgroundColor, 'class' ),
		onResizeStart = () => toggleSelection( false ),
		onResizeStop = () => toggleSelection( true ),
		handleOnChange = ( value ) => {
			setAttributes( {
				height: value,
			} );
		},
		handleOnResizeStart = ( ...args ) => {
			onResizeStart( ...args );
			setIsResizing( true );
		},
		handleOnResizeStop = ( event, direction, elt, delta ) => {
			onResizeStop();
			const spacerHeight = min( [ parseInt( add( height, get( delta, 'height' ) ), 10 ), MAX_SPACER_HEIGHT ] );
			handleOnChange( spacerHeight );
			setIsResizing( false );
		},
		styles = {};

	if ( ! backgroundColorClass ) {
		set( styles, 'backgroundColor', get( backgroundColor, 'color' ) );
	}

	if ( ! gradientClass ) {
		set( styles, 'background', gradientValue );
	}

	return (
		<>
			<ResizableBox
				className={ classnames( className, visibilityClassNames( visible ), 'block-library-spacer__resize-container', {
					'is-selected': isSelected,
					[ backgroundColorClass ]: backgroundColorClass,
					[ gradientClass ]: gradientClass,
				} ) }
				size={ {
					height,
				} }
				minHeight={ MIN_SPACER_HEIGHT }
				enable={ {
					top: false,
					right: false,
					bottom: true,
					left: false,
					topRight: false,
					bottomRight: false,
					bottomLeft: false,
					topLeft: false,
				} }
				onResizeStart={ handleOnResizeStart }
				onResizeStop={ handleOnResizeStop }
				showHandle={ isSelected }
				__experimentalShowTooltip={ true }
				__experimentalTooltipProps={ {
					axis: 'y',
					position: 'bottom',
					isVisible: isResizing,
				} }
				style={ { ...styles } }
			/>
			{ isSelected && (
				<>
					<BlockControls>
						<VisibilityToolbar
							devices={ visible }
							onChange={ ( key, value ) =>
								setAttributes( {
									visible: {
										...visible,
										[ key ]: ! value,
									},
								} )
							}
						/>
					</BlockControls>
					<InspectorControls>
						<PanelBody initialOpen={ true }>
							<RangeControl
								label={ __( 'Height', 'sixa' ) }
								help={ __( 'in pixels', 'sixa' ) }
								min={ MIN_SPACER_HEIGHT }
								max={ max( [ MAX_SPACER_HEIGHT, height ] ) }
								value={ height }
								onChange={ handleOnChange }
							/>
						</PanelBody>
						<PanelColorGradientSettings
							initialOpen={ false }
							title={ __( 'Color Settings', 'sixa' ) }
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
				</>
			) }
		</>
	);
};

export default compose( [ withColors( 'backgroundColor' ), withInstanceId ] )( Edit );
