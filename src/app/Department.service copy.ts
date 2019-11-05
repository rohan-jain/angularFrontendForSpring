import { Injectable } from '@angular/core';
//import { User , USERS} from './user'
import { Department } from './Department'
import { Observable, of } from 'rxjs';
import { HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http'
import { catchError, map , tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  //2nd way
  // gtUsers(): User[] {
  //   return USERS;
  // }
  constructor(private http:HttpClient) { }
  private departmentUrl = 'http://localhost:8080/department';
  
    
    getDepartment():Observable<Department[]>
    {
      //return of (USERS);
      const url="http://localhost:8080/department/show";
      return this.http.get<Department[]>(url);
      //.pipe(tap(User=>this.log("fetched users")),catchError(this.handleError('getUsers', [])));
    }
   
	
    deleteDepartment(department:Department):Observable<Department>
    {
      //return of (USERS);
      
      const id=typeof department==="number"?department:department.departmentId;
      const url="http://localhost:8080/department/delete";
      const deleteUrl=`${url}/${id}`;
      return this.http.delete<Department>(deleteUrl);
      //.pipe(tap(User=>this.log("fetched users")),catchError(this.handleError('getUsers', [])));
    }
    
    addDepartment(department:Department):Observable<Department>
    addDepartment(department:Department):Observable<Department>
    {
        const url="http://localhost:8080/department/add";
        return this.http.post<Department>(url,department);
      //.pipe(tap(User=>this.log("fetched users")),catchError(this.handleError('getUsers', [])));
    }
    
}