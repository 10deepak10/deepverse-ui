import { CommonModule } from '@angular/common';
import { Component, ContentChildren, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
@Component({
  selector: 'dv-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() group: string = 'group';
  @Input() multipleOpen: boolean = false;
  @Input() defaultOpen: boolean = false;
  @Input() flush: boolean = false;
  items: any;
  @ContentChildren(AccordionItemComponent) accordionItems!: QueryList<AccordionItemComponent>;
  constructor() {}
  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.items = this.accordionItems.toArray();
  }
  
}
