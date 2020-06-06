import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {PereService} from "../../services/pere.service";
import {Router} from "@angular/router";

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

  constructor(private fb:FormBuilder,private pereService:PereService,private router:Router) { }

  ngOnInit(): void {
  }

 public onAddPereInfo() {
    this.pereService.saveRessources(this.pereService.host+'/peres',this.pereForm.value).subscribe(
      response=>{
        this.router.navigateByUrl('/mere');
        console.log(this.pereForm.value);
      },error => {
        console.log(error);
      }
    );

  }
}
