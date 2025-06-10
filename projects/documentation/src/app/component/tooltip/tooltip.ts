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
    {
      name: 'Alice Johnson',
      age: 30,
      role: 'Engineer',
      email: 'alice@example.com',
      dept: 'R&D',
      location: 'NY',
      startDate: '2020-01-15',
      salary: 85000,
      status: 'Active',
      phone: '123-456-7890',
      extension: 301,
      manager: 'Bob Smith',
      team: 'Backend',
      bonus: 5000,
      project: 'Apollo',
      shift: 'Morning',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      rating: 4.7,
    },
    {
      name: 'Bob Smith',
      age: 45,
      role: 'Manager',
      email: 'bob@example.com',
      dept: 'Sales',
      location: 'LA',
      startDate: '2015-05-23',
      salary: 105000,
      status: 'Active',
      phone: '234-567-8901',
      extension: 205,
      manager: '—',
      team: 'Sales',
      bonus: 8000,
      project: 'Zeus',
      shift: 'Evening',
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      rating: 4.9,
    },
  ];

  showAge = true;
  
  
  edit(user: any) {
    console.log('Edit user:', user);
  }
}
