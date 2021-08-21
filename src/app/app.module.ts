import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalDismissReasons, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { Table2Component } from './table2/table2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule} from '@angular/material/input';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SignupComponent } from './signup/signup.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';




@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
   routingComponent,
    Table2Component,
    SignupComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        FormsModule,
        // AngularFontAwesomeModule
        
        
        
       
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
