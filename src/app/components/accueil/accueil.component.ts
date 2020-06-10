import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../../services/document.service";
import {Document} from "../../models/document";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PaymentComponent} from "../payment/payment.component";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  public documents:Document[] = [];



  constructor(
    private documentService:DocumentService,
    private dialog:MatDialog,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.onGetDocument();
  }
  public onGetDocument(){
    this.documentService.getRessources().subscribe(data=>{
      this.documents = data;
      console.log(data)
    },error => {
      console.log(error);
    });
  }

  public onDeclare(document) {
    const  dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    dialogConfig.width = "20%";
  this.dialog.open(PaymentComponent,dialogConfig);
  }
}
