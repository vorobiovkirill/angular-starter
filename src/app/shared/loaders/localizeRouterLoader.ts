import { Location } from '@angular/common';
import { Http } from '@angular/http';

import { TranslateService } from '@ngx-translate/core';
import { LocalizeParser, StaticParserLoader } from 'localize-router';

export function localizeLoaderFactory(translate: TranslateService, location: Location, http: Http) {
	return new StaticParserLoader(translate, location, http, 'assets/i18n/locales.json');
}

export const localizeLoader = {
	provide: LocalizeParser,
	useFactory: localizeLoaderFactory,
	deps: [TranslateService, Location, Http],
};
