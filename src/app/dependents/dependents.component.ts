import { Component, OnInit } from '@angular/core';
import { Dependent } from '../dependent';
import { WorkflowService } from '../workflow/workflow.service';
import { locateHostElement } from '@angular/core/src/render3/instructions';
import { STEPS } from '../workflow/workflow.model';

@Component({
  selector: 'app-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.scss']
})
export class DependentsComponent implements OnInit {

  /**
   * Array of Dependents which holds the dependets that are added by the user
   */
  dependents: Array<Dependent> = [];

  /**
   * holds the current value of dependets
   */
  numberOfDependents: number = 0;

  /**
   * Title of the page
   */
  title: string = "Employee Dependents";
  
  /**
   * 
   * @param workflowService 
   */
  constructor(private workflowService: WorkflowService) { }

  /**
   * get the dependents form the workflowservice
   * set it to the dependets array which is populated in the view
   */
  ngOnInit() {    
    if(!this.workflowService.isEmployeeInfoValid()) {
      this.workflowService.goToStep(STEPS.personal);
    }
    this.dependents = this.workflowService.getDependents();
  }
  
  /**
   * create a new Dependent unless the previous dependent is not empty
   * add it to the dependets array
   */
  addDependent(): void {
    if(this.dependents.length > 0 && !this.dependents[this.dependents.length -1].name) {
     
    } else {
      let dependent = new Dependent();
      dependent.id = this.numberOfDependents;
      this.numberOfDependents++;
      this.dependents.push(dependent);
    }
    
  }

  /**
   * remove the dependent from the array of dependents
   * @param dependent the dependent to be deleted
   */
  delete(dependent: Dependent): void {
    let id = this.dependents.map(function(item) { return item.id; }).indexOf(dependent.id);
    this.dependents.splice(id, 1);
  }

  isDependentsValid() {
    let isValid = true;
    if(this.dependents.length > 0 ) {
     this.dependents.forEach(dependent => {
      if(!dependent.name) {
        isValid = false;
        } 
      })
    } else {
      isValid = false;
    }
    return isValid;
  }

 /**
   * update the dependents in the workflowservice
   * Go to the next step 
   */
  save() {
    if(this.isDependentsValid()) {
      this.workflowService.setDependents(this.dependents);
      this.workflowService.goToStep(STEPS.benefits);
    }
    
  }

}
