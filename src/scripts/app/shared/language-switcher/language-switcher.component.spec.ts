import { HttpModule, Http } from '@angular/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LanguageSwitcherComponent } from './language-switcher.component';

describe('LanguageSwitcherComponent', () => {
	let component: LanguageSwitcherComponent;
	let fixture: ComponentFixture<LanguageSwitcherComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ LanguageSwitcherComponent ],
			imports: [
				HttpModule,
				RouterTestingModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: (http: Http) => new TranslateHttpLoader(http, 'i18n/', '.json'),
						deps: [Http],
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
