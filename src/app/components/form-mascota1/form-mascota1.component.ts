import { Component, OnInit, ViewChild } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { FormMascota2Component } from '../form-mascota2/form-mascota2.component';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion/comunicacion.service';
import { empty } from 'rxjs';
import { ValidateForms } from '../../model/validate-forms';

@Component({
  selector: 'app-form-mascota1',
  templateUrl: './form-mascota1.component.html',
  styleUrls: ['./form-mascota1.component.css']
})
export class FormMascota1Component implements OnInit {

  mascota: Mascota = new Mascota();

  constructor(private router: Router, private comunicacionService: ComunicacionService) { }

  ngOnInit(): void {
    this.validarMascota();
  }

  validarMascota() {
    if (this.comunicacionService.mascota != null){
      this.mascota = this.comunicacionService.mascota;
    }
  }

  setDatosMascota(){
    if (ValidateForms.validate(0, 2, this.mascota)){
      this.comunicacionService.sendMascota(this.mascota);
      this.router.navigate(['form-mascota2']);
    }else{
      ValidateForms.throwMessageInfo('', 'Complete los campos requeridos * ');
    }
  }


}
