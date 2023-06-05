import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomsheetHtmlComponent } from '../bottomsheet-html/bottomsheet-html.component';

@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.scss']
})
export class BottomsheetComponent implements OnInit {

  constructor(private _bootmSheet : MatBottomSheet) { }
  openbottomsheet(){
    this._bootmSheet.open(BottomsheetHtmlComponent)
  }

  ngOnInit(): void {
  }

}
