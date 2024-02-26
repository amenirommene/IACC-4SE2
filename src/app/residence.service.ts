import { Apartment } from './models/apartment';
import { Residence } from './models/residence';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  urlResidences : string = "http://localhost:3000/residences";
  urlApartments : string = "http://localhost:3000/apartments";
  constructor(private http: HttpClient) { }

  getAllResidences():Observable<Residence[]>{
     return this.http.get<Residence[]>(this.urlResidences);
  }
  getAllApartments():Observable<Apartment[]>{
    return this.http.get<Apartment[]>(this.urlApartments);
 }
 getResidenceById(id:number):Observable<Residence>{
   return this.http.get<Residence>(this.urlResidences+"/"+id)
 }
 getApartmentById(id:number):Observable<Apartment>{
  return this.http.get<Apartment>(this.urlApartments+"/"+id)
}
addResidence(residence:Residence):Observable<Residence>{
  return this.http.post<Residence>(this.urlResidences,residence)
}
updateResidence(residence:Residence):Observable<Residence>{
  return this.http.put<Residence>(this.urlResidences+"/"+residence.id,residence)
}
deleteResidence(id:number):Observable<Residence>{
  return this.http.delete<Residence>(this.urlResidences+"/"+id)
}
}
