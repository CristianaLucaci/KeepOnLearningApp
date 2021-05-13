import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {KeepOnLearningValidators} from "../../validators/keep-on-learning-validators";

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.css']
})
export class LogindetailsComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginFormGroup=this.formBuilder.group({
      client: this.formBuilder.group({
        username: new FormControl('',[Validators.required,Validators.minLength(2), KeepOnLearningValidators.notOnlyWhitespace]),
        password: new FormControl('',[Validators.required,Validators.minLength(2),KeepOnLearningValidators.notOnlyWhitespace]),
        email: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        role: new FormControl('',[Validators.required,Validators.minLength(2), KeepOnLearningValidators.notOnlyWhitespace])

      })
    });
  }

  get username() { return this.loginFormGroup.get('client.username'); }
  get password() { return this.loginFormGroup.get('client.password'); }
  get email() { return this.loginFormGroup.get('client.email'); }
  get role() { return this.loginFormGroup.get('client.role'); }


  onSubmit(){
    console.log("handling the submit button");

    if(this.loginFormGroup.invalid){
      this.loginFormGroup.markAllAsTouched();
    }

    console.log(this.loginFormGroup.get('client').value);
    console.log("The email address is" + this.loginFormGroup.get('client').value.email);
  }


}
