import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {KeepOnLearningValidators} from "../../validators/keep-on-learning-validators";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutFormGroup=this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('',[Validators.required,Validators.minLength(2), KeepOnLearningValidators.notOnlyWhitespace]),
        lastName: new FormControl('',[Validators.required,Validators.minLength(2),KeepOnLearningValidators.notOnlyWhitespace]),
        email: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
      })
    });
  }

  get firstName() { return this.checkoutFormGroup.get('customer.firstName'); }
  get lastName() { return this.checkoutFormGroup.get('customer.lastName'); }
  get email() { return this.checkoutFormGroup.get('customer.email'); }

  onSubmit(){
    console.log("handling the submit button");

    if(this.checkoutFormGroup.invalid){
      this.checkoutFormGroup.markAllAsTouched();
    }

    console.log(this.checkoutFormGroup.get('customer').value);
    console.log("The emial address is" + this.checkoutFormGroup.get('customer').value.email);
  }

}
