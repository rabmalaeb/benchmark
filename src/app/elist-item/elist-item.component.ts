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
   * @type boolean
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

  /**
   * @type string
   */
  bottom: string = '0px';

  constructor() { }

  ngOnInit() {
  }

  /**
   * 
   * @param employee 
   * @param event 
   */
  editEmployee(employee: Employee, event: MouseEvent): void {
 
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.availHeight;
    if(screenWidth - event.clientX < 400 ) {
      this.left = 'auto';
      this.right = `${screenWidth - event.clientX}px`;
    } else {
      this.left = `${event.clientX}px`;
    }
    if(screenHeight - event.clientY < 400) {
      this.top = 'auto';
      this.bottom = `${screenHeight - event.clientY}px`;
    } else {
      this.top = `${event.clientY}px`;
      this.bottom = 'auto';
    }
    this.employee = employee;
    this.isEmployeeBoxOpen = true;
  }

  /**
   * 
   * @param event 
   */
  closeEmployeeBox(event) {
    this.isEmployeeBoxOpen = !event;
  }


}
