import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { ResidenceComponent } from './core/residence/residence.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRComponent } from './add-r/add-r.component';

const routes: Routes = [
  {path:"", redirectTo:"residence", pathMatch:"full"},
  {path:"residence", component:ResidenceComponent, children:[
    {path:"details/:id", component:DetailsResidenceComponent}
  ]},
{path:"addr", component:AddRComponent},
  {path:"test", component:TestComponent, children:[
    {path:"apartment", component:ApartmentComponent}
  ]},

  {path:"**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
