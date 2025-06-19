import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent, TabsModule } from '@deepverse/ui';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule , ProgressBarComponent ,TabsModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarDemoComponent {
  currentTab: any;
  dynamic = signal(false)
  onTabChange(tab: any) {
    this.currentTab = tab;
  }
}
