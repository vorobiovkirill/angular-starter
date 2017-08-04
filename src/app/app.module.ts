import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LocalizeRouterModule } from 'localize-router';
import { localizeLoader } from './shared/loaders/localizeRouterLoader';

import { TranslateModule } from '@ngx-translate/core';
import { translateLoader } from './shared/loaders/translateLoader';

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
		TranslateModule.forRoot({ loader: translateLoader }),
		LocalizeRouterModule.forRoot([], localizeLoader),
	],
	declarations: [ AppComponent ],
	bootstrap   : [ AppComponent ],
})
export class AppModule {}
