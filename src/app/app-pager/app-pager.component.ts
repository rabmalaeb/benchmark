import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

import { Employee } from '../employee';
import { ResultPage } from '../result-page';

@Component({
  selector: 'app-pager',
  templateUrl: './app-pager.component.html',
  styleUrls: ['./app-pager.component.scss']
})

export class AppPagerComponent implements OnInit {

  /**
   * 
   */
  @Input()employees: Employee[] = [];

  /**
   * 
   */
  pages: Array<ResultPage> = [];

  /**
   * 
   */
  itemsPerPage: number = 10;


  /**
   * 
   * @param employeeService instance of EmployeeService
   */
  constructor(private employeeService: EmployeeService) { }

  /**
   * Call getEmployees function
   */
  ngOnInit() {
    this.getEmployees();
  }

  /**
   * get employees from the api 
   * Loop over the result
   * add only 10 employees to the employees array according to the itemsPerpage
   */
  getEmployees() {
   this.employeeService.getEmployees()
   .toPromise()
   .then ((employees) => {
      employees.map((employee)=> {
        if(this.employees.length < this.itemsPerPage) {
          this.employees.push(employee);
        }
     })      
     this.addPage(this.employees[this.employees.length - 1].employeeId);     
    })
  }

  /**
   * 
   */
  getNextPage() {

    console.log('pages length ', this.pages.length);
   this.employeeService.getNextEmployees(this.pages[this.pages.length - 1].lastEmployeeId)
   .toPromise()
   .then (employees => {
      this.employees = employees;
      this.addPage(employees[employees.length - 1].employeeId);
   })
  }

  /**
   * remove the last ResultPage from the pages array
   * get the current last ResultPage from the pages array which is the previous page
   * decrement the current page
   * get the next 10 customers starting from the lastEmployeeId of the previous page
   */
  getPreviousPage() {
    console.log('pages length ', this.pages.length);
    
    switch(this.pages.length) {
      case 1: 
        this.removePage();
        this.getNextPage();
      break;
      case 0: 
        this.getEmployees();
      break;
      default: 
        this.removePage();
        this.removePage();
        this.getNextPage();
      break;
    }
   }

   /**
    * 
    * @param lastEmployeeId last EmployeeId which is used to get the next 10 employees
    */
   addPage(lastEmployeeId: number) {
    let page = new ResultPage();
    page.pageNumber = this.pages.length;
    page.lastEmployeeId = lastEmployeeId;
    this.pages.push(page);
   }

   /**
    * remove the last ResultPage from the pages array
    * the current ResultPage is the previous page
    */
   removePage() {
     this.pages.pop();
   }

   getCurrentPage() {
     return this.pages.length;
   }

}
