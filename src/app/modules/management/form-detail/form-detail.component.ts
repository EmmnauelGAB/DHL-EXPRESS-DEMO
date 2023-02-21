import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Invoice } from '../../clients/model/billing.model';
import { BillingService } from '../../clients/services/billing.service';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {

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
