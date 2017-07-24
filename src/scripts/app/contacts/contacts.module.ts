import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { Routing } from './contacts.routering';
import { ContactsComponent } from './contacts.component';

@NgModule({
	declarations: [ContactsComponent],
	imports: [Routing, SharedModule],
})
export class ContactsModule {}
