import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { LocalizeRouterModule } from 'localize-router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MaterialModule } from './material.module';

// AoT requires an exported function for factories.
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, 'i18n/', '.json');
}

@NgModule({
	imports     : [
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		HttpClientModule,
		MaterialModule,
		LocalizeRouterModule.forRoot([]),
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
