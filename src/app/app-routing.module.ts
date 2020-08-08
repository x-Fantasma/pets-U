import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormMascota1Component } from './components/form-mascota1/form-mascota1.component';

import { FormMascota3Component } from './components/form-mascota3/form-mascota3.component';
import { FormMascota2Component } from './components/form-mascota2/form-mascota2.component';
import { FormHistoriaClinicaComponent } from './components/form-historia-clinica/form-historia-clinica.component';


const routes: Routes = [
  {path: '*', component: FormMascota1Component},
  {path: 'form-mascota1', component: FormMascota1Component},
  {path: 'form-mascota2', component: FormMascota2Component},
  {path: 'form-mascota3', component: FormMascota3Component},
  {path: 'form-historia', component: FormHistoriaClinicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
