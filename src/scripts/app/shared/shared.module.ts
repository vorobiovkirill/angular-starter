import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MaterialModule } from './material.module';

import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { MathService } from './math-service/math.service';

// AoT requires an exported function for factories.
export function HttpLoaderFactory(http: Http) {
	return new TranslateHttpLoader(http, 'i18n/', '.json');
}

@NgModule({
	imports     : [
		BrowserAnimationsModule,
		RouterModule,
		HttpModule,
		MaterialModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ Http ],
			},
		}),
	],
	declarations: [ LanguageSwitcherComponent ],
	providers   : [ MathService ],
	exports		: [
		BrowserAnimationsModule,
		MaterialModule,
		LanguageSwitcherComponent,
		TranslateModule,
	],
})
export class SharedModule {}
