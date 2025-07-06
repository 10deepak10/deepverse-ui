import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { DvHeaderDirective, IconComponent, Table, TableItem, TooltipDirective ,DvCellDirective} from '@deepverse/ui';
import dummyData from './dummy_employees.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  imports: [ CommonModule, TooltipDirective ,IconComponent , Table , TableItem , DvHeaderDirective , DvCellDirective],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tooltip {
  dynamic: WritableSignal<boolean> = signal(false)
  rows = dummyData as any[];

  showAge = true;
  
  
  edit(user: any) {
    console.log('Edit user:', user);
  }
}
