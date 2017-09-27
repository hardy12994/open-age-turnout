import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[myUnderline]'
})
export class MyUnderlineDirective {


  constructor(private renderer: Renderer, private elementRef: ElementRef) { }

  ngOnInit() { }

  // Event listeners for element hosting
  // the directive

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }

  // Event method to be called on mouse enter and on mouse leave
  hover(shouldUnderline: boolean) {
    if (shouldUnderline) {
      // Mouse enter
      console.log('you have enter the area');
      
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'text-decoration', 'underline');
    } else {
      // Mouse leave
      console.log('you leaveing the area');

      this.renderer.setElementStyle(this.elementRef.nativeElement, 'text-decoration', 'none');
    }
  }

}
