module.exports = {
	plugins: {
		'postcss-selector-replace': {
			before: [ '[prefix]' ],
			after: [ 'sixa' ],
		},
		'postcss-nested-ancestors': {},
		'postcss-nested': {},
		'postcss-if-media': {},
		'postcss-custom-media': {},
		'postcss-discard-empty': {},
		autoprefixer: { grid: true },
	},
};
