import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {KeepOnLearningValidators} from "../../validators/keep-on-learning-validators";
import {Reg} from "../../common/reg";
import {CourseSmt} from "../../common/course-smt";
import {CourseService} from "../../services/course.service";
import {Router} from "@angular/router";
import {Offer} from "../../common/offer";
import {OfferCategory} from "../../common/offer-category";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})


export class CourseComponent implements OnInit {


  courseFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder,private courseService:CourseService,private router:Router) { }

  ngOnInit(): void {
    this.courseFormGroup=this.formBuilder.group({
      customer: this.formBuilder.group({
        courseName: new FormControl('',[Validators.required,Validators.minLength(2), KeepOnLearningValidators.notOnlyWhitespace]),
        profName: new FormControl('',[Validators.required,Validators.minLength(2),KeepOnLearningValidators.notOnlyWhitespace]),
        description: new FormControl(),
        subject: new FormControl(),
        nr:new FormControl()
      })
    });
  }

  get courseName() { return this.courseFormGroup.get('customer.courseName'); }
  get profName() { return this.courseFormGroup.get('customer.profName'); }
  get description() { return this.courseFormGroup.get('customer.description'); }
  get subject() { return this.courseFormGroup.get('customer.subject'); }
  get nr() { return this.courseFormGroup.get('customer.nr'); }

  onSubmit(){
    console.log("handling the submit button");

    if(this.courseFormGroup.invalid){
      this.courseFormGroup.markAllAsTouched();
      //return;
    }
    let c=new CourseSmt();
    let o=new Offer();
    let g=new OfferCategory();
    o.name=this.courseName.value;
    o.professorName=this.profName.value;

    o.description=this.description.value;
    o.participants=this.nr.value;
    o.placesAvailable=this.nr.value;
    o.active=true;

    if(this.subject.value=="Computer_Science"){
      o.imageUrl="assets/images/products/js.jpg";
      g.id = "1";
    }else
      if(this.subject.value=="Mathematics"){
        g.id = "2";
        o.imageUrl="assets/images/products/placeholder.png";
    }else
      if(this.subject.value=="Literature"){
        g.id = "3";
        o.imageUrl="assets/images/products/el.jpg";
      }else
      if(this.subject.value=="History"){
        g.id = "4";
        o.imageUrl="assets/images/products/history.png";
      }else
      if(this.subject.value=="Geography"){
        g.id = "5";
        o.imageUrl="assets/images/products/geo.jpg";
      }


    g.categoryName=this.subject.value;
    o.category=g;
    c.offer=o;
    this.courseService.add_course(c).subscribe({
        next: response =>{
          alert(`Your course ${c.offer.name} was posted`)
          this.router.navigateByUrl(`/offers`);
        },
        error: err=>{
          alert(`There was an error: ${err.message}`);
        }
      }

    );

    //console.log(this.courseFormGroup.get('customer').value);
    //console.log("The emial address is" + this.checkoutFormGroup.get('customer').value.email);
  }




}
