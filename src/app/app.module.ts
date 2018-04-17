import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from './department.service';


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AppPagerComponent } from './app-pager/app-pager.component';
import { ElistItemComponent } from './elist-item/elist-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    NewEmployeeComponent,
    HomeComponent,
    ViewEmployeeComponent,
    AppPagerComponent,
    ElistItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      EmployeeService,
      DepartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
