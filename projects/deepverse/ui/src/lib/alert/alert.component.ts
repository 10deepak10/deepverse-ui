import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() type: 'info' | 'danger' | 'success' | 'warning' = 'info';
  @Input() icon: string | undefined;
  @Input() hideIcon: boolean = false;
  @Input() closeIcon: boolean = false;
  @Input() borderRadius: string = '8px';
  @Input() iconPrefix: string = '';

  private readonly iconMap: Record<string, string> = {
    info: 'info.svg',
    danger: 'danger.svg',
    success: 'success.svg',
    warning: 'warning.svg'
  };

  constructor() { }

  ngOnInit(): void {
    this.setDefaultIcon();
    this.normalizeBorderRadius();
  }

  private setDefaultIcon(): void {
    if (!this.icon) {
      this.icon = this.iconMap[this.type] || this.iconMap['info'];
    }
  }

  private normalizeBorderRadius(): void {
    const unitPattern = /(px|%)$/;
    if (!unitPattern.test(this.borderRadius)) {
      this.borderRadius += 'px';
    }
  }
}