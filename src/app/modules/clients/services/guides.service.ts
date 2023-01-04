import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GuideTable } from '../model/guide.model';

@Injectable({
  providedIn: 'root'
})
export class GuidesService {

  constructor(private clienteHttp: HttpClient) { }

  public getAllGuidesAvailable() : Observable<GuideTable[]> { 
    return this.clienteHttp.get<GuideTable[]>("assets/data/guides_available.json");
  }
}