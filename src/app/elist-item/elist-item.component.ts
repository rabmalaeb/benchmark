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
   * 
   */
  @Input() employee: Employee;

  /**
   * 
   */
  isEmployeeBoxOpen: boolean = false;

  /**
   * 
   */
  top: string = '0px';

  /**
   * 
   */
  left: string = '0px';

  /**
   * 
   */
  right: string = '0px';

  constructor() { }

  ngOnInit() {
  }

/**
 * [editEmployee description]
 * @param {Employee}   employee [description]
 * @param {MouseEvent} event        [description]
 */
  editEmployee(employee: Employee, event: MouseEvent): void {
    this.top = `${event.clientY}px`;
    let screenWidth = window.screen.width;
    if(screenWidth - event.clientX < 400 ) {
      this.left='auto';
      this.right=`${screenWidth - event.clientX}px`;
    } else {
      this.left = `${event.clientX}px`;
    }
    this.employee = employee;
    this.isEmployeeBoxOpen = true;
  }

  
  /**
   * [closeEmployeeBox description]
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  closeEmployeeBox(event) {
    this.isEmployeeBoxOpen = !event;
  }


}
