import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const Routes = [
	{ path: '', component: HomeComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '/404' },
];
