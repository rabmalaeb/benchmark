import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;
  isEmployeeBoxOpen: boolean = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  /**
   * [getEmployees description]
   */
  getEmployees(): void {
   this.employeeService.getEmployees()
  .subscribe(employees => this.employees = employees);
  }

/**
 * [editEmployee description]
 * @param {Employee}   employee [description]
 * @param {MouseEvent} event        [description]
 */
  editEmployee(employee: Employee, event: MouseEvent): void {
    this.selectedEmployee = employee;
    this.isEmployeeBoxOpen = true;
  }

}
