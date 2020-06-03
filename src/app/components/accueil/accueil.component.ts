import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../../services/document.service";
import {Document} from "../../models/document";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  public documents:Document[] = [];

  constructor(private documentService:DocumentService) { }

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

}
