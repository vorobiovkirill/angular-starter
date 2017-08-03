import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizeRouterModule } from 'localize-router';

import { AboutComponent } from './about.component';

const routes: Routes = [
	{ path: 'about', component: AboutComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		LocalizeRouterModule.forChild(routes),
	],
	exports: [
		RouterModule,
		LocalizeRouterModule,
	],
})
export class AboutRoutingModule {}

export const routedComponents = [ AboutComponent ];
