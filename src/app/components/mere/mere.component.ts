import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MereService} from "../../services/mere.service";
import {Route, Router} from "@angular/router";
import {Nationalite} from "../../models/nationalite";
import {NationaliteService} from "../../services/nationalite.service";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-mere',
  templateUrl: './mere.component.html',
  styleUrls: ['./mere.component.css']
})
export class MereComponent implements OnInit {
  public nationalites:Nationalite[] = [];
  public mereForm = this.fb.group({
    nom: ['',Validators.required],
    prenom: ['',Validators.required],
    dateNaiss: ['',Validators.required],
    lieuNaiss: ['',Validators.required],
    nationalite: ['',],
    domicile: ['',Validators.required],
    profession: ['',Validators.required],
    niveauInstruction: ['',Validators.required],
  });

  constructor(
    private fb:FormBuilder,
    private mereService:MereService,
    private router:Router,
    private nationaliteService:NationaliteService,
    private notificationService:NotificationService
    ) { }

  ngOnInit(): void {
    this.onLoadNationalite();
  }

  public onAddMereInfo() {
    this.mereService.saveRessources(this.mereService.host+'/meres',this.mereForm.value).subscribe(
      response=>{

        this.router.navigateByUrl('/enfant');
        this.notificationService.openSnackBar('Informations de la mère ajoutées avec succès');
        console.log(this.mereForm.value);
      },error => {
        console.log(error);
      }
    )
  }

  public onLoadNationalite(){
    this.nationaliteService.getRessources().subscribe(
      data=>{
        console.log(data);
        this.nationalites = data;
      },error => {
        console.log(error);
      }
    )
  }
}
