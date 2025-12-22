import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployee } from './create-employee/create-employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployee } from './update-employee/update-employee';
import { EmployeeDetails } from './employee-details/employee-details';
import { Registration } from './registration/registration';
import { CommonModule } from '@angular/common';
import { AppFileUpload } from './app-file-upload/app-file-upload';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployeeList,HttpClientModule,HttpClientModule,CreateEmployee
,   RouterLink,
    RouterLinkActive,
    EmployeeList,CreateEmployee, UpdateEmployee,EmployeeDetails,Registration,
    HttpClientModule,
    FormsModule,UpdateEmployee,AppFileUpload,

    ReactiveFormsModule,CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular 10 Spring Boot CRUD full stack App');
  //title='Angular 10 Spring Boot CRUD full stack App';
}
