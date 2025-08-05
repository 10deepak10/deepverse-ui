import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccordionComponent,
  AccordionItemComponent,
  Table,
  TableItem,
} from '@deepverse/ui';
import { DvTabShell } from '../../shared/dv-tab-shell/dv-tab-shell';
import { PrismHighlightDirective } from '../../shared/directive/highlight';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    CommonModule,
    DvTabShell,
    AccordionItemComponent,
    AccordionComponent,
    Table,
    TableItem,
    PrismHighlightDirective,
  ],
  templateUrl: './accordion.component.html',
})
export class AccordionDemoComponent {
  showRadioCode = false;
  showCheckboxCode = false;

  activeItems: string | string[] = [];

  radioExampleCode = `
<dv-accordion group="radio" (activeAccordion)="allactives($event)">
  <dv-accordion-item title="Radio 1" [defaultOpen]="true" id="first">
    <div>First item content.</div>
  </dv-accordion-item>
  <dv-accordion-item title="Radio 2" id="second">
    <div>Second item content.</div>
  </dv-accordion-item>
  <dv-accordion-item title="Radio 3" id="third">
    <div>Third item content.</div>
  </dv-accordion-item>
</dv-accordion>
`.trim();

  checkboxExampleCode = `
<dv-accordion group="checkbox" [multipleOpen]="true" (activeAccordion)="allactives($event)">
  <dv-accordion-item title="Checkbox 1" id="one">
    <div>First item content.</div>
  </dv-accordion-item>
  <dv-accordion-item title="Checkbox 2" [defaultOpen]="true" id="two">
    <div>Second item content.</div>
  </dv-accordion-item>
  <dv-accordion-item title="Checkbox 3" [defaultOpen]="true" id="three">
    <div>Third item content.</div>
  </dv-accordion-item>
</dv-accordion>
`.trim();

  accordionProps = [
    {
      property: 'group',
      description: 'String identifier for the accordion group.',
      type: 'string',
      default_value: `'group'`,
    },
    {
      property: 'multipleOpen',
      description: 'Allows multiple items to be opened.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'defaultOpen',
      description: 'If true, opens the item by default.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'flush',
      description: 'Removes spacing/styling.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'activeAccordion',
      description: 'Emits ID(s) of open item(s).',
      type: 'EventEmitter<string | string[]>',
      default_value: '—',
    },
  ];

  accordionItemProps = [
    {
      property: 'id',
      description: 'Unique ID for item (optional).',
      type: 'string',
      default_value: 'auto-generated',
    },
    {
      property: 'title',
      description: 'Header text of the item.',
      type: 'string',
      default_value: `'accord'`,
    },
    {
      property: 'defaultOpen',
      description: 'Opens the item on init.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'state',
      description: 'Emits true/false when state changes.',
      type: 'EventEmitter<boolean>',
      default_value: '—',
    },
    {
      property: 'change',
      description: 'General change event.',
      type: 'EventEmitter<any>',
      default_value: '—',
    },
  ];

  allactives(e: string | string[]) {
    this.activeItems = e;
  }
}
