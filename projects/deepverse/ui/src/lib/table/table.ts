import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  QueryList,
  ViewChildren,
  WritableSignal,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TableItem } from './table-item/table-item';

@Component({
  selector: 'dv-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.scss']
})
export class Table implements AfterContentInit, AfterViewInit {
  @Input() rows: any[] = [];

  @ContentChildren(TableItem) columnDefs!: QueryList<TableItem>;
  @ViewChildren('thRef') thRefs!: QueryList<ElementRef<HTMLTableCellElement>>;

  columns: TableItem[] = [];

  stickyLeftOffsets: WritableSignal<number[]> = signal([]);
  stickyRightOffsets: WritableSignal<number[]> = signal([]);

  private columnDefsChangesSub?: Subscription;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.columns = this.columnDefs.toArray();

    this.columnDefsChangesSub = this.columnDefs.changes.subscribe(() => {
      this.columns = this.columnDefs.toArray();
      requestAnimationFrame(() => this.computeStickyOffsets());
    });

    requestAnimationFrame(() => this.computeStickyOffsets());
  }

  ngAfterViewInit() {
    this.thRefs.changes.subscribe(() => {
      requestAnimationFrame(() => this.computeStickyOffsets());
    });

    requestAnimationFrame(() => this.computeStickyOffsets());
  }

  computeStickyOffsets() {
    const leftOffsets: number[] = [];
    const rightOffsets: number[] = [];
  
    // Calculate left sticky offsets
    let leftOffset = 0;
    for (let i = 0; i < this.columns.length; i++) {
      const col = this.columns[i];
      if (col.sticky === 'left') {
        const th = this.thRefs.get(i)?.nativeElement;
        const width = th?.getBoundingClientRect().width || 0;
        leftOffsets[i] = leftOffset;
        leftOffset += width;
      } else {
        leftOffsets[i] = 0;
      }
    }
  
    // Calculate right sticky offsets
    let rightOffset = 0;
    for (let i = this.columns.length - 1; i >= 0; i--) {
      const col = this.columns[i];
      if (col.sticky === 'right') {
        const th = this.thRefs.get(i)?.nativeElement;
        const width = th?.getBoundingClientRect().width || 0;
        rightOffsets[i] = rightOffset;
        rightOffset += width;
      } else {
        rightOffsets[i] = 0;
      }
    }
  
    this.stickyLeftOffsets.set(leftOffsets);
    this.stickyRightOffsets.set(rightOffsets);
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.columnDefsChangesSub?.unsubscribe();
  }
}
