import { NgModule } from '@angular/core';

import { Routing } from './about.routering';
import { AboutComponent } from './about.component';

@NgModule({
	declarations: [AboutComponent],
	imports: [Routing],
})
export class AboutModule {}
