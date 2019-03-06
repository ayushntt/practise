import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddModifyComponent } from './add-modify/add-modify.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    LandingPageComponent,
    AddModifyComponent 
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule { }