import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger,state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModel } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import 'rxjs/add/operator/toPromise';

import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { locateHostElement } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  /**
   * hold the value of the employee to be updated
   */
  private employeeToUpdate: Employee;

  /**
   * bound property of employee
   */
  @Input() employee: Employee;

  /**
   * 
   */
  @Input() isEmployeeBoxOpen: boolean = true;

  /**
   * 
   */
  @Output() closeEmployeeBox: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * 
   */
  departments: Department[];

  /**
   * 
   */
  selectedDepartment: Department;


  /**
   * 
   * @param departmentService 
   * @param employeeService 
   */
  constructor(private departmentService: DepartmentService, private employeeService: EmployeeService) { }

  /**
   * set selecteddepartment to be the department of the bound property employee
   * get the list of department 
   * get the employee to be updated
   */
  ngOnInit() {
    this.selectedDepartment = this.employee.department;
    this.getDepartments();
    this.getEmployee();
  }

  /**
   * get the employee with id = employeeId from EmployeeService
   */
  getEmployee(): void {
    this.employeeService.getEmployee(this.employee.employeeId)
    .toPromise()
    .then(employee => this.employeeToUpdate = employee);
  }


  /**
   * get the list of department from the department Service
   */
  getDepartments(): void {
   this.departmentService.getDepartments()
  .subscribe(departments => this.departments = departments);
  }

  /**
   *  update the bound property employee's department value
   *  update the department of employeeToUpdate
   *  send a request to the server to update
   */
  onSave(): void {
    this.employee.department = this.selectedDepartment;
    this.employeeToUpdate.department = this.selectedDepartment;
    this.employeeService.updateEmployeeDepartment(this.employeeToUpdate)
    .toPromise()
    .then( resp => this.closeModal() );
   }


   /**
    * 
    */
  closeModal() {
    this.closeEmployeeBox.emit(true);
  }

}
