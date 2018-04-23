import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import { WorkflowService } from '../workflow/workflow.service';
import { EmployeeInfo } from '../workflow/workflow.model';
import { Router } from '@angular/router';
import { STEPS } from '../workflow/workflow.model';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {

  /**
   * DatePicker Options to set the format and other settings
   */
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

  /**
   * @type Date holds the date value
   */
  date: Date;

  /**
   * @type EmployeeInfo 
   */
  employeeInfo: EmployeeInfo;

  /**
   * @type string title of the component
   */
  title: string = "Employee Information";

  /**
   * Injects the workflow service
   * @param workflowService 
   */
  constructor(private workflowService: WorkflowService) { }

  /**
   * get the employeeInfo from the workflow service and set it to employeeInfo
   */
  ngOnInit() {
    this.employeeInfo = this.workflowService.getEmployeeInfo();
  }

/**
   * update the employeeInfo in the workflowservice
   * Go to the next step ( Dependents )
   */
  saveEmployee() {
    this.workflowService.setEmployeeInfo(this.employeeInfo);
    this.workflowService.goToStep(STEPS.dependents);
  }

}
