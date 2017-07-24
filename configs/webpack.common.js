const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlElementsWebpackPlugin = require('html-elements-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const helpers = require('./helpers');

const METADATA = require('./metadata-config');

module.exports = function(ENV) {
	return {
		entry: {
			'main': './src/scripts/main.ts',
		},

		performance: {
			hints: false,
		},

		stats: {
			children: false,
		},

		output: {
			path: helpers.root('dist'),
			filename: 'js/[name].[hash].js',
			publicPath: '/',
		},

		resolve: {
			extensions: ['.ts', '.js', '.css','.sass', '.scss', '.html'],
			modules: [
				'node_modules',
			],
		},

		module: {
			rules: [
				{
					test: /\.(sass|scss|css)$/,
					use: ExtractTextPlugin.extract({
						use: ['css-loader?importLoaders=1', 'postcss-loader', 'sass-loader'],
						fallback: 'style-loader'
					})
				},
				{
					test: /\.html$/,
					use: 'raw-loader',
					exclude: [
						helpers.root('src/index.html')
					]
				},
				{
					test: /\.(jpg|jpeg|gif|png|svg)$/,
					exclude: /node_modules/,
					use: 'url-loader?limit=100&name=img/[name].[ext]'
				},
				{
					test: /\.(woff|woff2|eot|ttf|svg)$/,
					exclude: /node_modules/,
					use: 'url-loader?limit=1024&name=fonts/[name].[ext]'
				},
			],
		},

		plugins: [
			/**
			 * @link https://github.com/kossnocorp/assets-webpack-plugin
			 */
			new AssetsPlugin({
				path: './dist',
				filename: 'webpack-assets.json',
				prettyPrint: true
			}),

			/**
			 * @link https://github.com/webpack/extract-text-webpack-plugin
			 */
			new ExtractTextPlugin('css/style.[hash].css'),

			/**
			 * @link https://github.com/ampedandwired/html-webpack-plugin
			 */
			new HtmlWebpackPlugin({
				title: METADATA.title,
				env: ENV,
				metadata: METADATA,
				template: './src/index.html',
				chunksSortMode: 'dependency',
				inject: 'body',
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeStyleLinkTypeAttributes: true,
					keepClosingSlash: true,
					minifyJS: true,
					minifyCSS: true,
					minifyURLs: true
				},
			}),

			/**
			 * @link https://github.com/AngularClass/angular2-webpack-starter/tree/master/config/html-elements-plugin
			 */
			new HtmlElementsWebpackPlugin({
				headTags: require('./head-config'),
			}),

			/**
			 * @link https://www.npmjs.com/package/copy-webpack-plugin
			 */
			new CopyWebpackPlugin([
				{from: 'src/icons/favicon', to: 'icons/favicon'},
				{from: 'src/scripts/i18n', to: 'i18n'},
				{from: 'src/meta'},
			]),

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
			 * Fix for moment.js, just remove other localizations.
			 * @link https://iamakulov.com/notes/webpack-front-end-size-caching/#minification
			 */
			new ContextReplacementPlugin(
				/moment[\/\\]locale/,
				/ru\.js/
			),

			/**
			 * @link https://webpack.github.io/docs/list-of-plugins.html#defineplugin
			 */
			new DefinePlugin({
				'ENV': JSON.stringify(ENV),
				'process.env': {
					'ENV': JSON.stringify(ENV),
				}
			}),
		],
	}
};
