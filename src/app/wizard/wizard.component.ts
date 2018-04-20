import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../workflow/workflow.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {
  }

}
