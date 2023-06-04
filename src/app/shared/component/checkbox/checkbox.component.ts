import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checkedStatus : boolean = false;
  constructor(private _materialService : MaterialService) { }

  ngOnInit(): void {
  }

  checkBoxstatus(e : any){
   // console.log("Check Box Status",e, e.checked)
    console.log("Check Box Status", e.checked)
    if(e.checked){
      this._materialService._snackBar.open("Check Box Checked", 'Dissmiss',{
        duration : 1500,
        verticalPosition : 'bottom',
        horizontalPosition : 'center'
      })
    }else{
      this._materialService._snackBar.open("Check Box Not Checked", 'Dissmiss',{
        duration : 1500,
        verticalPosition : 'bottom',
        horizontalPosition : 'center'
      })
    }
  }
}
