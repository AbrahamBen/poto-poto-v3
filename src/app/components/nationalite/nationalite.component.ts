import { Component, OnInit } from '@angular/core';
import {Nationalite} from "../../models/nationalite";
import {NationaliteService} from "../../services/nationalite.service";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-nationalite',
  templateUrl: './nationalite.component.html',
  styleUrls: ['./nationalite.component.css']
})
export class NationaliteComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name','actions'];
  public dataSource:Nationalite[]=[];

  public NatForm = this.fb.group({
    nationaliteName: ['',Validators.required],
  });


  constructor(private nationaliteService:NationaliteService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.onLoadNationalite();
  }

  public onLoadNationalite(){
    this.nationaliteService.getRessources().subscribe(
      data=>{
        console.log(data);
        this.dataSource= data;
      },error => {
        console.log(error);
      }
    )
  }

  public onAddNationalite() {
    this.nationaliteService.saveRessource(this.nationaliteService.host+'/nationalites',this.NatForm.value).subscribe(
      data=>{
        console.log(data);
        this.onLoadNationalite();
      },error => {
        console.log(error);
      }
    )
  }
}
