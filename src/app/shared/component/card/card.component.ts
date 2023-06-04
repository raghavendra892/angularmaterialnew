import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  

  ngOnInit(): void {
    
  }
  constructor(private _bootmSheet : MatBottomSheet) { }
  openbootmsheet(){
    this._bootmSheet.open(BottomsheetComponent)
  }

}
