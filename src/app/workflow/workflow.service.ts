import { Injectable } from '@angular/core';
import { STEPS, EmployeeInfo } from './workflow.model';
import { Dependent } from '../dependent';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs/operators';

@Injectable()
export class WorkflowService {

  /**
   * contains the list of steps with their url 
   * @type Array of Objects
   */
  private workflow = [
    { step: STEPS.personal, url: '/new', valid: false },
    { step: STEPS.benefits, url: '/new/benefits', valid: false },
    { step: STEPS.dependents, url: '/new/dependents', valid: false },
    { step: STEPS.summary, url: '/new/summary', valid: false }
  ];

  /**
   * defualts the currentStep to personal 
   * @type string
   */
  private currentStep: string = STEPS.personal;

  /**
   * new EmployeeInfo instance
   * @type EmployeeInfo 
   */
  private employeeInfo: EmployeeInfo = new EmployeeInfo();

  /**
   * to hold the dependents
   * @type Array<Dependent> 
   */
  private dependents: Array<Dependent> = [];

  /**
   * to hold the benefits
   * @type Array<string>
   */
  private benefits: Array<string> = [];

  /**
   * 
   * @param router 
   */
  constructor(private router: Router) { 
    
  }

  /**
   * set the currentStep 
   * @param step current step to be set
   */
    setWorkflowStep(step: string) {
      this.currentStep = step;
    }

    /**
     * get the name, dob, salary from the employeeInfo object
     * @returns EmployeeInfo
     */
    getEmployeeInfo() {
      var employeeInfo: EmployeeInfo = {
        name: this.employeeInfo.name,
        dob: this.employeeInfo.dob,
        salary: this.employeeInfo.salary
    };
    return employeeInfo;
    }

    /**
     * set the employeeInfo name, dob and salary
     * @param data <EmployeeInfo>
     */
    setEmployeeInfo(data: EmployeeInfo) {
      this.employeeInfo.name = data.name;
      this.employeeInfo.dob = data.dob;
      this.employeeInfo.salary = data.salary;
    }

    /**
     * @returns Array of string
     */
    getBenefits() {
      return this.benefits;
    }

    /**
     * 
     * @param data 
     */
    setBenefits(data: Array<string>) {
      this.benefits = data;
    }

    /**
     * @returns Array of Dependent
     */
    getDependents() {
      return this.dependents;
    }

    /**
     * set dependents 
     * @param data array of Dependent
     */
    setDependents(data: Array<Dependent>) {
      this.dependents = data;
    }

    /**
     * get the route of the specified step from the worflow object
     * go to the route
     * @param step the step to go to 
     */
    goToStep(step: string) {
      let nextStep = this.workflow.find(work => work.step == step);      
      this.router.navigateByUrl(nextStep.url);

    }

    /**
     * check ifemployeeInfo is not empty
     * @returns boolean true if valid, false if not valid
     */
    isEmployeeInfoValid() {
      let employeeInfo = this.getEmployeeInfo();
      if(!employeeInfo.dob  || !employeeInfo.salary || !employeeInfo.name) {
        return false;
      }
      return true;
    }

     /**
     * check if benefits is not empty
     * @returns boolean true if valid, false if not
     */
    isBenefitsValid() {
      return this.benefits.length === 0 ? false : true;
    }

    /**
     * check if dependents is not empty
     * @returns boolean true if valid, false if not
     */
    isDependentsValid() {
      return this.dependents.length === 0 ? false : true;
    }

}
