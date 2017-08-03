import { browser, by, element } from 'protractor';

describe('Check homepage', () => {
	beforeEach(() => {
		browser.get(browser.baseUrl);
	});

	it('Homepage has correct h1', () => {
		element(by.css('h1')).getText().then(text => {
			expect(text).toEqual('Angular Starter');
		});
	});

	it('Homepage has correct title', () => {
		browser.getTitle().then(text => {
			expect(text).toEqual('Angular Starter');
		});
	});
});
