import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  constructor(private postData:HttpClient) {} 

  onSubmit(data:NgForm)
  {
    console.log(data);
    this.postData.post('http://www.appgrowthcompany.com:5069/api/v1/employee/create',data)
    .subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
   
    )
  }

    
  

  // ids:any
  // ages:any
  // names:any
  // salarys:any

  // submit(id1:any,age1:any,name1:any,salary1:any)
  // {
  //   this.ids=id1.value;
  //   this.ages=age1.value;
  //   this.names=name1.value;
  //   this.salarys=salary1.value;


  // }


  


  ngOnInit(): void {
  }

}