import {FormControl, ValidationErrors} from "@angular/forms";

export class KeepOnLearningValidators {
  //whitespace validation
  static notOnlyWhitespace(control: FormControl) : ValidationErrors{
    //checking if the string has only whitespaces

    if((control.value!=null) && (control.value.trim().length===0)){
      //invalid
      return{'notOnlyWhitespace': true};
    }
    else {
      //valid, returns null
      return null;
    }
  }

}
