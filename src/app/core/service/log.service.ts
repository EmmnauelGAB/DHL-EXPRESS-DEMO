import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/*  
  Este servicio permitira habilitar o deshabilitar los logs agilmente 
  dependiendo el ambiente de trabajo.  
*/

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private activeLogs: boolean;

  constructor() {
    this.activeLogs = environment.activeLogs;
  }

  public info(mensaje: any): void {
    if (this.activeLogs) {
      window.console.info(mensaje);
    }
  }

  public log(mensaje: any): void {
    if (this.activeLogs) {
      window.console.log(mensaje);
    }
  }

  public error(mensaje: any): void {
    if (this.activeLogs) {
      window.console.error(mensaje);
    }
  }

  public set activacionLogs(parametro: boolean) {
    this.activeLogs = parametro;
  }

  public get activacionLogs(): boolean {
    return this.activeLogs;
  }
}