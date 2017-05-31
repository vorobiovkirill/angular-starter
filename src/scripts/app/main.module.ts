import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from './main.routing';

@NgModule({
	imports     : [
		BrowserModule,
		RouterModule.forRoot(
			Routes,
			{useHash: false, preloadingStrategy: PreloadAllModules},
		),
	],
	declarations: [
		MainComponent,
		HomeComponent,
	],
	providers   : [],
	bootstrap   : [MainComponent],
})
export class MainModule {}
