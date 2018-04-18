import { Component, OnInit } from '@angular/core';
import { Dependent } from '../dependent';

@Component({
  selector: 'app-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.scss']
})
export class DependentsComponent implements OnInit {

  dependents: Array<Dependent> = [];
  numberOfDependents: number = 0;
  
  constructor() { }

  ngOnInit() {
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

}
