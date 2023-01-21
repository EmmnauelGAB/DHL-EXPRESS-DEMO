import { Component, OnInit } from '@angular/core';
//Multilenguaje -- Traslate
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  langs: string[] = [];

  constructor(private translate: TranslateService) {
    //Configuracion defaul de idioma -- begin
    this.translate.addLangs(['en', 'es']);
    this.langs = this.translate.getLangs();
    //Configuracion defaul de idioma -- ends
   }

    //Funcion cambio de idioma -- begin
  changeLang(lang: string) {
    this.translate.use(lang);
  }
  //Funcion cambio de idioma -- ends

  ngOnInit(): void {
  }



}
