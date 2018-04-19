import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger,state, style, animate, transition } from '@angular/animations';
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
  styleUrls: ['./view-employee.component.scss'],
  animations: [
    trigger('stateTrigger', [
      state('closed', style({
        opacity: '0'
      })),
      state('opened',   style({
        opacity: '1'
      })),
      transition('inactive => active', animate('900ms ease-in')),
      transition('active => inactive', animate('900ms ease-out'))
    ])
  ]
})
export class ViewEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Input() isEmployeeBoxOpen: boolean = true;
  @Output() closeEmployeeBox: EventEmitter<boolean> = new EventEmitter<boolean>();
  departments: Department[];
  selectedDepartment: Department;
  state: String = 'opened';
  isSaving: boolean = false;


  constructor(private departmentService: DepartmentService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.selectedDepartment = this.employee.department;
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
    this.isSaving = true;
    this.employee.department = this.selectedDepartment;
    this.employeeService.updateEmployeeDepartment(this.employee)
    .toPromise()
    .then( resp => this.isSaving = false)
   }


  closeModal() {
    this.state = "closed";
    this.closeEmployeeBox.emit(true);
  }

}
