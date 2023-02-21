import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reports-delete-modal',
  templateUrl: './reports-delete-modal.component.html',
  styleUrls: ['./reports-delete-modal.component.css']
})
export class ReportsDeleteModalComponent implements OnInit {

  @Input() isVisibleModalDeletee: boolean;
  @Output() isVisibleModalDeleteChange = new EventEmitter<boolean>;

  hiddenModalDeleteTemplate(){
    this.isVisibleModalDeletee = false;
    this.isVisibleModalDeleteChange.emit(this.isVisibleModalDeletee);
  }

  handleChildVariableChange(newChildVariableValue: boolean) {
    this.isVisibleModalDeletee= newChildVariableValue;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
