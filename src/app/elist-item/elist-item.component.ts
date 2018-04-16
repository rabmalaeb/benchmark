import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '../employee';

@Component({
  selector: 'elist-item',
  templateUrl: './elist-item.component.html',
  styleUrls: ['./elist-item.component.scss']
})
export class ElistItemComponent implements OnInit {

  @Input()
  employee: Employee;
  isEmployeeBoxOpen: boolean = false;

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
