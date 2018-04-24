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
   * array to hold the list of employees
   */
  @Input()employees: Array<Employee> = [];

  /**
   * this array holds the pages of the pager.
   * each page contains the lastEmployeeId which is used to get the next 10
   * the length of this array is the number of pages in the pager
   * @type Array<ResultPage>
   */
  pages: Array<ResultPage> = [];

  /**
   * defualts the number of pages in the pager to 10
   * @type number 10
   */
  itemsPerPage: number = 10;


  /**
   *
   * @param employeeService instance of EmployeeService
   */
  constructor(private employeeService: EmployeeService) { }

  /**
   * Call getNextPage function
   */
  ngOnInit() {
    this.getNextPage();
  }

  /**
   * reset the empoyees array in case it already has any values
   * ( in case we are loading a previous page )
   * get employees from the api
   * Loop over the result
   * add only 10 employees to the employees array according to the itemsPerpage
   */
  getEmployees() {
    if (this.employees.length > 0 ) {
      this.employees = [];
    }
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
    if(this.pages.length > 0) {
      this.employeeService.getNextEmployees(this.pages[this.pages.length - 1].lastEmployeeId)
      .toPromise()
      .then (employees => {
          this.employees = employees;
          this.addPage(employees[employees.length - 1].employeeId);
      })
    } else {
      this.getEmployees();
    }
  }

  /**
   * checl the length of the pages array
   * case 0 then call the getEmployees function to load the first 10 results
   * case 1 then remove one page from pages Array and getNextPage
   * default then remove two pages from pages Array and getNextPage
   */
  getPreviousPage() {
    switch(this.pages.length) {
      case 0:
        this.getEmployees();
      break;
      case 1:
        this.removePage();
        this.getNextPage();
      break;
      default:
        this.removePage();
        this.removePage();
        this.getNextPage();
      break;
    }
   }

   /**
    * add a new ResultPage to the pages array
    * @param lastEmployeeId last EmployeeId which is used to get the next 10 employees
    */
   addPage(lastEmployeeId: number) {
      let page = new ResultPage();
      page.lastEmployeeId = lastEmployeeId;
      this.pages.push(page);
   }

   /**
    * remove the last ResultPage from the pages array
    */
   removePage() {
     this.pages.pop();
   }

   /**
    * get the current page number which is equal to the length of pages[]
    * @returns integer
    */
   getCurrentPage() {
     return this.pages.length;
   }

}
