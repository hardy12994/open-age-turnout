
import { Directive, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[yoloSelector]'
})

export class SelectDirective {

    selectorCss:{
        "height":"150px";
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) { 
        for (var key in this.selectorCss) {
            this.renderer.setStyle(this.elementRef.nativeElement, key, this.selectorCss[key]);
        }
    } 


}