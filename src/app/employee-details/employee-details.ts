import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { Employeeservice } from '../employeeservice';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {
//id: number | undefined
 id!: number;
//employee: Employee | undefined
employee: Employee = new Employee();
constructor(private route: ActivatedRoute, private employeeService: Employeeservice){}

ngOnInit(): void{
 this.id=this.route.snapshot.params['id'];
 this.employee=new Employee();
 this.employeeService.getEmployeeById(this.id).subscribe(data=>{ this.employee=data; });
}
}
