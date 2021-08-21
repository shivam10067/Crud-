import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm!: FormGroup; 
  // notAllowedNames=['/^([^0-9]*)$/'];

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm =new FormGroup({

      'userDetail':new FormGroup({
      'username': new FormControl(null,[Validators.required, Validators.pattern("^[a-zA-Z\s]+$")]),
      'email': new FormControl(null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      'password':new FormControl( null, [Validators.required, Validators.minLength(8)]),
      'contact':new FormControl( null, [Validators.required, Validators.minLength(10)]),
     }),

     

     
      
      'course': new FormControl('Angular'),
      // 'skills': new FormArray([
      //   new FormControl(null,Validators.required),
      //   new FormControl(null,Validators.required),
      //   new FormControl(null,Validators.required)
      // ])


    });
  }
  onSubmit()
  {
    this.myReactiveForm.markAllAsTouched();
  }

//   NaNames(control:FormControl)

// {
//     if(this.notAllowedNames.indexOf(control.value)!==-1)
//     {
//       return{'nameIsNotAllowed':true}
//     }
//     return null;

// }

  

}
