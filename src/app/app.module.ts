import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './core/residence/residence.component';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { ResidencesComponent } from './residences/residences.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { HttpClientModule } from '@angular/common/http';
import { AddRComponent } from './add-r/add-r.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    TestComponent,
    NotFoundComponent,
    ApartmentComponent,
    ResidencesComponent,
    DetailsResidenceComponent,
    AddRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
