import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent }      from './list-employees/list-employees.component';
import { NewEmployeeComponent }      from './new-employee/new-employee.component';
import { HomeComponent }      from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewEmployeeComponent },
  { path: 'list', component: ListEmployeesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
