import { Component, OnInit, ViewChild } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion/comunicacion.service';
import { OptionsForms } from '../../model/options-forms';

@Component({
  selector: 'app-form-mascota1',
  templateUrl: './form-mascota1.component.html',
  styleUrls: ['./form-mascota1.component.css']
})
export class FormMascota1Component implements OnInit {

  mascota = new Mascota();
  optionsForm = new OptionsForms();
  e: boolean;
  v: boolean;

  constructor(private router: Router, private comunicacionService: ComunicacionService) { }

  ngOnInit(): void {
    this.validarMascota();
    this.validarCheck();
  }

  validate(e) {
    this.optionsForm.validate(e.target.name, this.mascota);
  }

  validarCheck() {
    if (this.comunicacionService.especie === true){
      this.v = this.comunicacionService.especie;
    }else{
      this.v = this.e;
    }
  }

  setEspecie(){
    if (this.v){
      this.mascota.especie = 'Felino';
      this.comunicacionService.setEspecie(true);
    }else{
      this.mascota.especie = 'Can';
      this.comunicacionService.setEspecie(false);
    }
  }

  validarMascota() {
    if (this.comunicacionService.mascota != null){
      this.mascota = this.comunicacionService.mascota;
    }
  }

  setDatosMascota(){
   const v = this.optionsForm.validateAll(0, 1, this.mascota);
   if (v) {
      this.comunicacionService.sendMascota(this.mascota);
      this.router.navigate(['form-mascota2']);
    }else{
      this.optionsForm.throwMessageInfo('', 'Complete correctamente los campos');
    }
  }


}
