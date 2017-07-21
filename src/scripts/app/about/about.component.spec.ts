import { HttpModule, Http } from '@angular/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

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
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: (http: Http) => new TranslateHttpLoader(http, 'i18n/', '.json'),
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
