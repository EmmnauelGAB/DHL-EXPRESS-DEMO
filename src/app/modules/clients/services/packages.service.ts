import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GenericResponse } from "../model/genericResponse.model";
import { Package } from "../model/package.model";

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private clienteHttp: HttpClient) { }

  public getAllGuidesAvailable() : Observable<GenericResponse<Package[]>> { 
    return this.clienteHttp.get<GenericResponse<Package[]>>("http://localhost:8080/dhl/guiaspaquetes");
  }
}