import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ContactsRoutingModule, routedComponents } from './contacts-routing.module';

@NgModule({
	imports: [
		SharedModule,
		ContactsRoutingModule,
	],
	declarations: [routedComponents],
})
export class ContactsModule {}
