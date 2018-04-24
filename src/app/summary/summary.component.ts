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

  /**
   * 
   */
  title: string = "New Employee Summary";

  /**
   * 
   */
  dependents: Array<Dependent> = [];

  /**
   * 
   */
  employeeInfo: EmployeeInfo;

  /**
   * 
   */
  benefits: Array<string> = [];

  
  /**
   * if Previous step ( benefits ) is not valid go back to benefits
   * set the dependents, employeeInfo and benefits from workflowService
   */
  ngOnInit() {
    if(!this.workflowService.isBenefitsValid()) {
      this.workflowService.goToStep(STEPS.benefits);
    }
    this.dependents = this.workflowService.getDependents();
    this.employeeInfo = this.workflowService.getEmployeeInfo();
    this.benefits = this.workflowService.getBenefits();
  }

  /**
   * create a json representation of the Workflow models 
   * @returns Array<object>
   */
  get jsonObject() { 

    let summary: Array<object> = [];
    summary.push({Employee: this.employeeInfo});
    summary.push({Benefits: this.benefits});
    summary.push({Dependents: this.dependents});

    return JSON.stringify(summary); 
  }

  resetWorkflow() {
    this.workflowService.resetWorkflow();
  }


}

