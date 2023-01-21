import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from './model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseURL = "http://localhost:8080/api/v1/usuarios";

  constructor(private httpClient : HttpClient) { }

    //Este medodo no sirve para obtener lo empleados
    obtenerListaDeUsuarios():Observable<Usuario[]>{
      return this.httpClient.get<Usuario[]>(`${this.baseURL}`)
    }
}
