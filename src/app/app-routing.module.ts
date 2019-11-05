import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'addDepartment',component:AddDepartmentComponent},
  {path:'addEmployee',component:AddEmployeeComponent},
  {path:'showEmployees',component:EmployeeDetailsComponent},
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
