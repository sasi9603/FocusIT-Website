import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsoulComponent } from './carsoul/carsoul.component';

import { FooterComponent } from './footer/footer.component';
import { TechnlogiesComponent } from './technlogies/technlogies.component';
import { FixedFooterComponent } from './fixed-footer/fixed-footer.component';
import { StickIconsComponent } from './stick-icons/stick-icons.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { Navbar2Component } from './navbar2/navbar2.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    CarsoulComponent,
   
    FooterComponent,
    TechnlogiesComponent,
    FixedFooterComponent,
    StickIconsComponent,
  
    Navbar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
