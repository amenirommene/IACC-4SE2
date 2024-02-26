import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';
import { Residence } from 'src/app/models/residence';
import { ResidenceService } from 'src/app/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {

  constructor(private _router:Router,
    private rs:ResidenceService){}

  listResidences:Residence[];

    listApartments:Apartment[];

    goTo(){
      this._router.navigateByUrl("test");
    }
    ngOnInit(){
      this.rs.getAllResidences().subscribe(
        res=>this.listResidences=res);
        this.rs.getAllApartments().subscribe(
          res=>this.listApartments=res);
    }
    deleteResidence(id:number){
      this.rs.deleteResidence(id).subscribe(
        ()=>this.rs.getAllResidences().subscribe(
          res=>this.listResidences=res)
      );
    }
}
