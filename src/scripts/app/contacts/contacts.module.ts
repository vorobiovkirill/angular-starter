import { NgModule } from '@angular/core';

import { Routing } from './contacts.routering';
import { ContactsComponent } from './contacts.component';

@NgModule({
	declarations: [ContactsComponent],
	imports: [Routing],
})
export class ContactsModule {}
