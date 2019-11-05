import { Injectable } from '@angular/core';
//import { User , USERS} from './user'
import { Employee } from './Employee'
import { Observable, of } from 'rxjs';
import { HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http'
import { catchError, map , tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //2nd way
  // gtUsers(): User[] {
  //   return USERS;
  // }
  constructor(private http:HttpClient) { }
  private employeeUrl = 'http://localhost:8080/employee';
  
    
    getEmployees():Observable<Employee[]>
    {
      //return of (USERS);
      const url="http://localhost:8080/employee/show";
      return this.http.get<Employee[]>(url);
      //.pipe(tap(User=>this.log("fetched users")),catchError(this.handleError('getUsers', [])));
    }
   
    searchEmployee(id:number):Observable<Employee>
    {
      //return of (USERS);
      const url = 'http://localhost:8080/employee/search';
      const newUrl=`${url}/${id}`;
      
      return this.http.get<Employee>(newUrl);
      //.pipe(tap(User=>this.log("fetched users")),catchError(this.handleError('getUsers', [])));
    }
	
    deleteEmployee(employee:Employee):Observable<Employee>
    {
      //return of (USERS);
      
      //const id=typeof employee==="number"?employee:employee.id;
      const url="http://localhost:8080/employee/delete";
      //const deleteUrl=`${url}/${id}`;
      return this.http.put<Employee>(url,employee);
      //.pipe(tap(User=>this.log("fetched users")),catchError(this.handleError('getUsers', [])));
    }
    
    addEmployee(employee:Employee):Observable<Employee>
    {
        const url="http://localhost:8080/employee/add";
        return this.http.post<Employee>(url,employee);
      //.pipe(tap(User=>this.log("fetched users")),catchError(this.handleError('getUsers', [])));
    }
    
}