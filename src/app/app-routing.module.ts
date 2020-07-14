import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormMascota1Component } from './components/form-mascota1/form-mascota1.component';

import { FormMascota3Component } from './components/form-mascota3/form-mascota3.component';
import { FormMascota2Component } from './components/form-mascota2/form-mascota2.component';


const routes: Routes = [
  {path: 'form-mascota1', component: FormMascota1Component},
  {path: 'form-mascota2', component: FormMascota2Component},
  {path: 'form-mascota3', component: FormMascota3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
