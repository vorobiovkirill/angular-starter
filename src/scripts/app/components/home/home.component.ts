import { Component } from '@angular/core';
import { MathService } from './math.service';

@Component({
	selector: 'app-home',
	template: `
		<h1>Home</h1>
	`,
})
export class HomeComponent {
	constructor(
		public mathService: MathService,
	) {
		this.mathService.add(1, 2);
	}
}
