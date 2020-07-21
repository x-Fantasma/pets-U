import { Component, OnInit, Input } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion/comunicacion.service';
import { MascotaServiceService } from '../../services/mascota-service.service';
import { ValidateForms } from '../../model/validate-forms';

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

  setDatosMascota(): boolean{
    let valido = false;
    if (ValidateForms.validate(5, 7, this.mascota)){
      this.comunicacionService.sendMascota(this.mascota);
      valido = true;
    }else{
      ValidateForms.throwMessageInfo('', 'Complete los campos requeridos  * ');
    }
    return valido;
  }

  saveMascota(): void {
    if (this.setDatosMascota()) {
      this.mascotaService.saveMascota(this.mascota)
      .subscribe(data => {
        if (!Boolean(this.mascota.nombre)){
          ValidateForms.throwMessageSuccess('', 'Se ingreso ' + this.mascota.nroChip);
        }else{
          ValidateForms.throwMessageSuccess('', 'Se ingreso ' + this.mascota.nombre);
        }
        this.router.navigate(['form-historiaClinica']);
      }, error => {
        if (error === 400){
          ValidateForms.throwMessageInfo('', 'La edad no es valida');
        }
        if (error === 409){
          ValidateForms.throwMessageInfo('', 'La mascota ya se encuentra ingresada');
        }
        if (error === 0){
          ValidateForms.throwMessageError('Algo salio mal!', '');
        }
      });
    }
  }

  back() {
    this.router.navigate(['form-mascota2']);
  }

}
