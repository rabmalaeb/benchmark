import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent }      from './list-employees/list-employees.component';
import { NewEmployeeComponent }      from './new-employee/new-employee.component';
import { NavComponent }      from './nav/nav.component';
import { WizardComponent } from './wizard/wizard.component';

const routes: Routes = [
  { path: '', component: ListEmployeesComponent },
  { path: 'new', component: WizardComponent },
  { path: 'list', component: ListEmployeesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
   ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
