import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogHtmlComponent } from '../dialog-html/dialog-html.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {


  constructor(private _dialog : MatDialog){}
  ngOnInit(): void {

  }
  
  OpenDialog(){
    const dialogRef =  this._dialog.open(DialogHtmlComponent, {data : {name : 'Jhon'} } )
 
    dialogRef.afterClosed().subscribe(ele => {
     console.log("Dialog is Closed")
    })
 
   }


  // name : string = 'Shiba Inu';
  // constructor(private _dialogRef : MatDialogRef<DialogComponent>,
  //             private dialog : MatDialog ,
  //             @Inject(MAT_DIALOG_DATA) public dialogData : any) {_dialogRef.disableClose = true}
    

  // ngOnInit(): void {
  //   // this.name = this.dialogData.name;
  // }

  // closedDialog(){
  //   this._dialogRef.close();
  // }
}
