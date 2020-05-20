import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsAdmin]'
})
export class IsAdminDirective {
@Input() set IsAdmin(condition: boolean){
if(!condition){
this.vcRef.createEmbeddedView(this.templateRef);
}
else{

}
}


  constructor(private templateRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }

}
