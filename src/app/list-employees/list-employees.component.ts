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

  constructor() { }

  ngOnInit() {
  }

}
