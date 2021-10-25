/* eslint-disable @wordpress/no-unsafe-wp-apis */

/**
 * Utility for libraries from the `Lodash`.
 */
import { forOwn, get, join, set, trim } from 'lodash';

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
 * Block meta-data.
 */
import metaData from '../block.json';

/**
 * The following array could export several deprecated versions.
 *
 * Deprecation will be tried if the current state of the block is
 * invalid or if the deprecation defines an "isEligible" function that returns true.
 */
export default [
	{
		attributes: {
			...metaData?.attributes,
			visible: {
				type: 'object',
				default: {
					desktop: false,
					laptop: false,
					tablet: false,
					smartphone: false,
				},
			},
		},
		supports: metaData?.supports,
		migrate( { visible: { desktop: widescreen, laptop, tablet, smartphone: mobile }, ...attributes } ) {
			return {
				...attributes,
				visible: {
					widescreen,
					laptop,
					tablet,
					mobile,
				},
			};
		},
		save( { attributes } ) {
			const { height, visible, backgroundColor, customBackgroundColor, gradient, customGradient } = attributes;
			const backgroundColorClass = getColorClassName( 'background-color', backgroundColor );
			const gradientClass = __experimentalGetGradientClass( gradient );
			const styles = { height };
			const visibilityClassNames = ( breakpoints = {} ) => {
				const classNames = [];
				const visibilityAttrs = {
					desktop: {
						className: 'widescreen',
						value: false,
					},
					laptop: {
						className: 'desktop',
						value: false,
					},
					tablet: {
						className: 'tablet',
						value: false,
					},
					smartphone: {
						className: 'mobile',
						value: false,
					},
				};
				forOwn( breakpoints, ( value, key ) => {
					classNames.push( classnames( { [ `hide-${ get( visibilityAttrs, `${ key }.className` ) }` ]: !! value } ) );
				} );
				return trim( join( classNames, ' ' ) );
			};

			if ( ! backgroundColorClass ) {
				set( styles, 'backgroundColor', customBackgroundColor );
			}

			if ( customGradient ) {
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
		},
	},
];
