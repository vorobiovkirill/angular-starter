import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { LocalizeRouterModule } from 'localize-router';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from './material.module';

@NgModule({
	imports     : [
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		HttpClientModule,
		MaterialModule,
		LocalizeRouterModule,
		TranslateModule,
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
