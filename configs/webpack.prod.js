const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Ngtools = require('@ngtools/webpack');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

module.exports = function () {
	return webpackMerge(commonConfig(ENV), {
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: [
						{
							loader: '@ngtools/webpack',
						}
					],
					exclude: [/\.(spec|e2e)\.ts$/]
				},
			],
		},

		plugins: [
			/**
			 * @link https://www.npmjs.com/package/@ngtools/webpack
			 */
			new Ngtools.AotPlugin({
				tsConfigPath: helpers.root('tsconfig.webpack.json'),
				entryModule: helpers.root('src/scripts/app/main.module#MainModule'),
			}),

			/**
			 * @link http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
			 */
			new UglifyJsPlugin({
				beautify: false,
				output: { comments: false },
				mangle: { screw_ie8: true },
				compress: {
					screw_ie8: true,
					warnings: false,
					conditionals: true,
					unused: true,
					comparisons: true,
					sequences: true,
					dead_code: true,
					evaluate: true,
					if_return: true,
					join_vars: true,
					negate_iife: false
				},
			}),

			/**
			 * @link https://github.com/NMFR/optimize-css-assets-webpack-plugin
			 */
			new OptimizeCssAssetsPlugin(),

			/**
			 * @link https://webpack.github.io/docs/list-of-plugins.html#defineplugin
			 */
			new DefinePlugin({
				'ENV': JSON.stringify(ENV),
				'process.env': {
					'ENV': JSON.stringify(ENV),
				}
			}),
		]
	});
};
