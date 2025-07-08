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
  dynamic: WritableSignal<boolean> = signal(false)
  rows = dummyData as any[];

  showAge = true;
  
  
  edit(user: any) {
    console.log('Edit user:', user);
  }
}
