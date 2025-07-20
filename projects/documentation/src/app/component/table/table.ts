import { Component, WritableSignal, signal } from '@angular/core';
import { DvHeaderDirective, IconComponent, Table, TableItem, TooltipDirective ,DvCellDirective} from '@deepverse/ui';
import dummyData from './dummy_employees.json';
@Component({
  selector: 'app-table',
  imports: [ Table , TableItem , DvHeaderDirective , DvCellDirective],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class TableDocumentation {

  tableDocumentation: any[] = [
    {
      property: 'rows',
      description: 'Array of data objects to render in the table rows. Each object maps to table columns via `key` in `dv-table-item`.',
      type: 'any[]',
      default_value: '[]',
    },
    {
      property: 'columnDefs',
      description: 'List of projected `dv-table-item` components defining column metadata and templates.',
      type: 'QueryList<TableItem>',
      default_value: '—',
    },
    {
      property: 'stickyLeftOffsets',
      description: 'Signal holding calculated left offsets for sticky columns.',
      type: 'WritableSignal<number[]>',
      default_value: '[]',
    },
    {
      property: 'stickyRightOffsets',
      description: 'Signal holding calculated right offsets for sticky columns.',
      type: 'WritableSignal<number[]>',
      default_value: '[]',
    },
    {
      property: 'colWidths',
      description: 'Internal array tracking the width of each table column (used for resizing).',
      type: 'number[]',
      default_value: '[]',
    }
  ];
  itemDocumentation: any[] = [
    {
      property: 'label',
      description: 'Header label text for the column.',
      type: 'string',
      default_value: '—',
    },
    {
      property: 'key',
      description: 'Key used to extract the corresponding value from each row object.',
      type: 'string',
      default_value: 'undefined',
    },
    {
      property: 'sticky',
      description: 'Makes the column sticky on scroll. Accepts "left" or "right".',
      type: `'left' | 'right' | undefined'`,
      default_value: 'undefined',
    },
    {
      property: 'cellTemplateRef',
      description: 'Custom template for table cells, provided via `DvCellDirective`.',
      type: 'DvCellDirective | undefined',
      default_value: 'undefined',
    },
    {
      property: 'headerTemplateRef',
      description: 'Custom template for table header, provided via `DvHeaderDirective`.',
      type: 'DvHeaderDirective | undefined',
      default_value: 'undefined',
    }
  ];
    
  dynamic: WritableSignal<boolean> = signal(false)
  rows = dummyData as any[];

  showAge = true;
  
  
  edit(user: any) {
    console.log('Edit user:', user);
  }
}
