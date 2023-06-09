import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: '',
		children: [
			 
			{
				path: '',
				loadChildren: () =>
				import('./layout/layout.module').then((m) => m.LayoutModule),
			 },
			 
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
              {
                onSameUrlNavigation: 'reload',
              }
            )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
