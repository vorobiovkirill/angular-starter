import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
	let component: ContactsComponent;
	let fixture: ComponentFixture<ContactsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ ContactsComponent ],
			imports: [ RouterTestingModule ],
		});

		fixture = TestBed.createComponent(ContactsComponent);
		component = fixture.componentInstance;
	});

	it('ContactsComponent initialized', () => {
		expect(fixture).toBeDefined();
		expect(component).toBeDefined();
	});
});
