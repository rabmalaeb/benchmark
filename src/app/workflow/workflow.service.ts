import { Injectable } from '@angular/core';
import { STEPS, EmployeeInfo } from './workflow.model';
import { Dependent } from '../dependent';
import { Router } from '@angular/router';

@Injectable()
export class WorkflowService {

  private workflow = [
    { step: STEPS.personal, valid: false },
    { step: STEPS.benefits, valid: false },
    { step: STEPS.dependents, valid: false },
    { step: STEPS.summary, valid: false }
];

private currentStep: string = STEPS.personal;
private employeeInfo: EmployeeInfo = new EmployeeInfo();
private dependents: Array<Dependent> = [];
private benefits: Array<String> = [];

  constructor(private router: Router) { 
    
  }

    setWorkflowStep(step: string) {
      this.currentStep = step;
    }

    getEmployeeInfo() {
      var employeeInfo: EmployeeInfo = {
        name: this.employeeInfo.name,
        dob: this.employeeInfo.dob,
        salary: this.employeeInfo.salary
    };
    return employeeInfo;
    }

    setEmployeeInfo(data: EmployeeInfo) {

      this.employeeInfo.name = data.name;
      this.employeeInfo.dob = data.dob;
      this.employeeInfo.salary = data.salary;
    }

    getBenefits() {
      return this.benefits;
    }

    setBenefits(data: Array<String>) {
      this.benefits = data;
    }

    getDependents() {
      return this.dependents;
    }

    setDependents(data: Array<Dependent>) {
      this.dependents = data;
    }

    goToStep(step: string) {

    }

    getRouter() {
      return this.router;
    }

}
