import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Table, TableItem, TabsModule } from '@deepverse/ui';
import { DvTabShell } from '../../shared/dv-tab-shell/dv-tab-shell';

@Component({
  selector: 'app-tab-documentation',
  imports: [CommonModule,DvTabShell, TabsModule ,TableItem , Table],
  templateUrl: './tab-documentation.html',
  styleUrl: './tab-documentation.scss'
})
export class TabDocumentation {
  TabDocumentation: any[] = [
    {
      property: 'default',
      description: 'Specifies the default tab to be selected. Matches either the slug or the label.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'type',
      description: 'Style or variation of the tabs. Can be used for custom themes.',
      type: 'string',
      default_value: `'default'`,
    },
    {
      property: 'size',
      description: 'Size of the tabs (e.g., "sm", "md", "lg"). Can affect padding and font size.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'height',
      description: 'Height of the tab container.',
      type: 'string',
      default_value: `'70px'`,
    },
    {
      property: 'tabId',
      description: 'Optional identifier for the tab group. A unique ID is generated if not provided.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'currentTabChange',
      description: 'Event emitted when a tab is selected. Emits an object containing label, slug, status, and disabled.',
      type: 'EventEmitter<TabItemComponent>',
      default_value: '—',
    }
  ];

  itemDocumentation: any[] = [
    {
      property: 'active',
      description: 'Controls whether the tab is currently active.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'label',
      description: 'Label text to display for the tab.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'slug',
      description: 'Custom identifier for the tab. If not provided, it is auto-generated from the label.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'iconLeft',
      description: 'Icon name to be displayed on the left side of the tab.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'iconRight',
      description: 'Icon name to be displayed on the right side of the tab.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'iconHeight',
      description: 'Height of the icons used inside the tab.',
      type: 'number',
      default_value: '20',
    },
    {
      property: 'iconWidth',
      description: 'Width of the icons used inside the tab.',
      type: 'number',
      default_value: '20',
    },
    {
      property: 'disabled',
      description: 'Prevents the tab from being selected if set to true.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'iconPrefix',
      description: 'Optional prefix for icon font libraries or sprite systems.',
      type: 'any',
      default_value: `''`,
    }
  ];
  
  
  currentTab: any;
  dynamic = signal(false)
  onTabChange(tab: any) {
    this.currentTab = tab;
  }
}
