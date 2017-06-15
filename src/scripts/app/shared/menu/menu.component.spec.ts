import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
	let component: MenuComponent;
	let fixture: ComponentFixture<MenuComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ MenuComponent ],
			imports: [ RouterTestingModule ],
		});

		fixture = TestBed.createComponent(MenuComponent);
		component = fixture.componentInstance;
	});

	it('MenuComponent initialized', () => {
		expect(fixture).toBeDefined();
		expect(component).toBeDefined();
	});
});
