import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizeRouterModule } from 'localize-router';

import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '/404' },
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
export class NotFoundRoutingModule {}

export const routedComponents = [ NotFoundComponent ];
