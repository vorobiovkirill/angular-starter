import 'core-js/client/shim';
import 'zone.js';
import 'reflect-metadata';
import 'ts-helpers';
import 'hammerjs';

if (process.env.ENV !== 'production') {
	// Development.
	Error['stackTraceLimit'] = 5;
	require('zone.js/dist/long-stack-trace-zone');
}
