import { Component, ViewChild } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
//Multilenguaje -- Traslate
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DHL-EXPRESS';
  langs: string[] = [];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer:DomSanitizer, private translate: TranslateService){
    //Configuracion defaul de idioma -- begin
    translate.setDefaultLang('en');
    translate.use('en');
    //Configuracion defaul de idioma -- ends
    this.matIconRegistry.addSvgIcon(
      'pdf_icon', this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/clients/img_pdf-a.svg")
    );
  }

}
