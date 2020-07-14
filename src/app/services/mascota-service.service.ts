import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Mascota } from '../model/mascota';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MascotaServiceService {

  private ENDPOINT_BASE = 'http://localhost:8080/pets';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  saveMascota(mascota: Mascota) {
    return this.http.post<Mascota>(this.ENDPOINT_BASE + '/savemascota', mascota, this.httpOptions);
  }
}
