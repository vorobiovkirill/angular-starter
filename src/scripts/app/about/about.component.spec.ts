import { HttpModule, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MdCardModule } from '@angular/material';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
	let component: AboutComponent;
	let fixture: ComponentFixture<AboutComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ AboutComponent ],
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

		fixture = TestBed.createComponent(AboutComponent);
		component = fixture.componentInstance;
	});

	it('AboutComponent initialized', () => {
		expect(fixture).toBeDefined();
		expect(component).toBeDefined();
	});
});
