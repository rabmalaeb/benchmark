import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})



export class BenefitsComponent implements OnInit {

  constructor(private dragulaService: DragulaService) {
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

  selectedBenefits: Array<string> = [];
  
  ngOnInit() {

  }

  private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
  }

  next() {
    console.log(this.selectedBenefits);
  }
}

