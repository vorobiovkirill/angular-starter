import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizeRouterModule } from 'localize-router';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
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
export class HomeRoutingModule {}

export const routedComponents = [ HomeComponent ];
