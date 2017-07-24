import { NgModule } from '@angular/core';

import {
	MdButtonModule,
	MdButtonToggleModule,
	MdCardModule,
	MdIconModule,
	MdInputModule,
	MdListModule,
	MdMenuModule,
	MdSidenavModule,
	MdToolbarModule,
	MdTooltipModule,
} from '@angular/material';

@NgModule({
	imports     : [
		MdButtonModule,
		MdButtonToggleModule,
		MdCardModule,
		MdIconModule,
		MdInputModule,
		MdListModule,
		MdMenuModule,
		MdSidenavModule,
		MdToolbarModule,
		MdTooltipModule,
	],
	exports		: [
		MdButtonModule,
		MdButtonToggleModule,
		MdCardModule,
		MdIconModule,
		MdInputModule,
		MdListModule,
		MdMenuModule,
		MdSidenavModule,
		MdToolbarModule,
		MdTooltipModule,
	],
})
export class MaterialModule {}
