import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { aboutRoutes, Routing } from './about.routing';
import { AboutComponent } from './about.component';
import { LocalizeRouterModule } from 'localize-router';

@NgModule({
	declarations: [AboutComponent],
	imports: [
		Routing,
		SharedModule,
		LocalizeRouterModule.forChild(aboutRoutes),
	],
})
export class AboutModule {}
