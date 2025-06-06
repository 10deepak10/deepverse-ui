// dv-header.directive.ts
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[dvHeader]'
})
export class DvHeaderDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
