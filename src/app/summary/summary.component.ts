import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../workflow/workflow.service';
import { Dependent } from '../dependent';
import { EmployeeInfo } from '../workflow/workflow.model';
import { STEPS } from '../workflow/workflow.model';

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

  get diagnostic() { 
    let summary: Array<string> = [];
    summary.push(JSON.stringify(this.employeeInfo))
    summary.push(JSON.stringify(this.benefits))
    summary.push(JSON.stringify(this.dependents))

    return summary; 
  }

  ngOnInit() {
    if(!this.workflowService.isBenefitsValid()) {
      this.workflowService.goToStep(STEPS.benefits);
    }
    this.dependents = this.workflowService.getDependents();
    this.employeeInfo = this.workflowService.getEmployeeInfo();
    this.benefits = this.workflowService.getBenefits();
    
  }

}
