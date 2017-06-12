import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
	let component: NotFoundComponent;
	let fixture: ComponentFixture<NotFoundComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ NotFoundComponent ],
			imports: [ RouterTestingModule ],
		});

		fixture = TestBed.createComponent(NotFoundComponent);
		component = fixture.componentInstance;
	});

	it('NotFound initialized', () => {
		expect(fixture).toBeDefined();
		expect(component).toBeDefined();
	});
});
