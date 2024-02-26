import { Residence } from './../models/residence';
import { ResidenceService } from './../residence.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-r',
  templateUrl: './add-r.component.html',
  styleUrls: ['./add-r.component.css']
})
export class AddRComponent {

myForm : FormGroup;
constructor(private rs:ResidenceService){}
ngOnInit(){
  this.myForm= new FormGroup({
    address:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required,Validators.minLength(7)]),
    image:new FormControl('', Validators.required),
  });
}

get name(){
  return this.myForm.get('name');
}
get address(){
  return this.myForm.get('address');
}
get image(){
  return this.myForm.get('image');
}

addR(){
let r = new Residence();
r.address=this.address.value;
r.name=this.name.value;
r.image=this.image.value;
  console.log(this.myForm.value);
//this.rs.addResidence(this.myForm.value).subscribe();
this.rs.addResidence(r).subscribe(()=>this.myForm.reset());
}
}
