import {
  Directive, Input, ViewContainerRef, TemplateRef, ElementRef,
  Component, EventEmitter, Renderer2, HostListener, OnInit, DoCheck,
  keyframes
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ToasterService } from "app/services/toaster.service";


@Directive({
  selector: '[toast]',

})

export class HardToasterDirective {

  color: string;
  type: string;

  constructor(
    public viewContainerRef: ViewContainerRef,
    public templateRef: TemplateRef<any>,
    public toasterService: ToasterService
  ) {
  }

  @Input('toast') set toaster(type: string) {

    this.type = type;
    if (!type) {
      return;
    }

    this.color = this.getColor(type);
    this.setDecoration();
    this.makeInvisible();
  }

  getColor(type: string): string {
    switch (type) {
      case 'i':
        return '#004b66';

      case 'w':
        return '#ffaa00';

      case 's':
        return '#009933';

      case 'f':
        return '#cc3300';

      default:
        return '#004b66';
    }
  }


  setDecoration() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    document.getElementById("toast").style['background-color'] = this.color;
    document.getElementById("toast").style['color'] = "#e6e6e6";
    document.getElementById("toast").style['border-radius'] = '5px';
    document.getElementById("toast").style['font-family'] = 'verdana';
    document.getElementById("toast").style['padding'] = '10px 10px';
    document.getElementById("toast").style['margin-right'] = '15px';
    document.getElementById("toast").style['right'] = '0px';
    document.getElementById("toast").style['position'] = 'fixed';
    document.getElementById("toast").style['zIndex'] = '1';
  }

  makeInvisible() {
    var containerRef = this.viewContainerRef;
    var that = this;
    setTimeout(function () {
      console.log('threee seconds over');
      containerRef.clear();
      that.toasterService.set("", "");
    }, 3000);

  }


}