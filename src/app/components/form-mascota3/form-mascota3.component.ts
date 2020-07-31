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
  optionsForm = new OptionsForms();
  estados = new Array('En albergue', 'Adoptado', 'Muerto');
  tamanos = new Array('Pequeño', 'Mediano', 'Grande');

  constructor(private router: Router, private comunicacionService: ComunicacionService, private mascotaService: MascotaServiceService) {
  }

  ngOnInit(): void {
    this.mascota = this.comunicacionService.mascota;
  }

  validate(e){
    this.optionsForm.validate(e.target.name, this.mascota);
  }

  setDatosMascota(): boolean{
    let valido = false;
    const v = this.optionsForm.validateAll(3, 4, this.mascota);
    if (v){
      this.comunicacionService.sendMascota(this.mascota);
      valido = true;
    }else{
      this.optionsForm.throwMessageInfo('', 'Complete los campos correctamente');
    }
    return valido;
  }

  saveMascota(): void {
    if (this.setDatosMascota()) {
      this.mascotaService.saveMascota(this.mascota)
      .subscribe(data => {
        if (!Boolean(this.mascota.nombre)){
          this.optionsForm.throwMessageSuccess('', 'Se ingreso ' + this.mascota.nroChip);
        }else{
          this.optionsForm.throwMessageSuccess('', 'Se ingreso ' + this.mascota.nombre);
        }
        this.router.navigate(['form-historiaClinica']);
      }, error => {
        if (error === 400){
          this.optionsForm.throwMessageInfo('', 'La edad no es valida');
        }
        if (error === 409){
          this.optionsForm.throwMessageInfo('', 'La mascota ya se encuentra ingresada');
        }
        if (error === 0){
          this.optionsForm.throwMessageError('Algo salio mal!', '');
        }
      });
    }
  }

  back() {
    this.router.navigate(['form-mascota2']);
  }

}
