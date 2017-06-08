import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			meta: {
				title: 'Home',
				description: 'Home description',
			},
		},
	},
	{
		path: 'about',
		component: AboutComponent,
		data: {
			meta: {
				title: 'About',
				description: 'About description',
			},
		},
	},
	{
		path: 'contacts',
		component: ContactsComponent,
		data: {
			meta: {
				title: 'Contacts',
				description: 'Contacts description',
			},
		},
	},
];
