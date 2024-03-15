import { Component, Input, OnInit } from '@angular/core';
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
  selectState: boolean = false;
  @Input() title: string = 'accord';
  group: string = 'group';
  multipleOpen: boolean = false;
  @Input() defaultOpen: boolean = false;
  constructor(public accordion: AccordionComponent) {}

  ngOnInit(): void {
    this.componentId = ++AccordionItemComponent.id;
    this.multipleOpen = this.accordion.multipleOpen;
    this.group = this.accordion.group;
  }

  state(element: HTMLInputElement): void {
    if (!this.multipleOpen) {
      this.accordion.items.forEach((item:AccordionItemComponent) => {
        if (item !== this) {
          item.selectState = false;
        }
      });
    }
    this.selectState = !this.selectState;
  }
}
