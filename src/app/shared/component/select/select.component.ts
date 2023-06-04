import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  data = {name : 'Jhon'}

  ages : any[] = [10, 20,  30, 40]
  constructor(private _dialog : MatDialog) { }

  ngOnInit(): void {
  }

  selectedOption(e : any){
      console.log('Selected age Option',e.source.value)
  }

  optionchanged(e : any){
    console.log(`Mat Select Event`,e.value)
  }

  // OpenDialog(){
  //  const dialogRef =  this._dialog.open(DialogComponent, {data : {name : 'Jhon'} } )

  //  dialogRef.afterClosed().subscribe(ele => {
  //   console.log("Dialog is Closed")
  //  })

  // }
}
