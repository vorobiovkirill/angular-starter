import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MdCardModule } from '@angular/material';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ HomeComponent ],
			imports: [
				HttpModule,
				HttpClientModule,
				RouterTestingModule,
				MdCardModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'i18n/', '.json'),
						deps: [HttpClient],
					},
				}),
			],
		});

		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
	});

	it('HomeComponent initialized', () => {
		expect(fixture).toBeDefined();
		expect(component).toBeDefined();
	});
});
