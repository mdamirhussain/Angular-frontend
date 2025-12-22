import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { Employeeservice } from '../employeeservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule,CommonModule  // required for ngModel + ngForm
  ],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee {
  employee: Employee = new Employee(); 
 
  constructor(private employeeService: Employeeservice,private router: Router){}

  ngOnInit(): void{}
  
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
     this.goToEmployeeList();
    },error=>console.log(error));
  }
goToEmployeeList(){
 this.router.navigate(['/employees']);
}
onSubmit(){
 //console.log(this.employee);
 //this.saveEmployee();
 if (!this.employee.firstName || !this.employee.lasttName || !this.employee.emailId) {
    return; // form invalid safeguard
  }
  this.saveEmployee();
}
}
