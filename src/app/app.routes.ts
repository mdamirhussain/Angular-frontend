import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { CreateEmployee } from './create-employee/create-employee';
import { EmployeeDetails } from './employee-details/employee-details';
import { UpdateEmployee } from './update-employee/update-employee';
import { Registration } from './registration/registration';
import { AppFileUpload } from './app-file-upload/app-file-upload';
//export const routes: Routes = [];
export const routes: Routes=[
 {path: 'employees',component:EmployeeList},
 {path: 'create-employee',component:CreateEmployee}, 
 {path: 'upload-file',component:AppFileUpload}, 
 
 {path: '',redirectTo: 'employees',pathMatch: 'full'},
 {path:'update-employee/:id',component: UpdateEmployee},
 {path:'employee-details/:id',component: EmployeeDetails},
 {path:'registration-form/:id',component: Registration}

 /*
 /employees
/create-employee
/update-employee/:id
/employee-details/:id
*/
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule{}


