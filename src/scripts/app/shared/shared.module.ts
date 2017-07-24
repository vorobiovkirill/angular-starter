import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MenuComponent } from './menu/menu.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { MathService } from './math-service/math.service';

// AoT requires an exported function for factories.
export function HttpLoaderFactory(http: Http) {
	return new TranslateHttpLoader(http, 'i18n/', '.json');
}

@NgModule({
	imports     : [
		RouterModule,
		HttpModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [Http],
			},
		}),
	],
	declarations: [ MenuComponent, LanguageSwitcherComponent ],
	providers   : [ MathService ],
	exports		: [ MenuComponent, LanguageSwitcherComponent, TranslateModule ],
})
export class SharedModule {}
