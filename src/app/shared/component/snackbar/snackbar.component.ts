import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private _materialService : MaterialService) { }

  ngOnInit(): void {
  }


  openSnackBar(){
    this._materialService._snackBar.open("Are You Ready !!!!" ,"close" ,{
      duration : 2000,
      verticalPosition : "top",
      horizontalPosition : "center"
    })
  }


}
