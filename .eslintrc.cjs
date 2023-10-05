module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	setings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-Runtime',
		'eslint-config-prettier',
		'standard',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 'off',
	},
};
