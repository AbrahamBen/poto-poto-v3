import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from "@angular/material/snack-bar";
//import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private snackBar:MatSnackBar) { }
  config:MatSnackBarConfig={
    duration:3000,
    horizontalPosition:'right',
    verticalPosition:'top'
  }
  public success(msg){
    this.config['panelClass'] = ['notification','success'];
    this.snackBar.open(msg,'',this.config);
  }

  public warm(msg){
    this.config['panelClass'] = ['notification','warn'];
    this.snackBar.open(msg,'',this.config);
  }
  public openSnackBar(msg) {
    this.snackBar.open(msg, 'Ferner', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
