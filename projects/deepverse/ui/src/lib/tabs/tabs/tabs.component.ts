import {
  ChangeDetectorRef,
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
  selector: 'dv-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit, AfterContentInit, OnChanges {
  @ContentChildren(TabItemComponent) tabs_list!: QueryList<TabItemComponent>;

  @Input() default: string = '';
  @Input({ required: true }) tabTemplate!: TemplateRef<any>;
  @Input() tabId: string = '';
  @Input() height: string = '70px';

  @Output() currentTabChange = new EventEmitter<TabItemComponent>();

  private static uniqueIdCounter = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (!this.tabId) {
      this.tabId = `un-tab-${++TabsComponent.uniqueIdCounter}`;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['default'] && !changes['default'].isFirstChange()) {
      this.activateDefaultTab();
    }
  }

  ngAfterContentInit(): void {
    this.activateDefaultTab();

    this.tabs_list.changes.subscribe(() => {
      queueMicrotask(() => {
        const current = this.tabs_list.find(tab => tab.active);

        if (current) {
          this.selectTab(current);
        } else if (this.default) {
          const defaultTab = this.tabs_list.find(tab =>
            (tab.slug || tab.label) === this.default
          );
          if (defaultTab) {
            this.selectTab(defaultTab);
          } else {
            this.selectTab(this.tabs_list.first);
          }
        } else {
          this.selectTab(this.tabs_list.first);
        }

        this.cdr.markForCheck();
      });
    });

  }

  selectTab(tab: TabItemComponent): void {
    if (!tab.disabled) {
      this.tabs_list.forEach(t => (t.active = false));
      tab.active = true;
      this.currentTabChange.emit(tab);
    }
  }

  private activateDefaultTab(): void {
    if (!this.tabs_list || this.tabs_list.length === 0) return;
    queueMicrotask(() => {
      const tab = this.tabs_list.find(
        tab => (tab.slug || tab.label) === this.default
      );
      if (tab) {
        this.selectTab(tab);
      } else {
        this.selectTab(this.tabs_list.first);
      }
    });
  }
}
