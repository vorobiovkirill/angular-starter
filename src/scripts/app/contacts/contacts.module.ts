import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { contactRoutes, Routing } from './contacts.routing';
import { ContactsComponent } from './contacts.component';
import { LocalizeRouterModule } from 'localize-router';

@NgModule({
	declarations: [ContactsComponent],
	imports: [
		Routing,
		SharedModule,
		LocalizeRouterModule.forChild(contactRoutes),
	],
})
export class ContactsModule {}
