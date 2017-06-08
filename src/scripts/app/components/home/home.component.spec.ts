import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ HomeComponent ],
			imports: [ RouterTestingModule ],
		});

		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
	});

	it('Home initialized', () => {
		expect(fixture).toBeDefined();
		expect(component).toBeDefined();
	});
});
