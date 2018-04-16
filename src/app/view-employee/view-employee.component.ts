import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import 'rxjs/add/operator/toPromise';

import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Input() isEmployeeBoxOpen: boolean = true;
  @Output() closeEmployeeBox: EventEmitter<boolean> = new EventEmitter<boolean>();
  departments: Department[];
  selectedDepartment: Department;

  constructor(private departmentService: DepartmentService, private employeeService: EmployeeService) { }

  ngOnInit() {
      this.getDepartments();
      this.getEmployee();
  }

  getEmployee(): void {
    this.employeeService.getEmployee(this.employee.employeeId)
    .toPromise()
    .then(employee => this.employee = employee);
  }

  getDepartments(): void {
   this.departmentService.getDepartments()
  .subscribe(departments => this.departments = departments);
  }

  onSave(): void {
    this.employee.department = this.selectedDepartment;
    this.employeeService.updateEmployeeDepartment(this.employee)
    .toPromise()
    .then( resp => console.log('the response is ', resp))
   }


  closeModal() {
    this.closeEmployeeBox.emit(true);
  }

}
