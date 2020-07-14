import { Component, OnInit, Input } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion/comunicacion.service';
import { MascotaServiceService } from '../../services/mascota-service.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-form-mascota3',
  templateUrl: './form-mascota3.component.html',
  styleUrls: ['./form-mascota3.component.css']
})
export class FormMascota3Component implements OnInit {

  mascota: Mascota;

  constructor(private router: Router, private comunicacionService: ComunicacionService, private mascotaService: MascotaServiceService) {
  }

  ngOnInit(): void {
    this.mascota = this.comunicacionService.mascota;
  }

  validarFormulario(): boolean {
    let valido = true;
    if (!Boolean(this.mascota.tamano)){
      valido = false;
      alert('Indique lel tamaño');
    }
    if (!Boolean(this.mascota.personalidad)){
      valido = false;
      alert('Indique la personalidad');
    }
    if (!Boolean(this.mascota.estado)){
      valido = false;
      alert('Indique el estado');
    }
    return valido;
  }

  setDatosMascota(){
    if (this.validarFormulario()){
      this.comunicacionService.sendMascota(this.mascota);
      this.router.navigate(['form-mascota3']);
    }
  }

  saveMascota(): void {
    this.setDatosMascota();
    this.mascotaService.saveMascota(this.mascota)
    .subscribe(data => {
      alert('Se ingreso la mascota');
      this.router.navigate(['form-historiaClinica']);
    });
  }

  back() {
    this.router.navigate(['form-mascota2']);
  }

}
