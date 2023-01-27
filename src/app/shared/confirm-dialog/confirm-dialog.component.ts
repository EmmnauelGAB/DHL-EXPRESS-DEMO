import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, Renderer2, OnChanges, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog } from 'src/app/core/models/general/dialog.model';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmDialogComponent implements OnInit, AfterViewInit {

  @ViewChild('elementRefParagraph') messageData: ElementRef;

  constructor(public dialog: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog) { }

  ngOnInit(): void {  }

  ngAfterViewInit() {
    
    if(this.data.message) {
      this.messageData.nativeElement.innerHTML = this.data.message
    } else if(this.data.messageTemplate) {
      this.messageData.nativeElement.innerHTML = this.data.messageTemplate
    }
  }

  closeDialog(): void {
    this.dialog.close()
  }
}
