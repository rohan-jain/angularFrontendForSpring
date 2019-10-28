import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'register',component:AddDepartmentComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
