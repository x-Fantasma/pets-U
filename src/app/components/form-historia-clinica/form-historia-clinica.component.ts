import { Component, OnInit } from '@angular/core';
import { HistoriaClinica } from '../../model/historia-clinica';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-historia-clinica',
  templateUrl: './form-historia-clinica.component.html',
  styleUrls: ['./form-historia-clinica.component.css']
})
export class FormHistoriaClinicaComponent implements OnInit {

  historia: HistoriaClinica;
  estadosR = new Array('Castrado', 'Gestante', 'Lactancia');
  condicionesC = new Array('Caquético', 'Delgado', 'Normal', 'Obeso', 'Sobrepeso');

  constructor() { }

  ngOnInit(): void {
  }

  saveVacuna() {
    Swal.mixin({
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Vacuna',
        text: 'Descripcion',
        input: 'text',
        confirmButtonText: 'Siguiente &rarr;',
        showCancelButton: true,
      },
      {
        title: 'Vacuna',
        text: 'Fecha',
        input: 'text',
        inputPlaceholder: 'dd/mm/aa',
        confirmButtonText: 'Siguiente &rarr;',
        showCancelButton: true,
      }
    ]);
  }

}
