import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

@Directive({
  selector: '[ifRole]'
})

export class RoleSpecifireDirective {

  @Input("ifRole") roleName: string;
  @Input() roleIs : string;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    this.viewContainer.clear();
    console.log(this.roleName);

    let role = this.roleIs;
    // this.getrole()
    // .filter(user => user.role === this.roleName)
    // .then(data=>{
    //   this.viewContainer.createEmbeddedView(this.templateRef);      
    // })

  }


  getrole()  {
    return Promise.resolve('admin');
  }

}
