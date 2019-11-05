import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee'
import {EmployeeService} from '../Employee.service'
import { Department } from '../Department';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit 
{
  department:Department=
  {
    departmentId:null,
    departmentName:""
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
  
  addEmployee(employee:Employee,dept:Department):void
  {
      employee.department=dept;
      this.employeeService.addEmployee(employee).subscribe();
      
      alert("Employee Added Successfully!!!");
  }

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  }

}
