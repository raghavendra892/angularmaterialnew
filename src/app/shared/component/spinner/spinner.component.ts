import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  spinnerPercen = 50;
  progressPercen = 50;

  constructor(private _materialService : MaterialService) { }

  ngOnInit(): void {
    this.spinnerPercen = this._materialService.spinner;
    this.progressPercen = this._materialService.progress;
  }

  enteredValue(e : any){
    // console.log('value', e.target.value);
    // this.spinnerPercen = e.target.value
  }
}
