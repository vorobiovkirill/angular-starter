const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = function () {
	return webpackMerge(commonConfig(ENV), {
		/**
		 * @link https://webpack.github.io/docs/webpack-dev-server.html
		 */
		devServer: {
			contentBase: helpers.root('src'),
			historyApiFallback: true,
			port: 8080,
			open: true,
			stats: {
				colors: true,
				hash: false,
				version: false,
				timings: false,
				assets: false,
				chunks: false,
				modules: false,
				reasons: false,
				children: false,
				source: false,
				errors: true,
				errorDetails: true,
				warnings: false,
				publicPath: false,
			}
		},

		module: {
			rules: [
				{
					test: /\.ts$/,
					use: [
						{
							loader: 'awesome-typescript-loader',
							query: {
								sourceMap: false,
								inlineSourceMap: false,
								compilerOptions: {
									removeComments: false
								}
							},
						},
						{
							loader: 'angular2-template-loader'
						}
					],
					exclude: [/\.e2e\.ts$/]
				},
			],
		},

		plugins: [
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
