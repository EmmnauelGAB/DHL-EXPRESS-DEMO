import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//Multilenguaje -- Traslate
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  langs: string[] = [];

  constructor(public dialog: MatDialog, private translate: TranslateService) {
    //Configuracion defaul de idioma -- begin
    this.translate.addLangs(['en', 'es']);
    this.langs = this.translate.getLangs();
    //Configuracion defaul de idioma -- ends
   }
   openDialog() {
    this.viewLabelHello = false;
    this.viewlogin = true;
    this.dialog.open(mainNavModelComponent, {width: '450px'});
   }
    //Funcion cambio de idioma -- begin
  changeLang(lang: string) {
    this.translate.use(lang);
  }
  //Funcion cambio de idioma -- ends

  ngOnInit(): void {
  }

  public viewlogin: boolean = true;
  public viewLabelHello: boolean = false;
  public mostrarHello() {
    this.viewLabelHello = true;
    this.viewlogin = false

  }

  public exit() {

    this.dialog.closeAll();
  }


}
@Component({
  selector: 'main-nav-modal.component',
  templateUrl: 'main-nav-modal.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class mainNavModelComponent {

  constructor(public dialog: MatDialog) {}
  exit(){
    this.viewLabelHello = false;
    this.viewlogin = true;
    this.dialog.closeAll();
  }

  public viewlogin: boolean = true;
  public viewLabelHello: boolean = false;

}
