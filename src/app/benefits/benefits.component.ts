import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})

export class BenefitsComponent implements OnInit {

  constructor(private dragulaService: DragulaService, private workflowService: WorkflowService) {
   }

   /**
    * @type string Title of the component
    */
   title: string = "Employee Benefits";

   /**
    * @type Array<string> holds the values of the benefits
    */
   benefits: Array<string> = [ 'Meal', 'Travel', 'Phone', 'Accomodation'];

   /**
    * @type Array<string> holds the values of the selected benefits
    */
   selectedBenefits: Array<string> = [];

  /**
   * Initializes Benefits Component
   * If Dependents is not valid redirect to dependents
   * get the selectedbenefits from the workflowservice
   * Remove already selected benefits from the original benefits array
   *
   */
  ngOnInit() {
    if(!this.workflowService.isDependentsValid()) {
      this.workflowService.goToStep(STEPS.dependents);
    }
    this.selectedBenefits = this.workflowService.getBenefits();

    if( this.selectedBenefits.length > 0 ) {
      this.benefits = this.benefits.filter(benefit => !this.selectedBenefits.includes(benefit))
    }
  }

  /**
   * check if selectedBenefits array is not empty
   * @returns boolean true if valid, false if not valid
   */
  isBenefitsValid() {
    return this.selectedBenefits.length > 0 ? true : false;
  }

  /**
   * update the benefits in the workflowservice
   * Go to the next step
   */
  save() {
    if(this.isBenefitsValid()) {
      this.workflowService.setBenefits(this.selectedBenefits);
      this.workflowService.goToStep(STEPS.summary);
    }
  }
}
