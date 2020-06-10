import { Component, OnInit } from '@angular/core';
import {Pere} from "../../models/pere";
import {EnfantService} from "../../services/enfant.service";
import {Enfant} from "../../models/enfant";

@Component({
  selector: 'app-list-enfant',
  templateUrl: './list-enfant.component.html',
  styleUrls: ['./list-enfant.component.css']
})
export class ListEnfantComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom','prenom','dateNaiss','lieuxNaiss','heureNaiss','situationMatriParent','pere','mere','actions'];
  public dataSource:Enfant[]=[];

  constructor(private enfantService:EnfantService) { }

  ngOnInit(): void {
    this.onLoadEnfant();
  }

  public onLoadEnfant(){
    this.enfantService.getRessources().subscribe(
      data=>{
        this.dataSource = data;
        console.log(data)
      },error => {
        console.log(error);
      }
    )
  }

}
