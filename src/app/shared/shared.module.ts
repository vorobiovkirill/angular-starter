import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';

import { LocalizeParser, LocalizeRouterModule, StaticParserLoader } from 'localize-router';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MaterialModule } from './material.module';

// AoT requires an exported function for factories.
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function localizeLoaderFactory(translate: TranslateService, location: Location, http: Http) {
	return new StaticParserLoader(translate, location, http, 'assets/i18n/locales.json');
}

@NgModule({
	imports     : [
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		HttpClientModule,
		MaterialModule,
		LocalizeRouterModule.forRoot([], {
			provide: LocalizeParser,
			useFactory: localizeLoaderFactory,
			deps: [TranslateService, Location, Http],
		}),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ HttpClient ],
			},
		}),
	],
	declarations: [],
	providers   : [],
	exports		: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		TranslateModule,
		HttpModule,
		LocalizeRouterModule,
	],
})
export class SharedModule {}
