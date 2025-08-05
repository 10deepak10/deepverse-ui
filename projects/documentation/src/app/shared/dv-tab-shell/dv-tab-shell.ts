import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { TabsComponent, TabItemComponent } from '@deepverse/ui';

@Component({
  selector: 'dv-tab-shell',
  imports: [CommonModule, TabsComponent, TabItemComponent],
  templateUrl: './dv-tab-shell.html',
  styleUrl: './dv-tab-shell.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DvTabShell {
  @Input() exampleTpl!: TemplateRef<any>;
  @Input() documentationTpl!: TemplateRef<any>;
  @Input() playgroundTpl!: TemplateRef<any>;
  @Input() uiType: 'glass' | 'header' = 'glass';
  @Input() tabItems: {
    label: string;
    slug: string;
    templateRef: TemplateRef<any>;
  }[] = [];

  readonly defaultTab = 'example';
  tabsToRender: {
    label: string;
    slug: string;
    templateRef: TemplateRef<any>;
  }[] = [];

  ngOnInit() {
    this.tabsToRender = this.tabItems?.length
      ? this.tabItems
      : [
        {
          label: 'Example',
          slug: 'example',
          templateRef: this.exampleTpl
        },
        {
          label: 'Documentation',
          slug: 'documentation',
          templateRef: this.documentationTpl
        }
      ];
  }

}
