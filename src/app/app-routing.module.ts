import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';


const routes: Routes = [
  {path:'table',component:TableComponent},
  {path:'table1/:id',component:Table1Component},
  {path:'table2',component:Table2Component},
  {path:'table3/:id',component:Table3Component},
  
  {path:'tableAll',component:TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent =[TableComponent,Table1Component,Table2Component,Table3Component]
