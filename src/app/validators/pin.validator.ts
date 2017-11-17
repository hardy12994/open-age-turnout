import { FormControl } from "@angular/forms";

export function pinExistValidator(control: FormControl) {

    return {
        pinExist:true
    }
    
    // let pinValue = control.value;
    // if (!pinValue) {
    //     return {
    //         pinNotExist: true
    //     }
    // }
    // return {
    //     pinNotExist: false
    // };
}