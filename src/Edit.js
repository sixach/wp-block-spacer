/* eslint-disable @wordpress/no-unsafe-wp-apis */

/**
 * Utility for libraries from the `Lodash`.
 */
import { add, min, parseInt, set } from 'lodash';

/**
 * Helper React components specific for Sixa projects.
 */
import { VisibilityToolbar } from '@sixa/wp-block-components';

/**
 * Helper React hooks specific for Sixa projects.
 */
import { useToggle, useVisibilityClassNames } from '@sixa/wp-react-hooks';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see    https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
 */
import { useBlockProps, withColors, __experimentalUseGradient } from '@wordpress/block-editor';

/**
 * This packages includes a library of generic WordPress components to be used for
 * creating common UI elements shared between screens and features of the WordPress dashboard.
 *
 * @see    https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { ResizableBox } from '@wordpress/components';

/**
 * Data module to manage application state for both plugins and WordPress itself.
 * The data module is built upon and shares many of the same core principles of Redux.
 *
 * @see    https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/
 */
import { useDispatch } from '@wordpress/data';

/**
 * WordPress specific abstraction layer atop React.
 *
 * @see    https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { useMemo } from '@wordpress/element';

/**
 * Primitives to be used cross-platform.
 *
 * @see    https://developer.wordpress.org/block-editor/reference-guides/packages/packages-primitives/
 */
import { View } from '@wordpress/primitives';

/**
 * Utility for conditionally joining CSS class names together.
 */
import classnames from 'classnames';

/**
 * Inspector Controls sidebar settings.
 */
import Inspector from './components/Inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see    https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see 	  https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param 	  {Object}         props    		           Block meta-data properties.
 * @param 	  {Object} 	       props.attributes            Block attributes.
 * @param 	  {Object} 	       props.backgroundColor       An object containing the background background-color class name and a hex value of it.
 * @param 	  {boolean} 	   props.isSelected    	  	   Whether or not the block is currently selected.
 * @param 	  {Function} 	   props.setAttributes         Update block attributes.
 * @param 	  {Function} 	   props.setBackgroundColor    Function to update the background background-color.
 * @return    {JSX.Element} 			  		           Element to render.
 */
function Edit( { attributes, backgroundColor, isSelected, setAttributes, setBackgroundColor } ) {
	const styles = {};
	const { height, visible } = attributes;
	const [ isResizing, toggleIsResizing ] = useToggle();
	const { toggleSelection } = useDispatch( 'core/block-editor' );
	const blockProps = useBlockProps();
	const visibilityClassNames = useVisibilityClassNames( visible );
	const onResizeStart = () => toggleSelection( false );
	const onResizeStop = () => toggleSelection( true );
	const handleOnResizeStart = ( ...args ) => {
		onResizeStart( ...args );
		toggleIsResizing();
	};
	const handleOnResizeStop = ( event, direction, elt, delta ) => {
		onResizeStop();
		setAttributes( {
			height: min( [ parseInt( add( height, delta?.height ), 10 ), 1000 ] ),
		} );
		toggleIsResizing();
	};
	const { gradientClass: backgroundGradientClass, gradientValue: backgroundGradientValue, setGradient: setBackgroundGradient } = __experimentalUseGradient();
	const { backgroundColorClass, backgroundColorValue } = useMemo(
		() => ( {
			backgroundColorClass: backgroundColor?.class,
			backgroundColorValue: backgroundColor?.color,
		} ),
		[ backgroundColor ]
	);
	const classNames = classnames( visibilityClassNames, {
		'is-selected': isSelected,
		'is-resizing': isResizing,
		'has-background': backgroundColorClass || backgroundColorValue,
		'has-background-gradient': backgroundGradientClass || backgroundGradientValue,
		[ backgroundColorClass ]: backgroundColorClass,
		[ backgroundGradientClass ]: backgroundGradientClass,
	} );

	if ( ! backgroundColorClass ) {
		set( styles, 'backgroundColor', backgroundColorValue );
	}

	if ( backgroundGradientValue ) {
		set( styles, 'background', backgroundGradientValue );
	}

	return (
		<View { ...blockProps }>
			<ResizableBox
				className={ classNames }
				css={ {
					marginBottom: 0,
				} }
				enable={ {
					bottom: true,
					bottomLeft: false,
					bottomRight: false,
					left: false,
					right: false,
					top: false,
					topLeft: false,
					topRight: false,
				} }
				maxHeight={ 500 }
				minHeight={ 1 }
				onResizeStart={ handleOnResizeStart }
				onResizeStop={ handleOnResizeStop }
				size={ {
					height,
				} }
				showHandle={ isSelected }
				style={ { ...styles } }
				__experimentalShowTooltip={ true }
				__experimentalTooltipProps={ {
					axis: 'y',
					isVisible: isResizing,
					position: 'corner',
					showPx: true,
				} }
			/>
			<VisibilityToolbar onChange={ ( value ) => setAttributes( { ...value } ) } shouldRender={ isSelected } value={ visible } />
			<Inspector
				attributes={ attributes }
				backgroundColor={ { backgroundColorValue, setBackgroundColor } }
				backgroundGradient={ { backgroundGradientValue, setBackgroundGradient } }
				setAttributes={ setAttributes }
			/>
		</View>
	);
}

export default withColors( 'backgroundColor' )( Edit );
