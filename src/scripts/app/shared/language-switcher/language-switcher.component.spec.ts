import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MdButtonModule } from '@angular/material';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalizeRouterModule } from 'localize-router';

import { LanguageSwitcherComponent } from './language-switcher.component';

describe('LanguageSwitcherComponent', () => {
	let component: LanguageSwitcherComponent;
	let fixture: ComponentFixture<LanguageSwitcherComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ LanguageSwitcherComponent ],
			imports: [
				HttpModule,
				HttpClientModule,
				RouterTestingModule,
				MdButtonModule,
				LocalizeRouterModule.forRoot(null),
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'i18n/', '.json'),
						deps: [HttpClient],
					},
				}),
			],
		});

		fixture = TestBed.createComponent(LanguageSwitcherComponent);
		component = fixture.componentInstance;
	});

	it('LanguageSwitcherComponent initialized', () => {
		expect(fixture).toBeDefined();
		expect(component).toBeDefined();
	});
});
