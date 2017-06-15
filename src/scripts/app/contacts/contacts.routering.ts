import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts.component';

const routes: Routes = [
	{ path: 'contacts', component: ContactsComponent },
];

export const Routing = RouterModule.forChild(routes);
