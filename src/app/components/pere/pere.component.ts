import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {PereService} from "../../services/pere.service";
import {Router} from "@angular/router";
import {NationaliteService} from "../../services/nationalite.service";
import {Nationalite} from "../../models/nationalite";

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  public pereForm = this.fb.group({
    nom: ['',Validators.required],
    prenom: ['',Validators.required],
    dateNaiss: ['',Validators.required],
    lieuNaiss: ['',Validators.required],
    nationalite: ['',],
    domicile: ['',Validators.required],
    profession: ['',Validators.required],
    niveauInstruction: ['',Validators.required],
  });
  public nationalites:Nationalite[]=[];

  constructor(private fb:FormBuilder,private pereService:PereService,private router:Router,private  nationaliteService:NationaliteService) { }

  ngOnInit(): void {
    this.getNat();
  }

 public onAddPereInfo() {
    this.pereService.saveRessources(this.pereService.host+'/peres',this.pereForm.value).subscribe(
      response=>{
        this.router.navigateByUrl('/mere');
       // this.getPereById();
        console.log(this.pereForm.value);
      },error => {
        console.log(error);
      }
    );

  }

  public getNat(){
    this.nationaliteService.getRessources().subscribe(
      data=>{
        console.log(data)
        this.nationalites = data;
      },error => {
        console.log(error)
      }
    )
  }
}
