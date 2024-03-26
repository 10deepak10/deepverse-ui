import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
@Component({
  selector: 'dv-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() group: string = 'group';
  @Input() multipleOpen: boolean = false;
  @Input() defaultOpen: boolean = false;
  @Input() flush: boolean = false;
  items: any;
  @ContentChildren(AccordionItemComponent)
  accordionItems!: QueryList<AccordionItemComponent>;
  @Output() activeAccordion = new EventEmitter<string | string[]>();
  constructor() {}
  ngAfterContentInit(): void {
    this.items = this.accordionItems.toArray();
  let defaultOpenCount = 0;
    // Collect IDs of default open items
    const defaultOpenItems: string[] = [];
    this.items.forEach((item: AccordionItemComponent) => {
      if (item.defaultOpen) {
        defaultOpenCount++;
        if (!this.multipleOpen && defaultOpenCount > 1) {
          console.warn(`Multiple defaultOpen items found in a single accordion with multipleOpen set to false. set <dv-accordion [multipleOpen]="true"> `);
        }
      }
      if (item.defaultOpen) {
        defaultOpenItems.push(
          String(item.id ? item.id : item.group + '-' + item.componentId)
        );
      }
    });
  
    // Emit the default open items along with selected items
    this.getactiveAcordion(defaultOpenItems);
  }
  
  public getactiveAcordion(item: string | string[]) {
    if (!this.multipleOpen && Array.isArray(item)) {
      this.activeAccordion.emit(item[0]);
    } else {
      this.activeAccordion.emit(item);
    }
  }
}
