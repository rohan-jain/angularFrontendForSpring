import { Component, OnInit } from '@angular/core';
import {Department} from '../Department'
import {DepartmentService} from '../Department.service'

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})

export class AddDepartmentComponent implements OnInit 
{
  department:Department=
  {
      departmentId:null,
      departmentName:""
  }
  
  constructor(private departmentSerive:DepartmentService) { }

  ngOnInit() {
  }

}
