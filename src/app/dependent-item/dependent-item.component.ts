import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dependent } from '../dependent';


@Component({
  selector: 'app-dependent-item',
  templateUrl: './dependent-item.component.html',
  styleUrls: ['./dependent-item.component.scss']
})
export class DependentItemComponent implements OnInit {

  constructor() { }

  @Input() dependent: Dependent;
  @Output() deleteDependent: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
   console.log(this.dependent);
  }

  onKey(event: any) { // without type info
    this.dependent.name = event.target.value;
    console.log(this.dependent);
    
  }

  onDelete() {
    this.deleteDependent.emit(true);
  }

}
