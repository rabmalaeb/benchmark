import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  private employeeUrl = 'http://employees-api.azurewebsites.net/api/Employees/GetAll';  // URL to web api
  private updateEmployeeUrl = 'http://employees-api.azurewebsites.net/api/Employees/Update';

  constructor(
    private http: HttpClient,
  ) { }

  /** GET Employees from the server */
 getEmployees (): Observable<Employee[]> {
   return this.http.get<Employee[]>(this.employeeUrl)
 }

 updateEmployeeDepartment(employee: Employee): Observable<Employee[]> {
   return this.http.get<Employee[]>(this.updateEmployeeUrl)
 }

}
