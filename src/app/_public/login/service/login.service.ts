import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/app/core/models/request/authenticacion.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly URL_LOGIN = '/login'

  constructor(private clienteHttp: HttpClient) { }


  public doLogin(loginRequest: LoginRequest): Observable<void> {
    return this.clienteHttp.post<void>(`${environment.contextRoot + this.URL_LOGIN}`, JSON.stringify(loginRequest))
  }
}
