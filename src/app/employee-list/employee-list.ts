import { Component } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule, NgFor } from '@angular/common';
import { Employeeservice } from '../employeeservice';
import { Router } from '@angular/router';
import id from '@angular/common/locales/id';
@Component({
  selector: 'app-employee-list',
  imports: [NgFor], // or //imports: [CommonModule], //for fine
  standalone: true, //not work
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  /*
  employees: Employee[] =[];
   ngOnInit(): void {
    this.employees=[
{id:1,firstName:"amir",lastName:"Hussain",emailId:"amir@gmail.com"},
{id:2,firstName:"sazo",lastName:"bano",emailId:"sazo@gmail.com"}
];
}*/
employees: Employee[]=[];
//constructor(private employeeService: Employeeservice,private router: Router){}
 constructor(private employeeService: Employeeservice,private router: Router){}
ngOnInit(): void{
 this.getEmployees();
}
private getEmployees(){
 this.employeeService.getEmployeesList().subscribe(data=> {
  this.employees=data;
  console.log(data)
 });
}
employeeDetails(id: number){
 this.router.navigate(['employee-details',id]);
}
updateEmployee(id: number){
 this.router.navigate(['update-employee',id]);
}
deleteEmployee(id: number){
 this.employeeService.deleteEmployee(id).subscribe( data => { 
  console.log(data);
  this.getEmployees();
 })
} 
employeeRegistration(id: number){
 this.router.navigate(['registration-form',id]);
}

}







function employeeDetails(id: (string | number | number[] | (string | undefined)[] | ((val: number) => number) | (string[] | undefined)[] | { AUD: string[]; BYN: (string | undefined)[]; IDR: string[]; INR: string[]; JPY: string[]; PHP: (string | undefined)[]; THB: string[]; TWD: string[]; USD: string[]; XXX: never[]; } | undefined)[], number: any) {
  throw new Error('Function not implemented.');
}

function updateEmployee(id: (string | number | number[] | (string | undefined)[] | (string[] | undefined)[] | ((val: number) => number) | { AUD: string[]; BYN: (string | undefined)[]; IDR: string[]; INR: string[]; JPY: string[]; PHP: (string | undefined)[]; THB: string[]; TWD: string[]; USD: string[]; XXX: never[]; } | undefined)[], number: any) {
  throw new Error('Function not implemented.');
}

function deleteEmployee(id: (string | number | number[] | (string | undefined)[] | ((val: number) => number) | (string[] | undefined)[] | { AUD: string[]; BYN: (string | undefined)[]; IDR: string[]; INR: string[]; JPY: string[]; PHP: (string | undefined)[]; THB: string[]; TWD: string[]; USD: string[]; XXX: never[]; } | undefined)[], number: any) {
  throw new Error('Function not implemented.');
}

