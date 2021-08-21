import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit,AfterViewInit {

  public empsId:any;
  // public empsAge:any;
  // public empsName:any;
  // public empsSalary:any;
  constructor(private route:ActivatedRoute,private details:EmployeeService) { }

ngAfterViewInit()
{
  this.fetchData()

}
employees:any;

employeeSecond:any=[]


  ngOnInit(): void {
     this.empsId=(this.route.snapshot.paramMap.get('id'));
    //  this.empsAge=(this.route.snapshot.paramMap.get('age'));
    //  this.empsId=(this.route.snapshot.paramMap.get('name'));
    //  this.empsId=(this.route.snapshot.paramMap.get('salary'));
   
  }
  fetchData()
{
  this.details.getAllEmp('getAll').subscribe(
    Response=>
    {
      this.employees=Response.allEmployees.find((element:any)=>(element.id==this.empsId));
      this.employeeSecond=this.employees;

    }
  )
}



}


