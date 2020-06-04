import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {FormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider";
=======
import { AccueilComponent } from './components/accueil/accueil.component';
import {HttpClientModule} from "@angular/common/http";
>>>>>>> accueil

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    SidebarComponent
=======
    AccueilComponent
>>>>>>> accueil
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatDividerModule
=======
    HttpClientModule,
>>>>>>> accueil
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
