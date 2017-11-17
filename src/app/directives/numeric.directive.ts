import { Directive, HostListener, ElementRef } from "@angular/core";
import { concat } from "rxjs/operator/concat";

@Directive({
    selector: '[myUnderline]'
})
export class Numeric {

    constructor(private elementRef: ElementRef) { }

    @HostListener('keypress', ['$event'])
    OnKeyPress(event) {
        this.check.numeric(event)
    }

    check = {
        numeric: function (event) {
            console.log(event);

        }
    }


}

