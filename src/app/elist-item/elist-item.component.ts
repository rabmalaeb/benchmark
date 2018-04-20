import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '../employee';

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

  constructor() { }

  ngOnInit() {
  }

/**
 * [editEmployee description]
 * @param {Employee}   employee [description]
 * @param {MouseEvent} event        [description]
 */
  editEmployee(employee: Employee, event: MouseEvent): void {
    this.employee = employee;
    this.isEmployeeBoxOpen = true;
    this.left = `${event.clientX}px`;
    this.top = `${event.clientY}px`;
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
