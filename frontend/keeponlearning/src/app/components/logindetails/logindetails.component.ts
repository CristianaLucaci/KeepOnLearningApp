import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {KeepOnLearningValidators} from "../../validators/keep-on-learning-validators";
import {LoginService} from "../../services/login.service";
import {ChangeDetection} from "@angular/cli/lib/config/schema";

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.css']
})
export class LogindetailsComponent implements OnInit {
  loginFormGroup: FormGroup;
  private invalidLogin=true;

  constructor(private cd: ChangeDetectorRef,private router: Router,private formBuilder: FormBuilder,private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginFormGroup=this.formBuilder.group({
      client: this.formBuilder.group({
        username: new FormControl('',[Validators.required,Validators.minLength(2), KeepOnLearningValidators.notOnlyWhitespace]),
        password: new FormControl('',[Validators.required,Validators.minLength(2),KeepOnLearningValidators.notOnlyWhitespace]),
        email: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        role: new FormControl('',[Validators.required,Validators.minLength(2), KeepOnLearningValidators.notOnlyWhitespace])

      })
    });
    //this.cd.detectChanges();
  }

  get username() { return this.loginFormGroup.get('client.username'); }
  get password() { return this.loginFormGroup.get('client.password'); }
  get email() { return this.loginFormGroup.get('client.email'); }
  get role() { return this.loginFormGroup.get('client.role'); }


  onSubmit(){


    if(this.loginFormGroup.invalid){
      this.loginFormGroup.markAllAsTouched();
    }
    let e = this.email.value;
    let p = this.password.value;
    console.log("handling the submit button");

    if (this.loginService.authenticate(e, p)) {
      this.router.navigate(['/offers'])
      this.invalidLogin = false;
    } else{
      this.invalidLogin = true;
      }

    this.cd.detectChanges();
}


}
