import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { NotFoundRoutingModule, routedComponents } from './not-found-routing.module';

@NgModule({
	imports: [
		SharedModule,
		NotFoundRoutingModule,
	],
	declarations: [routedComponents],
})
export class NotFoundModule {}
