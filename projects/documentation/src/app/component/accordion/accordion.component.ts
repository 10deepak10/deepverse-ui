import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent, AccordionItemComponent, Table, TableItem } from '@deepverse/ui';
import { DvTabShell } from '../../shared/dv-tab-shell/dv-tab-shell';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, DvTabShell, AccordionItemComponent , AccordionComponent , Table, TableItem],
  templateUrl: './accordion.component.html'
})
export class AccordionDemoComponent {

  accordionProps: any[] = [
    {
      property: 'group',
      description: 'A string identifier for the accordion group. Used for generating fallback item IDs.',
      type: 'string',
      default_value: `'group'`,
    },
    {
      property: 'multipleOpen',
      description: 'Allows multiple accordion items to be opened at the same time if set to true.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'defaultOpen',
      description: 'If true, items with `defaultOpen` set to true will be opened by default.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'flush',
      description: 'Optional styling flag to render accordion without borders or spacing.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'activeAccordion',
      description: 'Event emitted when an accordion item is opened or closed. Emits item ID(s).',
      type: 'EventEmitter<string | string[]>',
      default_value: '—',
    }
  ];
  accordionItemProps: any[] = [
    {
      property: 'id',
      description: 'Optional identifier for the accordion item. If not provided, a unique fallback ID is generated.',
      type: 'string',
      default_value: 'undefined (auto-generated)',
    },
    {
      property: 'title',
      description: 'Title to be displayed on the accordion item header.',
      type: 'string',
      default_value: `'accord'`,
    },
    {
      property: 'defaultOpen',
      description: 'If true, this accordion item will be opened by default on init.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'state',
      description: 'Event emitted when the open/closed state of the item changes. Emits a boolean.',
      type: 'EventEmitter<boolean>',
      default_value: '—',
    },
    {
      property: 'change',
      description: 'Custom output that can be used for additional change tracking.',
      type: 'EventEmitter<any>',
      default_value: '—',
    }
  ];
  


  allactives(e:any){
    console.log(e);
  }
 }
