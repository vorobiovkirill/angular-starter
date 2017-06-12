import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MathService } from './services/math.service';
import { Routes } from './main.routing';

@NgModule({
	imports     : [
		BrowserModule,
		RouterModule.forRoot(
			Routes,
			{
				useHash: false,
				preloadingStrategy: PreloadAllModules,
			},
		),
	],
	declarations: [
		MainComponent,
		HomeComponent,
		AboutComponent,
		ContactsComponent,
		MenuComponent,
		NotFoundComponent,
	],
	providers   : [ MathService ],
	bootstrap   : [ MainComponent ],
})
export class MainModule {}
