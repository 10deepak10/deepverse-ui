import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { TabsComponent, TabItemComponent } from '@deepverse/ui';

@Component({
  selector: 'dv-tab-shell',
  imports: [CommonModule, TabsComponent, TabItemComponent],
  templateUrl: './dv-tab-shell.html',
  styleUrl: './dv-tab-shell.scss'
})
export class DvTabShell {
  @Input() exampleTpl!: TemplateRef<any>;
  @Input() documentationTpl!: TemplateRef<any>;
  @Input() playgroundTpl!: TemplateRef<any>;

  readonly defaultTab = 'example';
}
