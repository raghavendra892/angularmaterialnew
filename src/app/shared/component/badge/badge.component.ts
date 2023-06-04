import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  visible = false;
  constructor(private _materialService : MaterialService) { }

  ngOnInit(): void {
  }

  onclick(){
    this._materialService._router.navigate(['/'])
  }
}
