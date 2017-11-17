import { ElementRef, Directive, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[yolo-input]'
})
export class InputDirective {

    inputCss = {
        "border-left": "transparent",
        "border-right": "transparent",
        "border-top": "transparent",
        "outline": "none",
        "border-bottom-color": "#a6a6a6",
        "border-width": "1px"
    };

    constructor(private elemRef: ElementRef, private renderer: Renderer2) {
        this.setStyle();
    }
    setStyle() {
        for (var key in this.inputCss) {
            this.renderer.setStyle(this.elemRef.nativeElement, key, this.inputCss[key]);
        }
    }

}