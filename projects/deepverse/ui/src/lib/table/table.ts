import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TableItem } from './table-item/table-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-table',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})

export class Table implements AfterContentInit{

  @Input() rows: any[] = [];

  @ContentChildren(TableItem)
  columnDefs!: QueryList<TableItem>;

  columns: TableItem[] = [];

  ngAfterContentInit() {
    this.columns = this.columnDefs.toArray();
  }
}
