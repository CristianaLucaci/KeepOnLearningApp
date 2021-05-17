import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {KeepOnLearningValidators} from "../../validators/keep-on-learning-validators";
import {RegisterService} from "../../services/register.service";
import {User} from "../../common/user";
import {Reg} from "../../common/reg";

@Component({
  selector: 'app-registerdetails',
  templateUrl: './registerdetails.component.html',
  styleUrls: ['./registerdetails.component.css']
})
export class RegisterdetailsComponent implements OnInit {

  loginFormGroup: FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder,private registerService: RegisterService) { }

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
      return;
    }
    let reg=new Reg();
    reg.user=this.loginFormGroup.controls['client'].value;

    /*
    let usr=new User();

    usr=this.loginFormGroup.controls['client'].value;
    const ceva:User  = JSON.parse(JSON.stringify(usr));

        const username: string=JSON.parse(JSON.stringify(usr.username));
        const email: string=JSON.parse(JSON.stringify(usr.email));
        const password: string=JSON.parse(JSON.stringify(usr.password));
        const role: string=JSON.parse(JSON.stringify(usr.role));
        usr.username=username;
        usr.email=email;
        usr.password=password;
        usr.role=role;

     */



    this.registerService.register(reg).subscribe({
      next: response =>{
        alert(`Your account :${reg.user.username} is now registered`)
      },
      error: err=>{
        alert(`There was an error: ${err.message}`);
      }
    }

    );

    //console.log(this.loginFormGroup.get('client').value);
   // console.log("The email address is" + this.loginFormGroup.get('client').value.email);



  }



}
