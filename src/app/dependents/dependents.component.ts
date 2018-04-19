import { Component, OnInit } from '@angular/core';
import { Dependent } from '../dependent';
import { WorkflowService } from '../workflow/workflow.service';
import { locateHostElement } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.scss']
})
export class DependentsComponent implements OnInit {

  dependents: Array<Dependent> = [];
  numberOfDependents: number = 0;
  
  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {    
    this.dependents = this.workflowService.getDependents();
  }

  addDependent(): void {
    let dependent = new Dependent();
    dependent.id = this.numberOfDependents;
    this.numberOfDependents++;
    this.dependents.push(dependent);
  }

  delete(dependent: Dependent): void {
    let id = this.dependents.map(function(item) { return item.id; }).indexOf(dependent.id);
    this.dependents.splice(id, 1);
  }

  save() {
    this.workflowService.setDependents(this.dependents);
    this.workflowService.getRouter().navigateByUrl('/new/benefits');
  }

}
