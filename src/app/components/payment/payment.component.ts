import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentService} from "../../services/document.service";
import {Document} from "../../models/document";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public documents:Document = new Document();
  public solde = 1000;

  constructor(
    private _actevetedRoute: ActivatedRoute,
    private router:Router,
    private documentService:DocumentService
    ) { }

  ngOnInit(): void {
    this._actevetedRoute.paramMap.subscribe(
      ()=>{
        this.onGetInfoDocument();
      }
    )
  }

  public onGetInfoDocument(){
    const id:number = +this._actevetedRoute.snapshot.paramMap.get('id');
    this.documentService.getRessourceById(id).subscribe(
      data=>{

       this.documents =data;

      },error => {
        console.log(error);
      }
    )
  }

  public onPayerDocument() {
      if(this.documents.price > this.solde){
        alert("Le paiement n'a pas aboutit par maque de liquidite")
      }else{
        this.router.navigateByUrl('/pere');
      }


    }



}
