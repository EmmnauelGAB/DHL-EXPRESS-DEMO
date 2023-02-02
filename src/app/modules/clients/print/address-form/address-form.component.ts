import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  public addressForm: FormGroup;

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
    });
  }
}
