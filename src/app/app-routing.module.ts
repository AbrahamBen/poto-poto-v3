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
import {ListPereComponent} from "./components/list-pere/list-pere.component";
import {ListMereComponent} from "./components/list-mere/list-mere.component";
import {AdminTaskComponent} from "./components/admin-task/admin-task.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ListEnfantComponent} from "./components/list-enfant/list-enfant.component";
import {ListDocumentComponent} from "./components/list-document/list-document.component";


const routes: Routes = [
  {path:'accueil',component: AccueilComponent},
  {path:'document-payement/:id',component: PaymentComponent},
  {path:'pere',component: PereComponent},
  {path:'list-pere',component: ListPereComponent},
  {path:'mere',component: MereComponent},
  {path:'list-mere',component: ListMereComponent},
  {path:'enfant',component: EnfantComponent},
  {path:'list-enfant',component: ListEnfantComponent},
  {path:'nationalite',component: NationaliteComponent},
  {path:'document',component: DocumentComponent},
  {path:'list-document',component: ListDocumentComponent},
  {path:'contact',component: ContactComponent},
  {path:'about',component: AboutComponent},
  {path:'admin',component: AdminTaskComponent},
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
