import { MathService } from './math.service';

describe('MathService', () => {
	beforeEach(() => {
		this.mathService = new MathService();
	});

	it('add', () => {
		expect(this.mathService.add(1, 2)).toEqual(3);
	});
});
