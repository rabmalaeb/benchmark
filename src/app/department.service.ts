import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Department } from './department';

@Injectable()
export class DepartmentService {

  /**
   * url to get the list of Departments from the server
   */
  private departmentUrl: string = 'http://employees-api.azurewebsites.net/api/Departments';

  /**
   * Inject the HttpClient to the department service
   * @param http HttpClient instance
   */
  constructor(private http: HttpClient) {}

  /**
   * GET Departments from the server 
   * @returns an Observable of Department
   */
 getDepartments (): Observable<Department[]> {
   return this.http.get<Department[]>(this.departmentUrl)
 }

}
