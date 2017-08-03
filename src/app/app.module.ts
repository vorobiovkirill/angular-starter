import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { ContactsModule } from './+contacts/contacts.module';
import { NotFoundModule } from './+not-found/not-found.module';

import { AppComponent } from './app.component';

@NgModule({
	imports     : [
		SharedModule,
		CoreModule,
		HomeModule,
		AboutModule,
		ContactsModule,
		NotFoundModule,
		RouterModule.forRoot([]),
	],
	declarations: [ AppComponent ],
	bootstrap   : [ AppComponent ],
})
export class AppModule {}
