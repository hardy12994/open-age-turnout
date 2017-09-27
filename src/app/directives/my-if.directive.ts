import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  @Input() set myIf(shouldAdd: boolean) {

    if (shouldAdd) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    }
  }
}
