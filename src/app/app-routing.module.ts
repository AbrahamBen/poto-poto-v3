import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {NationaliteComponent} from "./components/nationalite/nationalite.component";
import {DocumentComponent} from "./components/document/document.component";
import {PaymentComponent} from "./components/payment/payment.component";
import {PereComponent} from "./components/pere/pere.component";
import {MereComponent} from "./components/mere/mere.component";
import {EnfantComponent} from "./components/enfant/enfant.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";


const routes: Routes = [
  {path:'accueil',component: AccueilComponent},
  {path:'document-payement/:id',component: PaymentComponent},
  {path:'pere',component: PereComponent},
  {path:'mere',component: MereComponent},
  {path:'enfant',component: EnfantComponent},
  {path:'nationalite',component: NationaliteComponent},
  {path:'document',component: DocumentComponent},
  {path:'contact',component: ContactComponent},
  {path:'about',component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
