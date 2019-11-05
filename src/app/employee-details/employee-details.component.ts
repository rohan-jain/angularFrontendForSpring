import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee'
import { EmployeeService } from '../Employee.service'
import { Department } from '../Department';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees:Employee[];

  emp:Employee=
  {
    id:null,
      name:"",
      mobile:"",
      salary:null,
      hours:null,
      rate:null,
      department:null
  }
  
 dept:Department=
 {
   departmentId=null,
   departmentName=""
 }

  employee:Employee=
  {
      id:null,
      name:"",
      mobile:"",
      salary:null,
      hours:null,
      rate:null,
      department:null
  }

  getEmployees():void
  {
    //2nd way using service
    //this.users=this.userService.gtUsers();

    //3rd using observable
    this.employeeService.getEmployees().subscribe(employees => this.employees =employees);
  }
  
  searchEmployee(id:number):void
  {
    //2nd way using service
    //this.users=this.userService.gtUsers();

    //3rd using observable
    this.employeeService.searchEmployee(id).subscribe(emp => this.emp =emp);
    
  }

  cancelEdit():void
  {
    //2nd way using service
    //this.users=this.userService.gtUsers();
    this.emp=null;
  }

  deleteEmployee(employee:Employee):void
  {
      this.employeeService.deleteEmployee(employee).subscribe();
      alert("Employee deleted Successfully!!!");
  }

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() 
  {
    this.getEmployees();
  }
  

}
