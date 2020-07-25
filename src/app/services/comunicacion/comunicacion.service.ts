import { Injectable } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { Subject } from 'rxjs';
import {Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  mascota: Mascota;
  sex: boolean;
  especie: boolean;
  private enviarMensajeSubject = new Subject<any>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  constructor(private router: Router) { }

  sendMascota(mascota: Mascota) {
    this.mascota = mascota;
    this.enviarMensajeSubject.next(mascota);
  }

  setSex(s: boolean){
    this.sex = s;
    this.enviarMensajeSubject.next(s);
  }

  setEspecie(e: boolean){
    this.especie = e;
    this.enviarMensajeSubject.next(e);
  }

}
