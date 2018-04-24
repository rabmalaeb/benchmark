import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Employee } from '../employee';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'elist-item',
  templateUrl: './elist-item.component.html',
  styleUrls: ['./elist-item.component.scss']
})

export class ElistItemComponent implements OnInit {

  /**
   * @type Employee
   */
  @Input() employee: Employee;

  /**
   * Controls if the employee box is being displayed or not
   * @type boolean true displayed, false not displayed
   */
  isEmployeeBoxOpen: boolean = false;

  /**
   * @type string
   */
  top: string = 'auto';

  /**
   * @type string
   */
  left: string = 'auto';

  /**
   * @type string
   */
  right: string = 'auto';

  constructor() { }

  ngOnInit() {
  }

  /**
   *
   * @param employee
   * @param event
   */
  editEmployee(employee: Employee, event: MouseEvent): void {
    this.setPosition(event);
    this.employee = employee;
    this.isEmployeeBoxOpen = true;
  }

  /**
   *  set isEmployeeBoxOpen to false
   */
  closeEmployeeBox() {
    this.isEmployeeBoxOpen = false;
  }

  /**
   * set the position for the employee box according to the mouse click position
   * @param event
   */
  setPosition(event: MouseEvent) {
    let screenWidth = window.screen.availWidth;
    let screenHeight = window.screen.availHeight;

    if(screenWidth - event.clientX < 400 ) { // 400 is approx the width of the employee box
      this.right = `${screenWidth - event.clientX}px`;
    } else {
      this.left = `${event.clientX}px`;
    }
    if(screenHeight - event.clientY < 400) {
      this.top = `${event.clientY - 280}px`; // 280ps is the height of the employee box
    } else {
      this.top = `${event.clientY}px`;
    }
  }


}
