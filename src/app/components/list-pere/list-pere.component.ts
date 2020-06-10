import { Component, OnInit } from '@angular/core';
import {Pere} from "../../models/pere";
import {PereService} from "../../services/pere.service";

@Component({
  selector: 'app-list-pere',
  templateUrl: './list-pere.component.html',
  styleUrls: ['./list-pere.component.css']
})
export class ListPereComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom','prenom','dateNaiss','lieuNaiss','nationalite','domicile','profession','niveauInstruction','actions'];
public dataSource:Pere[]=[];
  constructor(private pereService:PereService) { }

  ngOnInit(): void {
    this.onLoadPere()
  }

  public onLoadPere(){
    this.pereService.getRessources().subscribe(
      data=>{
        this.dataSource = data;
        console.log(data)
      },error => {
        console.log(error);
      }
    )
  }

}
