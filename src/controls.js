/**
 * Utility for libraries from the `Lodash`.
 */
import { merge } from 'lodash';

/**
 * Utility helper methods specific for Sixa projects.
 */
import { VisibilityToolbar } from '@sixa/wp-block-utils';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { BlockControls } from '@wordpress/block-editor';

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

	return (
		<>
			<BlockControls group="block">
				<VisibilityToolbar
					devices={ visible }
					onChange={ ( key, value ) => setAttributes( { visible: merge( {}, visible, { [ key ]: ! value } ) } ) }
				/>
			</BlockControls>
		</>
	);
}
