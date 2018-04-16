import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  private employeesUrl = 'http://employees-api.azurewebsites.net/api/Employees/GetAll';  
  private employeeUrl = 'http://employees-api.azurewebsites.net/api/Employees/Employee';  
  private updateEmployeeUrl = 'http://employees-api.azurewebsites.net/api/Employees/Update';

  constructor(
    private http: HttpClient,
  ) { }

    /**
     * 
     *  GET Employees from the server 
     **/
  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
  }

  /**
    * 
    * @param employee 
    */
  updateEmployeeDepartment(employee: Employee): Observable<Employee[]> {
    return this.http.put<Employee[]>(this.updateEmployeeUrl, {employeeId:employee.employeeId, department: employee.department })
  }

  /**
    * 
    * @param employee 
    */
  getEmployee(employeeId: number) : Observable<Employee> {
    return this.http.get<Employee>(`${this.employeeUrl}/${employeeId}`);
  }

  /**
   * Get the next 10 employees after the specified employee ID
   * @param employeeId 
   */
  getNextEmployees(employeeId: number) : Observable<Employee[]>  {
    return this.http.get<Employee[]>(`${this.employeesUrl}/${employeeId}`);
  }

}
