require('ts-node/register');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const helpers = require('./helpers');

exports.config = {
	baseUrl: 'http://localhost:3000/',

	specs: [
		helpers.root('src/scripts/**/**.e2e.ts'),
		helpers.root('src/scripts/**/*.e2e.ts')
	],

	exclude: [],

	framework: 'jasmine2',

	allScriptsTimeout: 110000,

	jasmineNodeOpts: {
		showTiming: true,
		showColors: true,
		isVerbose: false,
		includeStackTrace: false,
		defaultTimeoutInterval: 400000,
		print: function() {},
	},

	directConnect: true,

	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			'args': ['no-sandbox']
		}
	},

	onPrepare: function () {
		jasmine.getEnv().addReporter(new SpecReporter({
			spec: {
				displayStacktrace: true
			}
		}));
		browser.ignoreSynchronization = true;
	},

	useAllAngular2AppRoots: true
};
