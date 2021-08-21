import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  inputs:[` parentData`],
})


export class TableComponent implements OnInit {
  emp:any
  employee:any=[];
  public dataSource:any;
  name:any;

 

public pagesize = 10;
public currentPage = 0;
public totalSize = 0;

@ViewChild(MatPaginator,) paginator: MatPaginator;

public handlePage(e: any) {
  this.currentPage = e.pageIndex;
  this.pagesize = e.pageSize;
  this.iterator();
}

  iterator() 
  {
    const end = (this.currentPage + 1) * this.pagesize;
    const start = this.currentPage * this.pagesize;
    const part = this.employee.slice(start, end);
    this.dataSource = part;
  }

  
  
  





  displayedColumns: string[] = ['id', 'age', 'name', 'salary','Details','Actions'];


  
constructor(private http:HttpClient,private router:Router,private detail:EmployeeService) { }

ngOnInit(): void {
  this.detail.getAllEmp('getAll').subscribe(
    Response=>{
      // console.log(Response);

      this.emp=Response;
      this.dataSource = new MatTableDataSource<any>(this.emp);
      this.dataSource.paginator = this.paginator;

      console.log(this.dataSource);
      this.employee=this.emp.allEmployees;
      this.totalSize = this.employee.length;
     
      this.iterator();
      
    }
  )
}

  onSelect(emps:any)
  {
    this.router.navigate(['/table1',emps.id]);

  }

  onEdit(emps:any)
  {
    this.router.navigate(['/table3',emps.id]);

}









 @ViewChild(MatSort) sort: MatSort;
 
  ngAfterViewInit()
 {
   this.employee.sort=this.sort;
 }
















  public parentData:string
 search()
 {
   if(this.name=='')
   {
     this.ngOnInit();

   }else
   {
    let filter
    this.employee=this.employee.filter((a:any) =>
      {
          console.log(a.employee_name);
         return String(a['employee_name']).toLowerCase().match(String(this.name).toLowerCase());
         

      })
      console.log(filter);
      
    }
   

 }

 
 

  
}
  




