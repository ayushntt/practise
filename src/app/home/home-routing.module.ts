import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddModifyComponent } from './add-modify/add-modify.component';


const firstRoute: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'add', component: AddModifyComponent},
  {path: 'modify', component: AddModifyComponent}
  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(firstRoute)
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { 
    constructor(){ console.log("called Routing")}
}
//