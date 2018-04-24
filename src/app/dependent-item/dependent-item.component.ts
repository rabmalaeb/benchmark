import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dependent } from '../dependent';


@Component({
  selector: 'app-dependent-item',
  templateUrl: './dependent-item.component.html',
  styleUrls: ['./dependent-item.component.scss']
})
export class DependentItemComponent implements OnInit {

  constructor() { }

  /**
   * Binded property that is sent from the parent
   * @type Dependent
   */
  @Input() dependent: Dependent;

  /**
   * true if the parent should delete this dependent-item
   * @type EventEmitter<boolean> true, false
   */
  @Output() deleteDependent: EventEmitter<boolean> = new EventEmitter<boolean>();


  ngOnInit() {
  }

  /**
   * set the name of the dependent to the value of the event target
   * @param event key event
   */
  onKeyUp(event: any) {
    this.dependent.name = event.target.value;
  }

  /**
   * send an Event Emitter that signals the parent to delete this item
   */
  onDelete() {
    this.deleteDependent.emit(true);
  }

}
