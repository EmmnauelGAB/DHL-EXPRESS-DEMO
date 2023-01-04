import { Component, ViewChild } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DHL-EXPRESS';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer:DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      'pdf_icon', this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/clients/img_pdf-a.svg")
    );
  }
}
