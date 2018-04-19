import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { WorkflowService } from '../workflow/workflow.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})

export class BenefitsComponent implements OnInit {

  constructor(private dragulaService: DragulaService, private workflowService: WorkflowService) {
    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
   }

   benefits: Array<string> = [
    'Meal', 'Travel', 'Phone', 'Accomodation'
  ];

  selectedBenefits: Array<String> = [];
  
  ngOnInit() {
    this.selectedBenefits = this.workflowService.getBenefits();
    console.log(this.selectedBenefits);
    
    if( this.selectedBenefits.length > 0 ) {  
      this.benefits = this.benefits.filter(benefit => !this.selectedBenefits.includes(benefit))
    }
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
  }

  save() {
    this.workflowService.setBenefits(this.selectedBenefits);
    this.workflowService.getRouter().navigateByUrl('/new/summary');
  }
}

