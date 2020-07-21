import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion/comunicacion.service';
import { ValidateForms } from '../../model/validate-forms';

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
