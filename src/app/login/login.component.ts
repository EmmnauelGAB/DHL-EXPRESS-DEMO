import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public tipoFormularioVencioPass: boolean = false;
  public tipoFormularioLogin: boolean = true;
  public tipoFormularioRecuperarPass: boolean = false;

  public onGoToRecuperarPass() {
    this.tipoFormularioRecuperarPass = true;
    this.tipoFormularioLogin = false;
    this.tipoFormularioVencioPass = false;
  }

  public onGoToVencioPass() {
    this.tipoFormularioRecuperarPass = false;
    this.tipoFormularioLogin = false;
    this.tipoFormularioVencioPass = true;
  }

  public onGoToLogin() {
    this.tipoFormularioRecuperarPass = false;
    this.tipoFormularioLogin = true;
    this.tipoFormularioVencioPass = false;
  }
}
