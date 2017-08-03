import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

import { MathService } from './services/math/math.service';

@NgModule({
	imports     : [ SharedModule ],
	declarations: [ LanguageSwitcherComponent ],
	providers   : [ MathService ],
	exports		: [ LanguageSwitcherComponent ],
})
export class CoreModule {}
