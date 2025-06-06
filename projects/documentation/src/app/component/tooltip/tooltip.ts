import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { DvHeaderDirective, IconComponent, Table, TableItem, TooltipDirective ,DvCellDirective} from '@deepverse/ui';

@Component({
  selector: 'app-tooltip',
  imports: [TooltipDirective ,IconComponent , Table , TableItem , DvHeaderDirective , DvCellDirective],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tooltip {
  dynamic: WritableSignal<boolean> = signal(false)
  rows = [
    { name: 'Alice', age: 25, role: 'Developer' },
    { name: 'Bob', age: 30, role: 'Designer' },
    { name: 'Charlie', age: 28, role: 'Product Manager' }
  ];
  
  
  edit(user: any) {
    console.log('Edit user:', user);
  }
}
