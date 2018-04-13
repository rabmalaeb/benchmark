import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EmployeeService } from './employee.service';
import { DepartmentService } from './department.service';


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    NewEmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      EmployeeService,
      DepartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
