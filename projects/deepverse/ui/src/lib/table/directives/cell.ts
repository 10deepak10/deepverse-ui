// dv-cell.directive.ts
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[dvCell]'
})
export class DvCellDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
