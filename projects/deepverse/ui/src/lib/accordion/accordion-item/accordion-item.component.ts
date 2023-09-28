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
  @Input() title: string = 'accord';
  group: string = 'group';
  multipleOpen: boolean = false;
  @Input() defaultOpen: boolean = false;
  constructor(public accordion: AccordionComponent) {}

  ngOnInit(): void {
    this.multipleOpen = this.accordion.multipleOpen;
    this.group = this.accordion.group;
  }
  state() {}
}
