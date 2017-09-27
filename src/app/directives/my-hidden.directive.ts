import { Directive, Renderer, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myHidden]'
})

export class MyHiddenDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // static defination

    // renderer.setElementStyle(elementRef.nativeElement,'display','none');
  }

  @Input() tobeHide: boolean;
  @Input() myHidden: boolean;

  ngOnInit() {
    if (this.tobeHide || this.myHidden) {
      console.log('tobeHide is TRUE. So, going to hide');
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
    } else {
      console.log('tobeHide is False. So, no hiding');
    }
  }
}
