import { Component, OnInit, Output, EventEmitter, Input, ContentChildren, QueryList, AfterContentInit, SimpleChanges } from '@angular/core';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-tabs',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabItemComponent) tabs_list!: QueryList<TabItemComponent>;
  @Input() default: string = '';
  @Input() type: string = 'default';
  @Input() size: string = '';
  @Input() height: string = '70px';
  @Input() tabId: string = '';
  private static uniqueIdCounter = 0;
  @Output() currentTabChange = new EventEmitter<TabItemComponent>();

  constructor() {
   }

  ngOnInit(): void { 
    if (!this.tabId) {
      this.tabId = `un-tab-${++TabsComponent.uniqueIdCounter}`;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['default'] && !changes['default'].isFirstChange()) {
      this.activateDefaultTab();  // Re-activate tab when default changes dynamically
    }
  }

  ngAfterContentInit(): void {
    // Handle tab initialization after content is loaded
    this.activateDefaultTab();

    // Listen for changes in the list of tab items
    this.tabs_list.changes.subscribe(() => {
      this.activateDefaultTab();  // Recalculate default tab when new tabs are added
    });
  }

  selectTab(tab: TabItemComponent) {
    if (!tab.disabled) {
      this.tabs_list.forEach(t => t.active = false);  // Deactivate all tabs
      tab.active = true;  // Activate the selected tab

      let tabConfig: any = {
        status: tab.active,
        tabLabel: tab.tabLabel,
        slug: tab.tabLabel,  // Default slug as tabLabel
        disabled: tab.disabled
      };

      if (tab.slug) {
        tabConfig.slug = tab.slug;  // Override slug if it exists
      }

      this.currentTabChange.emit(tabConfig);  // Emit the tabConfig object
    }
  }

  private activateDefaultTab() {
    if (this.default) {
      const tabFound = this.tabs_list.find(tab => (tab.slug || tab.tabLabel) === this.default);
      if (tabFound) {
        this.selectTab(tabFound);
      }
    } else if (this.tabs_list.length > 0) {
      this.selectTab(this.tabs_list.first);  // Activate first tab by default
    }
  }
}

