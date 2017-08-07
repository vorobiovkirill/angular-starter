import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LocalizeRouterModule } from 'localize-router';

import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

import { MathService } from './services/math/math.service';

@NgModule({
	imports     : [ SharedModule, LocalizeRouterModule ],
	declarations: [ LanguageSwitcherComponent ],
	providers   : [ MathService ],
	exports		: [ LanguageSwitcherComponent ],
})
export class CoreModule {}
