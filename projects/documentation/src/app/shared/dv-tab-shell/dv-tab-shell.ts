import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { TabsComponent, TabItemComponent, IconComponent } from '@deepverse/ui';

@Component({
  selector: 'dv-tab-shell',
  imports: [CommonModule, TabsComponent, TabItemComponent , IconComponent],
  templateUrl: './dv-tab-shell.html',
  styleUrl: './dv-tab-shell.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DvTabShell {
  @Input() exampleTpl!: TemplateRef<any>;
  @Input() codeTpl!: TemplateRef<any>;
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

  constructor(private host: ElementRef) {}
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
          label: 'Code',
          slug: 'code',
          templateRef: this.codeTpl
        }
      ];
  }
  copyCode(codeBlock: HTMLElement) {
    const codeEl = codeBlock.querySelector('pre code') as HTMLElement | null;
    if (codeEl) {
      const code = codeEl.innerText;
      navigator.clipboard.writeText(code).then(() => {
        console.log('✅ Code copied!');
      });
    }
  }
  
}
