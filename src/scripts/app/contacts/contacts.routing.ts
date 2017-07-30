import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts.component';

export const contactRoutes: Routes = [
	{ path: 'contacts', component: ContactsComponent },
];

export const Routing = RouterModule.forChild(contactRoutes);
