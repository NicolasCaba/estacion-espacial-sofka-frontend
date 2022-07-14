import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPageComponent } from './pages/crear-page/crear-page.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'crear',
        component: CrearPageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
