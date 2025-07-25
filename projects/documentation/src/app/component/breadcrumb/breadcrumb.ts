import { Component } from '@angular/core';
import { Table, TableItem } from '@deepverse/ui';
import { DvTabShell } from '../../shared/dv-tab-shell/dv-tab-shell';

@Component({
  selector: 'app-breadcrumb',
  imports: [DvTabShell,TableItem , Table],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss'
})
export class Breadcrumb {
  documentation: any[] = [
    {
      property: 'breadcrumbs',
      description: 'An array of breadcrumb objects built from the route tree. Each object includes a label and URL.',
      type: 'BreadcrumbI[]',
      default_value: '[]',
    }
  ];
  interfaceDocumentation: any[] = [
    {
      property: 'label',
      description: 'Text label to display for the breadcrumb item.',
      type: 'string',
      default_value: '—',
    },
    {
      property: 'url',
      description: 'The full URL path segment up to this breadcrumb.',
      type: 'string',
      default_value: '—',
    }
  ];
  

}
