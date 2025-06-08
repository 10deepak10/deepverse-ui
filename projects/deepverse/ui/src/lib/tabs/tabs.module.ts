import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabItemComponent } from './tab-item/tab-item.component';

@NgModule({
  imports: [TabsComponent, TabItemComponent, CommonModule],
  exports: [TabsComponent, TabItemComponent],
})
export class TabsModule {}
