import { MathService } from './math.service';

describe('MathService', () => {
	it('add', () => {
		expect(MathService.add(1, 2)).toEqual(3);
	});
});
