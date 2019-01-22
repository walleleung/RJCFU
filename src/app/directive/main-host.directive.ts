import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMainHost]'
})
export class MainHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
