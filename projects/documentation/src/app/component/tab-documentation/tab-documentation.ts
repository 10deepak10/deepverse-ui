import { Component, signal } from '@angular/core';
import { TabsModule } from '@deepverse/ui';

@Component({
  selector: 'app-tab-documentation',
  imports: [TabsModule],
  templateUrl: './tab-documentation.html',
  styleUrl: './tab-documentation.scss'
})
export class TabDocumentation {
  currentTab: any;
  dynamic = signal(false)
  onTabChange(tab: any) {
    this.currentTab = tab;
  }
}
