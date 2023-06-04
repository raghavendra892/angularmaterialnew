import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
      icon : 'home'
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
      icon : 'email'
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
      icon : 'folder'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
