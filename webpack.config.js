// Look in ./configs folder for webpack configs.
switch (process.env.ENV) {
	case 'prod':
	case 'build':
	case 'production':
		module.exports = require('./config/webpack.prod');
		break;
	case 'test':
	case 'testing':
		module.exports = require('./config/webpack.test');
		break;
	case 'dev':
	case 'development':
	default:
		module.exports = require('./config/webpack.dev');
}
