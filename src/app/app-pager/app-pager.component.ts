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
  previousId: number; 

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
   */
  currentPage: number = 0;

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
     this.addPage(employees[employees.length - 1].employeeId);
    })
  }

  /**
   * 
   */
  getNextPage() {
   let nextId = this.pages[this.currentPage].lastEmployeeId;
   this.currentPage++;
   this.employeeService.getNextEmployees(nextId)
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
    if(this.currentPage > 0) {
      this.removePage();
      this.currentPage--;
      let lastPage = this.pages[this.pages.length -1 ];
      this.employeeService.getNextEmployees(lastPage.lastEmployeeId)
      .toPromise()
      .then (employees => this.employees = employees)
    }
   }

   /**
    * 
    * @param lastEmployeeId last EmployeeId which is used to get the next 10 employees
    */
   addPage(lastEmployeeId: number) {
    let page = new ResultPage();
    page.pageNumber = this.currentPage + 1;
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

}
