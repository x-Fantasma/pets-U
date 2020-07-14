import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion/comunicacion.service';

@Component({
  selector: 'app-form-mascota2',
  templateUrl: './form-mascota2.component.html',
  styleUrls: ['./form-mascota2.component.css']
})
export class FormMascota2Component implements OnInit {

  mascota: Mascota;

  constructor(private router: Router, private comunicacionService: ComunicacionService) {
  }

  ngOnInit(): void {
    this.mascota = this.comunicacionService.mascota;
  }

  validarFormulario(): boolean {
    let valido = true;
    if (!Boolean(this.mascota.raza)){
      valido = false;
      alert('Indique la raza');
    }
    if (!Boolean(this.mascota.color)){
      valido = false;
      alert('Indique el color');
    }
    if (!Boolean(this.mascota.sexo)){
      valido = false;
      alert('Indique el sexo');
    }
    if (!Boolean(this.mascota.edad)){
      valido = false;
      alert('Indique la edad');
    }
    return valido;
  }

  setDatosMascota(){
    if (this.validarFormulario()){
      this.comunicacionService.sendMascota(this.mascota);
      this.router.navigate(['form-mascota3']);
    }
  }


  back() {
    this.router.navigate(['form-mascota1']);
  }

}
