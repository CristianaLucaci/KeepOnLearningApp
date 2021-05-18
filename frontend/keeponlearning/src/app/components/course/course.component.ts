import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {KeepOnLearningValidators} from "../../validators/keep-on-learning-validators";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.courseFormGroup=this.formBuilder.group({
      customer: this.formBuilder.group({
        courseName: new FormControl('',[Validators.required,Validators.minLength(2), KeepOnLearningValidators.notOnlyWhitespace]),
        profName: new FormControl('',[Validators.required,Validators.minLength(2),KeepOnLearningValidators.notOnlyWhitespace]),
        description: new FormControl(),
        subject: new FormControl()
      })
    });
  }

  get courseName() { return this.courseFormGroup.get('customer.courseName'); }
  get profName() { return this.courseFormGroup.get('customer.profName'); }
  get description() { return this.courseFormGroup.get('customer.description'); }
  get subject() { return this.courseFormGroup.get('customer.description'); }

  onSubmit(){
    console.log("handling the submit button");

    if(this.courseFormGroup.invalid){
      this.courseFormGroup.markAllAsTouched();
    }

    console.log(this.courseFormGroup.get('customer').value);
    //console.log("The emial address is" + this.checkoutFormGroup.get('customer').value.email);
  }

}
