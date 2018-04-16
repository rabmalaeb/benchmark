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
  employeeId: number;
  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getNextEmployees();
  }

  getNextEmployees() {
   this.employeeService.getNextEmployees(this.employeeId)
   .toPromise()
   .then (employees => this.employees = employees)
  }
  
}
