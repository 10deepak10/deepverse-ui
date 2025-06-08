import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TableItem } from './table-item/table-item';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dv-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.scss']
})
export class Table implements AfterContentInit {

  @Input() rows: any[] = [];

  @ContentChildren(TableItem)
  columnDefs!: QueryList<TableItem>;

  columns: TableItem[] = [];

  private columnDefsChangesSub?: Subscription;

  ngAfterContentInit() {
    // Initial assignment
    this.columns = this.columnDefs.toArray();

    // Subscribe for dynamic changes (e.g. via *ngIf, *ngFor)
    this.columnDefsChangesSub = this.columnDefs.changes.subscribe(() => {
      this.columns = this.columnDefs.toArray();
    });
  }

  ngOnDestroy() {
    // Clean up the subscription
    this.columnDefsChangesSub?.unsubscribe();
  }
}
