import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {KeepOnLearningValidators} from "../../validators/keep-on-learning-validators";
import {Participant} from "../../common/participant";
import {ParticipantsService} from "../../services/participants.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ParticipantSmt} from "../../common/participant-smt";
import {CartItem} from "../../common/cart-item";
import {CartDetailsComponent} from "../cart-details/cart-details.component";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutFormGroup: FormGroup;
  @Input() id: string;

  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private participantService:ParticipantsService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>
      this.id = params.get('id')
    )
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
      return;
    }

    let p=new Participant();
    p.first_name=this.firstName.value;
    p.last_name=this.lastName.value;
    p.email=this.email.value;
    p.id_course=this.id;// aici trebe facut ceva
    let part=new ParticipantSmt();
    part.participant=p;
    this.participantService.add_participant(part).subscribe({
        next: response =>{
          alert(`${p.first_name} ${p.last_name} was enroled`)
          this.router.navigateByUrl(`/cart-details`);
        },
        error: err=>{
          alert(`There was an error: ${err.message}`);
        }
      }

    );

  }

}
