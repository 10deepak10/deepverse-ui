import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionComponent } from '../accordion.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'dv-accordion-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent implements OnInit {
  private static id: number = 0;
  componentId: number = 0;
  @Input() id!: string ;
  selectState: boolean = false;
  @Input() title: string = 'accord';
  group: string = 'group';
  multipleOpen: boolean = false;
  @Input() defaultOpen: boolean = false;
  @Output() state = new EventEmitter<boolean>();
  @Output() change = new EventEmitter<any>();

  constructor(public accordion: AccordionComponent) {}

  ngOnInit(): void {
    this.componentId = ++AccordionItemComponent.id;
    this.multipleOpen = this.accordion.multipleOpen;
    this.group = this.accordion.group;
  }

  itemState(): void {
    const selectedItems: string[] = [];
    this.state.emit(this.selectState);
    if (!this.multipleOpen) {
      this.accordion.items.forEach((item: AccordionItemComponent) => {
        if (item !== this) {
          item.selectState = false;
          item.defaultOpen = false;
        }
      });
    }
    this.selectState = !this.selectState;
    this.accordion.items.forEach((item: AccordionItemComponent) => {
      if (item.selectState) {
        selectedItems.push(String(item.id ? item.id : item.group + '-' + item.componentId));
      }
    });
  
    // Emit the selected items
    this.accordion.getactiveAcordion(selectedItems);
  }
}
