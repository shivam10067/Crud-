import { Component,OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-validation';

  // closeResult: string;

  

  // constructor(private modalService: NgbModal,private postData:HttpClient) {}

    

  // open(content:any) {

  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

  //     this.closeResult = `Closed with: ${result}`;

  //   }, (reason) => {

  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

  //   });

  // }

  // onSubmit(data:NgForm)
  // {
  //   console.log(data);
  //   this.postData.post('http://www.appgrowthcompany.com:5069/api/v1/employee/create',data)
  //   .subscribe(
  //     (response)=> console.log(response),
  //     (error)=> console.log(error)
   
  //   )
  // }

  

  // private getDismissReason(reason: any): string {

  //   if (reason === ModalDismissReasons.ESC) {

  //     return 'by pressing ESC';

  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

  //     return 'by clicking on a backdrop';

  //   } else {

  //     return  `with: ${reason}`;

  //   }

  // }
}

