import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
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
  constructor() {}
  ngOnInit(): void {}
  
}
