import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-residence',
  templateUrl: './details-residence.component.html',
  styleUrls: ['./details-residence.component.css']
})
export class DetailsResidenceComponent{
  id : number ;
  //injecter le service ActivatedRoute dans ce service
  // sous le nom de ac
  constructor(private ac:ActivatedRoute){
    console.log("je suis le constructor");
  }
  //initialiser le composant
  ngOnInit(){
    console.log("je suis ngOnInit");
   // console.log(this.ac.snapshot.params['id']);
   this.ac.paramMap.subscribe(res=>{
   console.log(res);
   this.id=Number(res.get('id')) });

  }
}
