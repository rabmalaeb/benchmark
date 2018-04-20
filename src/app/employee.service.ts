import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  /**
   * url to get all employees
   */
  private employeesUrl = 'http://employees-api.azurewebsites.net/api/Employees/GetAll';  

  /**
   * url to get a specific employee
   */
  private employeeUrl = 'http://employees-api.azurewebsites.net/api/Employees/Employee';  

  /**
   * url to update an employee
   */
  private updateEmployeeUrl = 'http://employees-api.azurewebsites.net/api/Employees/Update';

  /**
   * 
   * @param http HttpClient instance that handles api calls
   */
  constructor(private http: HttpClient) { }

    /**
     * 
     *  GET Employees from the server 
     **/
  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
  }

  /**
    * 
    * @param employee Employee to be updated
    */
  updateEmployeeDepartment(employee: Employee): Observable<Employee[]> {
    return this.http.put<Employee[]>(this.updateEmployeeUrl, {employeeId:employee.employeeId, department: employee.department })
  }

  /**
    * get the employee according to the specified employee ID 
    * @param employeeId the ID of the employee to get from the server 
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
