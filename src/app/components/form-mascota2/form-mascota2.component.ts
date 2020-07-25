import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion/comunicacion.service';
import { ValidateForms } from '../../model/validate-forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-mascota2',
  templateUrl: './form-mascota2.component.html',
  styleUrls: ['./form-mascota2.component.css']
})
export class FormMascota2Component implements OnInit {

  mascota: Mascota;
  s: boolean;
  v: boolean;

  constructor(private router: Router, private comunicacionService: ComunicacionService) {
  }

  ngOnInit(): void {
    this.mascota = this.comunicacionService.mascota;
    this.validarCheck();
  }

  validarCheck() {
    if (this.comunicacionService.sex === true){
      this.v = this.comunicacionService.sex;
    }else{
      this.v = this.s;
    }
  }

  setSex(){
    if (this.v){
      this.mascota.sexo = 'Hembra';
      this.comunicacionService.setSex(true);
    }else{
      this.mascota.sexo = 'Macho';
      this.comunicacionService.setSex(false);
    }
  }

  setDatosMascota(){
    if (ValidateForms.validate(2, 5, this.mascota)){
      this.comunicacionService.sendMascota(this.mascota);
      this.router.navigate(['form-mascota3']);
    }else{
      ValidateForms.throwMessageInfo('', 'Complete los campos requeridos  * ');
    }
  }

  back() {
    this.router.navigate(['form-mascota1']);
  }

}
