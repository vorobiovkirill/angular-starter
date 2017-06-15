import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
	let component: AboutComponent;
	let fixture: ComponentFixture<AboutComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ AboutComponent ],
			imports: [ RouterTestingModule ],
		});

		fixture = TestBed.createComponent(AboutComponent);
		component = fixture.componentInstance;
	});

	it('AboutComponent initialized', () => {
		expect(fixture).toBeDefined();
		expect(component).toBeDefined();
	});
});
