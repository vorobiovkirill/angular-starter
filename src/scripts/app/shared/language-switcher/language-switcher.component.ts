import { Component } from '@angular/core';

import { LocalizeRouterService } from 'localize-router';

@Component({
	selector: 'app-language-switcher',
	templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
	constructor(
		private localize: LocalizeRouterService) {
	}

	public switchLanguage(language: string) {
		this.localize.changeLanguage(language);
	}
}
