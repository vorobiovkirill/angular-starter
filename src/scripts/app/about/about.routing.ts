import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

export const aboutRoutes: Routes = [
	{ path: 'about', component: AboutComponent },
];

export const Routing = RouterModule.forChild(aboutRoutes);
