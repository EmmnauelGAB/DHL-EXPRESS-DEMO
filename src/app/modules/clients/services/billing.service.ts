import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Invoice } from '../model/billing.model';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private clienteHttp: HttpClient) { }

  public findInvoice(numberInvoice:String) : Observable<Invoice> { 
    console.log("data: " + numberInvoice)

    return this.clienteHttp.get<Invoice>("assets/data/invoice.json");
  }
}