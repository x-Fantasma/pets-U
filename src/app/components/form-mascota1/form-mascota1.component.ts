import { Component, OnInit, ViewChild } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { FormMascota2Component } from '../form-mascota2/form-mascota2.component';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion/comunicacion.service';
import { empty } from 'rxjs';

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

  validarFormulario(): boolean {
    let valido = true;
    if (!Boolean(this.mascota.nroChip)){
      valido = false;
      alert('Indique el numero de microchip');
    }
    if (!Boolean(this.mascota.nombre)){
      valido = false;
      alert('Indique el nombre');
    }
    if (!Boolean(this.mascota.especie)){
      valido = false;
      alert('Indique la especie');
    }
    return valido;
  }

  setDatosMascota(){
    if (this.validarFormulario()){
      this.comunicacionService.sendMascota(this.mascota);
      this.router.navigate(['form-mascota2']);
    }
  }


}
