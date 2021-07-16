/**
 * Utility for libraries from the `Lodash`.
 */
import { merge, lowerCase } from 'lodash';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { BlockControls } from '@wordpress/block-editor';

/**
 * This packages includes a library of generic WordPress components to be used for
 * creating common UI elements shared between screens and features of the WordPress dashboard.
 *
 * @see    https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */
import { ToolbarGroup, Dashicon } from '@wordpress/components';

/**
 * Retrieves the translation of text.
 *
 * @see    https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { sprintf } from '@wordpress/i18n';

/**
 * The BlockToolbar component is used to render a toolbar that serves as a wrapper for number of options for each block.
 *
 * @see     https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/block-toolbar/README.md
 * @param   {Object}    props 					    Block meta-data properties.
 * @param   {Object}    props.attributes 		    Block attributes.
 * @param   {Function}  props.setAttributes 	    Update block attributes.
 * @return 	{WPElement} 						    Toolbar element to render.
 */
export default function Controls( { attributes, setAttributes } ) {
	const { visible } = attributes;
	const handleOnChange = ( key, value ) => setAttributes( { visible: merge( {}, visible, { [ key ]: ! value } ) } );
	return (
		<>
			<BlockControls group="block">
				<ToolbarGroup
					controls={ map( visible, ( value, key ) => ( {
						icon: <Dashicon icon={ key } />,
						title: sprintf(
							/* translators: %s: Device name. */
							_x( 'Hide on %s?', 'visibility toolbar title', 'sixa' ),
							lowerCase( get( attributes, `${ key }.label` ) )
						),
						onClick: () => handleOnChange( key, value ),
						isActive: eq( ! value, false ),
					} ) ) }
				/>
			</BlockControls>
		</>
	);
}
