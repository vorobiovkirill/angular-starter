// All necessary polyfills.
require('./polyfills');

// Custom styles.
require('../styles/main.sass');

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './app/main.module';

// Depending on the env mode, enable prod mode or add debugging modules.
if (process.env.ENV === 'production') {
	enableProdMode();
}

export function main() {
	// Main module.
	platformBrowserDynamic().bootstrapModule(MainModule);
}

if (document.readyState === 'complete') {
	main();
} else {
	document.addEventListener('DOMContentLoaded', main);
}
