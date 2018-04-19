import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../workflow/workflow.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {
    console.log('summary is ', this.workflowService);
    
  }

}
