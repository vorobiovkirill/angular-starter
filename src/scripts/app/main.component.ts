import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	template: `
		<app-menu></app-menu>
		<app-language-switcher></app-language-switcher>
		<router-outlet></router-outlet>
	`,
})
export class MainComponent {
	constructor(private translate: TranslateService) {
		translate.setDefaultLang('en');
		translate.use('en');
	}
}
