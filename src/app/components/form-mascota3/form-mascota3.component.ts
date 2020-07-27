import { Component, OnInit, Input } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion/comunicacion.service';
import { MascotaServiceService } from '../../services/mascota-service.service';
import { OptionsForms } from '../../model/options-forms';

@Component({
  selector: 'app-form-mascota3',
  templateUrl: './form-mascota3.component.html',
  styleUrls: ['./form-mascota3.component.css']
})
export class FormMascota3Component implements OnInit {

  mascota: Mascota;
  optionsForms = new OptionsForms();

  constructor(private router: Router, private comunicacionService: ComunicacionService, private mascotaService: MascotaServiceService) {
  }

  ngOnInit(): void {
    this.mascota = this.comunicacionService.mascota;
  }

  setDatosMascota(): boolean{
    let valido = false;
    if (this.optionsForms.validateAll(3, 2, this.mascota)){
      this.comunicacionService.sendMascota(this.mascota);
      valido = true;
    }else{
      this.optionsForms.throwMessageInfo('', 'Complete los campos requeridos  * ');
    }
    return valido;
  }

  saveMascota(): void {
    if (this.setDatosMascota()) {
      this.mascotaService.saveMascota(this.mascota)
      .subscribe(data => {
        if (!Boolean(this.mascota.nombre)){
          this.optionsForms.throwMessageSuccess('', 'Se ingreso ' + this.mascota.nroChip);
        }else{
          this.optionsForms.throwMessageSuccess('', 'Se ingreso ' + this.mascota.nombre);
        }
        this.router.navigate(['form-historiaClinica']);
      }, error => {
        if (error === 400){
          this.optionsForms.throwMessageInfo('', 'La edad no es valida');
        }
        if (error === 409){
          this.optionsForms.throwMessageInfo('', 'La mascota ya se encuentra ingresada');
        }
        if (error === 0){
          this.optionsForms.throwMessageError('Algo salio mal!', '');
        }
      });
    }
  }

  back() {
    this.router.navigate(['form-mascota2']);
  }

}
