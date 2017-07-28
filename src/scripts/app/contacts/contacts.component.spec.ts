import { HttpModule, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MdCardModule } from '@angular/material';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
	let component: ContactsComponent;
	let fixture: ComponentFixture<ContactsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ ContactsComponent ],
			imports: [
				HttpModule,
				RouterTestingModule,
				MdCardModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'i18n/', '.json'),
						deps: [Http],
					},
				}),
			],
		});

		fixture = TestBed.createComponent(ContactsComponent);
		component = fixture.componentInstance;
	});

	it('ContactsComponent initialized', () => {
		expect(fixture).toBeDefined();
		expect(component).toBeDefined();
	});
});
