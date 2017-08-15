const path = require('path');

const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = function() {
	'use strict'; // Block-scoped declarations (let, const, function, class) not yet supported outside strict mode.

	let config = {};

	config.devtool = 'inline-source-map';

	config.stats = {
		children: false,
	};

	config.performance = {
		hints: false
	};

	config.resolve = {
		extensions: ['.ts', '.js'],
	};

	config.output = {
		path: helpers.root('dist'),
		filename: 'js/[name].[hash].js',
		publicPath: '/',
	};

	config.module = {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				use: 'source-map-loader',
				exclude: [
					helpers.root('node_modules/rxjs'),
					helpers.root('node_modules/@angular')
				]
			},
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'awesome-typescript-loader',
						query: {
							sourceMap: false,
							inlineSourceMap: true,
							compilerOptions: {
								removeComments: true
							}
						},
					},
					{
						loader: 'angular2-template-loader'
					}
				],
				exclude: [/\.e2e\.ts$/]
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				enforce: 'post',
				test: /\.(js|ts)$/,
				use: 'istanbul-instrumenter-loader',
				include: helpers.root('src'),
				exclude: [
					/\.(e2e|spec)\.ts$/,
					/node_modules/
				]
			}
		]
	};

	config.plugins = [
		/**
		 * Fix Angular 2 compile warning.
		 * @link https://github.com/angular/angular/issues/11580
		 */
		new ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			path.resolve(__dirname, './src'),
			{}
		),

		/**
		 * @link https://www.npmjs.com/package/copy-webpack-plugin
		 */
		new CopyWebpackPlugin([
			{from: 'src/assets', to: 'assets'},
			{from: 'src/meta'},
		]),

		/**
		 * @link https://webpack.github.io/docs/list-of-plugins.html#defineplugin
		 */
		new DefinePlugin({
			'ENV': JSON.stringify(ENV),
			'process.env': {
				'ENV': JSON.stringify(ENV),
			}
		}),
	];

	return config;
};
