import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './main.component.html',
})
export class MainComponent {
	constructor(private translate: TranslateService) {
		translate.setDefaultLang('en');
		translate.use('en');
	}
}
