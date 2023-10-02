import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent, AccordionItemComponent } from '@deepverse/ui';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, AccordionItemComponent , AccordionComponent],
  templateUrl: './accordion.component.html'
})
export class AccordionDemoComponent {

}
