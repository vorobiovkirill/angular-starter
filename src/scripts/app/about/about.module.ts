import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { Routing } from './about.routering';
import { AboutComponent } from './about.component';

@NgModule({
	declarations: [AboutComponent],
	imports: [Routing, SharedModule],
})
export class AboutModule {}
