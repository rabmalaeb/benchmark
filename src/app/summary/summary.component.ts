import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../workflow/workflow.service';
import { Dependent } from '../dependent';
import { EmployeeInfo } from '../workflow/workflow.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private workflowService: WorkflowService) { }

  title: string = "New Employee Summary";
  dependents: Array<Dependent> = [];
  employeeInfo: EmployeeInfo;
  benefits: Array<string> = [];

  ngOnInit() {
    this.dependents = this.workflowService.getDependents();
    this.employeeInfo = this.workflowService.getEmployeeInfo();
    this.benefits = this.workflowService.getBenefits();
    
  }

}
