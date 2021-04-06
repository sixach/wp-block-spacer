/* eslint-disable @wordpress/no-unsafe-wp-apis */

/**
 * Utility for libraries from the `Lodash`.
 */
import { get, set, add, min, parseInt } from 'lodash';

/**
 * Utility for conditionally joining CSS class names together.
 */
import classnames from 'classnames';

/**
 * Utility helper methods specific for Sixa projects.
 */
import { visibilityClassNames } from '@sixa/wp-block-utils';

/**
 * Data module to manage application state for both plugins and WordPress itself.
 * The data module is built upon and shares many of the same core principles of Redux.
 *
 * @see https://github.com/WordPress/gutenberg/tree/HEAD/packages/data/README.md
 */
import { withSelect, useDispatch } from '@wordpress/data';

/**
 * The compose package is a collection of handy Hooks and Higher Order Components (HOCs).
 * The compose function is an alias to `flowRight` from Lodash.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/compose/README.md
 */
import { compose, withInstanceId } from '@wordpress/compose';

/**
 * WordPress specific abstraction layer atop React.
 *
 * @see https://github.com/WordPress/gutenberg/tree/HEAD/packages/element/README.md
 */
import { useState } from '@wordpress/element';

/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { View } from '@wordpress/primitives';

/**
 * This packages includes a library of generic WordPress components to be used for
 * creating common UI elements shared between screens and features of the WordPress dashboard.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { ResizableBox } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, withColors, __experimentalUseGradient } from '@wordpress/block-editor';

/**
 * Utility helper methods/variables.
 */
import utils from './utils';

/**
 * Block Toolbar controls settings.
 */
import Controls from './controls';

/**
 * Inspector Controls sidebar settings.
 */
import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.css';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see 	https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param 	{Object}  props 	Block meta-data properties.
 * @return 	{WPElement} 		Element to render.
 */
function Edit( props ) {
	const styles = {};
	const thresholds = get( utils, 'thresholds' );
	const [ isResizing, setIsResizing ] = useState( false );
	const { isSelected, attributes, setAttributes, backgroundColor, useGradient } = props;
	const { height, visible } = attributes;
	const { gradientValue } = useGradient;
	const { toggleSelection } = useDispatch( 'core/block-editor' );
	const onResizeStart = () => toggleSelection( false );
	const onResizeStop = () => toggleSelection( true );
	const handleOnChange = ( newHeight ) => setAttributes( { height: newHeight } );
	const handleOnResizeStart = ( ...args ) => {
		onResizeStart( ...args );
		setIsResizing( true );
	};
	const handleOnResizeStop = ( event, direction, elt, delta ) => {
		onResizeStop();
		const spacerHeight = min( [ parseInt( add( height, get( delta, 'height' ) ), 10 ), get( thresholds, 'size.max' ) ] );
		handleOnChange( spacerHeight );
		setIsResizing( false );
	};

	if ( get( backgroundColor, 'color' ) ) {
		set( styles, 'backgroundColor', get( backgroundColor, 'color' ) );
	}

	if ( gradientValue ) {
		set( styles, 'background', gradientValue );
	}

	return (
		<>
			<View { ...useBlockProps() }>
				<ResizableBox
					className={ classnames( 'block-library-spacer__resize-container', visibilityClassNames( visible ), {
						'is-selected': isSelected,
					} ) }
					style={ { ...styles } }
					size={ {
						height,
					} }
					minHeight={ get( thresholds, 'size.min' ) }
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
				/>
			</View>
			{ isSelected && (
				<>
					<Controls { ...props } />
					<Inspector { ...props } handleOnChange={ handleOnChange } utils={ utils } />
				</>
			) }
		</>
	);
}

export default compose( [
	withInstanceId,
	withColors( 'backgroundColor' ),
	withSelect( () => {
		return {
			useGradient: __experimentalUseGradient(),
		};
	} ),
] )( Edit );
