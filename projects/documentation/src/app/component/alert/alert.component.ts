import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent, Table, TableItem } from '@deepverse/ui';
import { DvTabShell } from '../../shared/dv-tab-shell/dv-tab-shell';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule,DvTabShell, AlertComponent , Table , TableItem],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertDemoComponent {
  documentation: any[] = [
    {
      property: 'type',
      description: 'Type of alert. Determines default icon and styling. Accepted values: "info", "success", "warning", "danger".',
      type: `'info' | 'danger' | 'success' | 'warning'`,
      default_value: `'info'`,
    },    
    {
      property: 'icon',
      description: 'Custom icon name/path. If not provided, it falls back to the default icon based on `type`.',
      type: 'string | undefined',
      default_value: `'info.svg' (based on type)'`,
    },
    {
      property: 'hideIcon',
      description: 'If true, hides the icon from the alert UI.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'closeIcon',
      description: 'If true, displays a close (dismiss) icon.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'borderRadius',
      description: 'Border radius for the alert box. Accepts numeric value (e.g., "8px", "0.5rem"). Automatically appends "px" if no unit provided.',
      type: 'string',
      default_value: `'8px'`,
    },
    {
      property: 'iconPrefix',
      description: 'Optional prefix path for loading the icon asset (e.g., "assets/icons/").',
      type: 'string',
      default_value: `''`,
    }
  ];
  
}
