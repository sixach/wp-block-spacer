module.exports = () => ( {
	plugins: [
		require( 'postcss-import' ),
		require( 'postcss-selector-replace' )( {
			before: [ '[prefix]' ],
			after: [ 'sixa' ],
		} ),
	],
} );
