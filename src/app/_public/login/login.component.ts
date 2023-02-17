import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogService } from '../../core/service/log.service';
import { LoginService } from './service/login.service';
import { SessionStorageService } from '../../core/service/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  get f() { return this.formLogin.controls; }

  constructor(private formBuilder: FormBuilder, private logService: LogService, private loginService:LoginService,
      private router: Router) {

    this.formLogin = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required, Validators.maxLength(50),])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(50),])]
    });

  }

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

  public doLogin() {
    if (this.formLogin.invalid) {
      this.logService.info("Formulario de login no valido")
      return;
    } else {
      this.loginService.doLogin(this.formLogin.value).subscribe({
        next: result => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.logService.error('Error al hacer login')
        }
      });
    }
  }
}
