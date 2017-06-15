import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AboutModule } from './about/about.module';
import { ContactsModule } from './contacts/contacts.module';
import { SharedModule } from './shared/shared.module';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { Routes } from './main.routing';

@NgModule({
	imports     : [
		BrowserModule,
		SharedModule,
		AboutModule,
		ContactsModule,
		RouterModule.forRoot(Routes, {useHash: false}),
	],
	declarations: [
		MainComponent,
		HomeComponent,
		NotFoundComponent,
	],
	bootstrap   : [ MainComponent ],
})
export class MainModule {}
