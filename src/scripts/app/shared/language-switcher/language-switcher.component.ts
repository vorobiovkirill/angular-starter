import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-language-switcher',
	templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
	constructor(private translate: TranslateService) {}

	public switchLanguage(language: string) {
		this.translate.use(language);
	}
}
