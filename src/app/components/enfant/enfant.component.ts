import { Component, OnInit } from '@angular/core';
import {Pere} from "../../models/pere";
import {Mere} from "../../models/mere";
import {FormBuilder, Validators} from "@angular/forms";
import {MereService} from "../../services/mere.service";
import {Router} from "@angular/router";
import {EnfantService} from "../../services/enfant.service";
import {PereService} from "../../services/pere.service";

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
  public peres:Pere[]=[];
  public meres:Mere[]=[];
  public EnfantForm = this.fb.group({
    nom: ['',Validators.required],
    prenom: ['',Validators.required],
    sexe: ['',Validators.required],
    dateNaiss: ['',Validators.required],
    lieuNaiss: ['',Validators.required],
    heureNaiss: ['',Validators.required],
    pere: ['',Validators.required],
    mere: ['',Validators.required],
    situationMatriParent: ['',Validators.required],
    nationalite: ['',],
    dateDeclaration: ['',Validators.required],
  });

  constructor(
    private fb:FormBuilder,
    private enfantService:EnfantService,
    private router:Router,
    private pereService: PereService,
    private mereService: MereService
    ) { }

  ngOnInit(): void {
    this.loadMere();
    this.loadPere();
  }

  public onAddChild() {
    this.enfantService.saveRessources(this.enfantService.host+'/enfants',this.EnfantForm.value).subscribe(
      response=>{
        //this.router.navigateByUrl('/enfant');
        alert('Bravo');
        this.EnfantForm.value.pere
        this.EnfantForm.value
      },error => {
        console.log(error);
      }
    )
  }

  public loadPere(){
    this.pereService.getRessources().subscribe(
      data=>{
        this.peres = data;
      },error => {
        console.log(error);
      }
    )
  }

  public loadMere(){
    this.mereService.getRessources().subscribe(
      data=>{
        this.meres = data;
      },error => {
        console.log(error);
      }
    )
  }
}
