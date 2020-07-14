import { Injectable } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { Subject } from 'rxjs';
import {Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  mascota: Mascota;
  private enviarMensajeSubject = new Subject<Mascota>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  constructor(private router: Router) { }

  sendMascota(mascota: Mascota) {
    this.mascota = mascota;
    this.enviarMensajeSubject.next(mascota);
  }

}
