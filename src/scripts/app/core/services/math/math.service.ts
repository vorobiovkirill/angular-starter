import { Injectable } from '@angular/core';

@Injectable()
export class MathService {
	public static add(first: number, second: number): number {
		return first + second;
	}
}
