import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';

import { AccueilComponent } from './components/accueil/accueil.component';
import {HttpClientModule} from "@angular/common/http";
import { NationaliteComponent } from './components/nationalite/nationalite.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DocumentComponent } from './components/document/document.component';
import { PereComponent } from './components/pere/pere.component';
import { MereComponent } from './components/mere/mere.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    SidebarComponent,
    AccueilComponent,
    NationaliteComponent,
    PaymentComponent,
    DocumentComponent,
    PereComponent,
    MereComponent,
    EnfantComponent,
    ContactComponent,
    AboutComponent,



  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatProgressBarModule,
    MatDialogModule,
   // NgxMatFileInputModule,
    HttpClientModule,
    AppRoutingModule,
    //MatAutocomplete

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
