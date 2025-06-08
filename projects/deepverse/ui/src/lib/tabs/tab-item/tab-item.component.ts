import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dv-tab-item',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent {
  @Input('active') active: boolean = false;
  @Input('label') tabLabel: string = '';
  @Input('slug') slug: string = '';
  @Input('iconLeft') iconLeft: string = '';
  @Input('iconRight') iconRight: string = '';
  @Input('iconHeight') iconHeight: number = 20;
  @Input('iconWidth') iconWidth: number = 20;
  @Input('disabled') disabled = false;
  @Input('iconPrefix') iconPrefix: any = '';
  public id!:string;
  private static uniqueIdCounter = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tabLabel'] && this.tabLabel) {
        this.id = this?.slug ? this.slug : this.generateSlug(this.tabLabel);
    }
  }

  private generateSlug(label: string): string {
    const safeLabel = label
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]/g, '')
      .toLowerCase();

    const uniqueId = ++TabItemComponent.uniqueIdCounter;

    return `un-tab-item-${safeLabel}-${uniqueId}`;
  }
}
