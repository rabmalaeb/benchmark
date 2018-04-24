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
  top: string = '0px';

  /**
   * @type string
   */
  left: string = '0px';

  /**
   * @type string
   */
  right: string = '0px';

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
   * adjust the position of the employee box according to screen size
   * @param event
   */
  setPosition(event: MouseEvent) {
    let screenWidth = window.screen.availWidth;
    let screenHeight = window.screen.availHeight;

    if(screenWidth - event.clientX < 400 ) { // 400 is approx the width of the employee box
      this.right = `${screenWidth - event.clientX}px`;
      this.left = 'auto';
    } else {
      this.left = `${event.clientX}px`;
      this.right = 'auto';
    }
    if(screenHeight - event.clientY < 400) {
      this.top = `${event.clientY - 280}px`; // 280px is the height of the employee box
    } else {
      this.top = `${event.clientY}px`;
    }
  }


}
