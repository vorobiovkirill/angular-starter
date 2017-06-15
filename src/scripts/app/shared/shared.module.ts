import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { MathService } from './math-service/math.service';

@NgModule({
	imports     : [ RouterModule ],
	declarations: [ MenuComponent ],
	providers   : [ MathService ],
	exports		: [ MenuComponent ],
})
export class SharedModule {}
