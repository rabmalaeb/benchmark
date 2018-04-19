import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import { WorkflowService } from '../workflow/workflow.service';
import { EmployeeInfo } from '../workflow/workflow.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {

  options: DatepickerOptions = {
    minYear: 1918,
    maxYear: 2018,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    maxDate: new Date(Date.now()),  // Maximal selectable date
    barTitleIfEmpty: 'Click to select a date'
  };

  date: Date;
  employeeInfo: EmployeeInfo;

  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {
    this.employeeInfo = this.workflowService.getEmployeeInfo();
    console.log(' the employee is ', this.employeeInfo); 
  }

  saveEmployee() {
    console.log(this.employeeInfo);
    this.workflowService.setEmployeeInfo(this.employeeInfo);
    this.workflowService.getRouter().navigateByUrl('/new/dependent');
  }

}
