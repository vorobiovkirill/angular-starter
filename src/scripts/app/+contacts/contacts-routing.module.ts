import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizeRouterModule } from 'localize-router';

import { ContactsComponent } from './contacts.component';

const routes: Routes = [
	{ path: 'contacts', component: ContactsComponent },
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
export class ContactsRoutingModule {}

export const routedComponents = [ ContactsComponent ];
