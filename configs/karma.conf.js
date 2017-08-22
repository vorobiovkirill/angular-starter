/**
 * Karma configuration.
 *
 * @param config
 */
const ENV = process.env.ENV;
module.exports = function(config) {
	const karmaConfig = {
		/**
		 * Base path that will be used to resolve all patterns (eg. files, exclude).
		 */
		basePath: '',

		/**
		 * @link https://npmjs.org/browse/keyword/karma-adapter
		 */
		frameworks: [ 'jasmine' ],

		client: {
			captureConsole: true,
			mocha: {
				bail: true
			}
		},

		/**
		 * List of files / patterns to load in the browser.
		 */
		files: [
			{ pattern: './configs/spec-bundle.js', watched: false },
			{ pattern: './node_modules/@angular/material/prebuilt-themes/indigo-pink.css', included: true, watched: false },
		],

		/**
		 * @link https://npmjs.org/browse/keyword/karma-preprocessor
		 */
		preprocessors: { './configs/spec-bundle.js': [ 'coverage', 'webpack', 'sourcemap' ] },

		webpack: require('./webpack.test.js')(),

		coverageReporter: {
			dir : './coverage',
			reporters: [
				{ type: 'in-memory' },
				{ type: 'cobertura', subdir: 'cobertura' }
			]
		},

		remapCoverageReporter: {
			'text-summary': null,
			json: './coverage/coverage.json',
			html: './coverage/html'
		},

		/**
		 * Webpack will keep silence.
		 */
		webpackMiddleware: {
			quiet: true,
		},

		/**
		 * @link https://npmjs.org/browse/keyword/karma-reporter
		 */
		reporters: [ 'mocha', 'coverage', 'remap-coverage' ],

		/**
		 * Web server port.
		 */
		port: 9877,

		/**
		 * Enable / disable colors in the output (reporters and logs).
		 */
		colors: true,

		/**
		 * Level of logging.
		 * Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		 */
		logLevel: config.LOG_INFO,

		/**
		 * Enable / disable watching file and executing tests whenever any file changes.
		 */
		autoWatch: false,

		browsers: [],

		/**
		 * Continuous Integration mode
		 * if true, Karma captures browsers, runs the tests and exits
		 */
		singleRun: true,
	};

	/**
	 * @link http://karma-runner.github.io/1.0/config/browsers.html
	 */
	if (ENV === 'build') {
		// Build on GitLab CI.
		karmaConfig.browsers.push('PhantomJS');
	} else {
		// Local tests.
		karmaConfig.browsers.push('Chrome');
	}

	config.set(karmaConfig);
};
