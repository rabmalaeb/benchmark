import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from './department.service';
import { NgDatepickerModule } from 'ng2-datepicker';
import { DragulaModule } from 'ng2-dragula';


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavComponent } from './nav/nav.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AppPagerComponent } from './app-pager/app-pager.component';
import { ElistItemComponent } from './elist-item/elist-item.component';
import { WizardComponent } from './wizard/wizard.component';
import { DependentsComponent } from './dependents/dependents.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { DependentItemComponent } from './dependent-item/dependent-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    NewEmployeeComponent,
    NavComponent,
    ViewEmployeeComponent,
    AppPagerComponent,
    ElistItemComponent,
    WizardComponent,
    DependentsComponent,
    BenefitsComponent,
    DependentItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgDatepickerModule,
    DragulaModule
  ],
  providers: [
      EmployeeService,
      DepartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
