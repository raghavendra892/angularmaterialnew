import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottomsheet-html',
  templateUrl: './bottomsheet-html.component.html',
  styleUrls: ['./bottomsheet-html.component.scss']
})
export class BottomsheetHtmlComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomsheetHtmlComponent>) { }

  ngOnInit(): void {

  }
  dismissSheet(){
    this._bottomSheetRef.dismiss();
  }
}
