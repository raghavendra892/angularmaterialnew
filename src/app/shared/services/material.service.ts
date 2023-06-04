import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  spinner = 20;
  progress = 50;

  constructor(public _router : Router,
    public _snackBar: MatSnackBar) { }
}
