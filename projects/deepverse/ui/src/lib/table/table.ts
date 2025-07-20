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
  signal,
  WritableSignal,
  OnDestroy
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
export class Table implements AfterContentInit, AfterViewInit, OnDestroy {
  @Input() rows: any[] = [];

  @ContentChildren(TableItem) columnDefs!: QueryList<TableItem>;
  
  @ViewChildren('thRef') thRefs!: QueryList<ElementRef<HTMLTableCellElement>>;

  columns: TableItem[] = [];

  stickyLeftOffsets: WritableSignal<number[]> = signal([]);
  stickyRightOffsets: WritableSignal<number[]> = signal([]);

  colWidths: number[] = [];

  private columnDefsChangesSub?: Subscription;

  private resizingColIndex: number | null = null;
  private startX = 0;
  private startWidth = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.columns = this.columnDefs.toArray();

    this.columnDefsChangesSub = this.columnDefs.changes.subscribe(() => {
      this.columns = this.columnDefs.toArray();
      requestAnimationFrame(() => {
        this.setInitialColWidths();
        this.computeStickyOffsets();
      });
    });

    requestAnimationFrame(() => {
      this.setInitialColWidths();
      this.computeStickyOffsets();
    });
  }

  ngAfterViewInit() {
    this.thRefs.changes.subscribe(() => {
      requestAnimationFrame(() => {
        this.setInitialColWidths();
        this.computeStickyOffsets();
      });
    });

    requestAnimationFrame(() => {
      this.setInitialColWidths();
      this.computeStickyOffsets();
    });
  }

  setInitialColWidths() {
    this.colWidths = this.thRefs.map((th) =>
      th.nativeElement.getBoundingClientRect().width
    );
  }

  computeStickyOffsets() {
    const leftOffsets: number[] = [];
    const rightOffsets: number[] = [];

    // Left sticky
    let leftOffset = 0;
    for (let i = 0; i < this.columns.length; i++) {
      const col = this.columns[i];
      if (col.sticky === 'left') {
        leftOffsets[i] = leftOffset;
        leftOffset += this.colWidths[i] || 0;
      } else {
        leftOffsets[i] = 0;
      }
    }

    // Right sticky
    let rightOffset = 0;
    for (let i = this.columns.length - 1; i >= 0; i--) {
      const col = this.columns[i];
      if (col.sticky === 'right') {
        rightOffsets[i] = rightOffset;
        rightOffset += this.colWidths[i] || 0;
      } else {
        rightOffsets[i] = 0;
      }
    }

    this.stickyLeftOffsets.set(leftOffsets);
    this.stickyRightOffsets.set(rightOffsets);
    this.cdr.detectChanges();
  }

  onResizeStart(event: MouseEvent, index: number) {
    event.preventDefault();
    this.resizingColIndex = index;
    this.startX = event.clientX;
    this.startWidth = this.colWidths[index];

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent) => {
    if (this.resizingColIndex !== null) {
      const dx = event.clientX - this.startX;
      const newWidth = Math.max(this.startWidth + dx, 50); // minimum width
      this.colWidths[this.resizingColIndex] = newWidth;
      this.computeStickyOffsets();
      this.cdr.detectChanges();
    }
  };

  onMouseUp = () => {
    this.resizingColIndex = null;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  ngOnDestroy() {
    this.columnDefsChangesSub?.unsubscribe();
  }
}
