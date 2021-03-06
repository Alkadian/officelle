import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'office/:office_id',
		loadChildren: () => import('./office/office.module').then(m => m.OfficeModule)
	},
	{
		path: '**', redirectTo: '/home', pathMatch: 'full',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
