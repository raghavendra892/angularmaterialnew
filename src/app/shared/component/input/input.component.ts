import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  
  constructor(private _materialservice : MaterialService) { }

  ngOnInit(): void {
  }


  spinnerVal(e : any){
    console.log("spinner" ,e.target.value);
    this._materialservice.spinner = e.target.value;
  }

  progressVal(e : any){
    console.log("progress", e.target.value)
    
  }

}
