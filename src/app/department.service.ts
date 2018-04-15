import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Department } from './department';

@Injectable()
export class DepartmentService {

  private departmentUrl = 'http://employees-api.azurewebsites.net/api/Departments';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  /** GET Departments from the server */
 getDepartments (): Observable<Department[]> {
   return this.http.get<Department[]>(this.departmentUrl)
 }

}
