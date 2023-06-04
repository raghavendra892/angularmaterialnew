import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dialog-html',
  templateUrl: './dialog-html.component.html',
  styleUrls: ['./dialog-html.component.scss']
})
export class DialogHtmlComponent implements OnInit {
  name : string = 'Shiba Inu';
  constructor(private _dialogRef : MatDialogRef<DialogHtmlComponent>,
              private dialog : MatDialog ,
              @Inject(MAT_DIALOG_DATA) public dialogData : any) {_dialogRef.disableClose = true}
    

  ngOnInit(): void {
    this.name = this.dialogData.name;
  }

  closedDialog(){
    this._dialogRef.close();
  }
}
