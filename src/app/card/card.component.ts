import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() name:string;
  @Input() adresse:string;
  @Input() image:string;
  @Output() notif=new EventEmitter<string>();
  delete(){
    this.notif.emit("Success");

  }
}
