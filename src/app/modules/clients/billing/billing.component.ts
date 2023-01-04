import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Invoice } from '../model/billing.model';
import { BillingService } from '../services/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  dataInvoice:Invoice;
  formFindInvoice: FormGroup;
  
  get f() { return this.formFindInvoice.controls; }

  constructor(private formBuilder: FormBuilder, private billingService: BillingService) { 
    this.formFindInvoice = this.formBuilder.group({
      numberInvoice: ['10000990', Validators.compose([Validators.required, Validators.maxLength(50),])],
    });
  }

  ngOnInit(): void {
  }

  public findInvoice(): void {
    if (this.formFindInvoice.invalid) {
      console.log("mandar msg error")
      return;
    } else {
      this.billingService.findInvoice(this.f['numberInvoice'].value).subscribe( resultado => {
        this.dataInvoice = resultado
      });
    }
  }
}