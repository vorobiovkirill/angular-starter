import { HomeComponent } from './components/home/home.component';

export const Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			meta: {
				title: 'Home',
				description: 'Home description',
			},
		},
	},
];
