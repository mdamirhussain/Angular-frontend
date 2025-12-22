import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { Employeeservice } from '../employeeservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css',
})
export class UpdateEmployee {
  //id: number | undefined;
   id!: number;
employee: Employee=new Employee();
constructor(private employeeService: Employeeservice,
private route: ActivatedRoute,
private router: Router){}

ngOnInit(): void {
 this.id=this.route.snapshot.params['id'];
 this.employeeService.getEmployeeById(this.id).subscribe(data=>{
 this.employee=data;
 },error=> console.log(error));
}

onSubmit(){
 this.employeeService.updateEmployee(this.id,this.employee).subscribe
  (data=>{
   this.getToEmployeeList();
  },error => console.log(error));
 }
 getToEmployeeList(){
  this.router.navigate(['/employees']);
 }

}
