import { Component, OnInit } from '@angular/core';
import {Pere} from "../../models/pere";
import {Mere} from "../../models/mere";
import {MereService} from "../../services/mere.service";

@Component({
  selector: 'app-list-mere',
  templateUrl: './list-mere.component.html',
  styleUrls: ['./list-mere.component.css']
})
export class ListMereComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom','prenom','dateNaiss','lieuNaiss','nationalite','domicile','profession','niveauInstruction','actions'];
  public dataSource:Mere[]=[];

  constructor(private mereService:MereService) { }

  ngOnInit(): void {
    this.onLoadMere();
  }

  public onLoadMere(){
    this.mereService.getRessources().subscribe(
      data=>{
        this.dataSource = data;
        console.log(data)
      },error => {
        console.log(error);
      }
    )
  }

}
