import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://www.appgrowthcompany.com:5069/api/v1/employee/'
  constructor(private http:HttpClient) { }
  getAllEmp(endpoint:string):Observable<any>
  {
    return this.http.get(`${this.url}${endpoint}`);
  }
  deleteEmp(endpoint:string):Observable<any>
  {
    return this.http.delete(`${this.url}${endpoint}`);
  }
  updateEmp(endpoint:string, data:any):Observable<any>
  {
    return this.http.put(`${this.url}${endpoint}` ,data);
  }
  AddNewEmp(endpoint:string,data:any):Observable<any>
  {
    return this.http.post(`${this.url}${endpoint}`,data);
  }
  getSingleEmp(endpoint:string):Observable<any>
  {
    return this.http.get(`${this.url}${endpoint}`);
  }
}
