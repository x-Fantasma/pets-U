import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormMascotaComponent } from './components/form-mascota/form-mascota.component';


const routes: Routes = [
  {path: 'form-mascota', component: FormMascotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
