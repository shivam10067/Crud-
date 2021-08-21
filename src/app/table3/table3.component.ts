import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';


import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, NgForm } from '@angular/forms';



@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component implements OnInit {
  empId:any;
  alert:boolean=false;
  editTable=new FormGroup({
    age:new FormControl('65'),
    name:new FormControl('Rahul'),
    salary:new FormControl('23000')
    
})
  


  
  

  constructor(private postData:HttpClient,private route:ActivatedRoute,private details:EmployeeService) { }


  ngOnInit(): void {

    this.empId=this.route.snapshot.params.id
    console.log(this.route.snapshot.params.id);
    this.details.updateEmp('update/' + 'this.empId',this.route.snapshot.params.data).subscribe((result)=>
    {
       console.log(result);

      this.editTable=new FormGroup({
      age:new FormControl(result['empId._age']),
      name:new FormControl(result['empId._name']),
      salary:new FormControl(result['empId._salary'])
})

}
)}

  
  // fetchData1()
  // {
  //   {
  //     this.details.getAllEmp('getAll').subscribe(
  //       Response=>
  //       {
  //         this.employees=Response.allEmployees.find((element:any)=>(element._id==this.empsId));
  //         this.employeeSecond=this.employees;
    
  //       }
  //     )
  //   }

  // }

  
  onSubmit(e:any)
  {

  }

  onEdit()
  {

  }



}