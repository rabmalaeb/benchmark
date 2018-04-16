import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

import { Employee } from '../employee';

@Component({
  selector: 'app-pager',
  templateUrl: './app-pager.component.html',
  styleUrls: ['./app-pager.component.scss']
})

export class AppPagerComponent implements OnInit {

  @Input()
  employees: Employee[] = [];
  previousId: number; 
  itemsPerPage: number = 10;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
   this.employeeService.getEmployees()
   .toPromise()
   .then ((employees) => {
      employees.map((employee)=> {
        if(this.employees.length < this.itemsPerPage) {
        this.employees.push(employee);
        }
     }) 
    })
  }

  getNextPage() {
   this.previousId = this.employees[0].employeeId;
   let lastEmployee = this.employees[this.employees.length-1];
   this.employeeService.getNextEmployees(lastEmployee.employeeId)
   .toPromise()
   .then (employees => this.employees = employees)
  }

  getPreviousPage() {
    this.employeeService.getNextEmployees(this.previousId - 1)
    .toPromise()
    .then (employees => this.employees = employees)
   }

}
