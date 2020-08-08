import { Component, OnInit } from '@angular/core';
import { HistoriaClinica } from '../../model/historia-clinica';

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

}
