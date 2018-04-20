import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent }      from './list-employees/list-employees.component';
import { NewEmployeeComponent }      from './new-employee/new-employee.component';
import { NavComponent }      from './nav/nav.component';
import { WizardComponent } from './wizard/wizard.component';
import { DependentsComponent } from './dependents/dependents.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', component: ListEmployeesComponent },
  { path: 'new', component: WizardComponent, children: [
    { path: '', component: NewEmployeeComponent},
    { path: 'dependents', component: DependentsComponent},
    { path: 'benefits', component: BenefitsComponent},
    { path: 'summary', component: SummaryComponent}
  ] },
  { path: 'list', component: ListEmployeesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
   ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
