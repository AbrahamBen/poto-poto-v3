import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DocumentService} from "../../services/document.service";
import {Document} from "../../models/document";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','Description','Prix','Image','actions'];
  public dataSource:Document[]=[];
  public  doc:Document = new Document();


  //options: string[] = ['One', 'Two', 'Three'];


  public DocForm = this.fb.group({
    documentName: ['',Validators.required],
    descriptionName: ['',Validators.required],
    //descriptionName: [this.doc.descriptionName],
    price: ['',Validators.required],
    imageUrl: ['',Validators.required],
  });

  constructor(private documentService:DocumentService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.onLoadDocument();


  }

  public onLoadDocument(){
    this.documentService.getRessources().subscribe(
      data=>{
        console.log(data);
        this.dataSource= data;
      },error => {
        console.log(error);
      }
    )
  }

  public onAddDocument() {
    this.documentService.saveRessources(this.documentService.host+'/documents',this.DocForm.value).subscribe(
      data=>{
        console.log(data);
        this.onLoadDocument();
      },error => {
        console.log(error);
      }
    )
  }


}
