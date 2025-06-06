import { Component, ContentChild, Input } from '@angular/core';
import { DvHeaderDirective } from '../directives/head';
import { DvCellDirective } from '../directives/cell';

@Component({
  selector: 'dv-table-item',
  standalone: true,
  template: `<ng-template><ng-content></ng-content></ng-template>`,
})
export class TableItem {
  @Input() label!: string;
  @Input() key?: string;
  @Input() stickyLeft?: boolean;
  @ContentChild(DvCellDirective) cellTemplateRef?: DvCellDirective;
  @ContentChild(DvHeaderDirective) headerTemplateRef?: DvHeaderDirective;

}
