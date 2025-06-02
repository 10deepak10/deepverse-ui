import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dv-tooltip',
  standalone:true,
  imports:[CommonModule],
  template: `
    <div  *ngIf="isStringOrNumberTooltip; else nonStringContent">
      {{ tooltipContent }}
    </div>
    <ng-template #nonStringContent>
      <ng-container *ngTemplateOutlet="tooltipContent ; context: tooltipContext"></ng-container>
    </ng-template>
  `,
  styleUrls: ['./tooltip.component.scss'],
  host: {
    '[class.no-tip]': 'noTip',
    '[class.tooltip-from-top]': 'tooltipPosition == "top"',
    '[class.tooltip-from-top-right]': 'tooltipPosition == "top-right"',
    '[class.tooltip-from-top-left]': 'tooltipPosition == "top-left"',
    '[class.tooltip-from-bottom]': 'tooltipPosition == "bottom"',
    '[class.tooltip-from-bottom-right]': 'tooltipPosition == "bottom-right"',
    '[class.tooltip-from-bottom-left]': 'tooltipPosition == "bottom-left"',
    '[class.tooltip-from-left]': 'tooltipPosition == "left"',
    '[class.tooltip-from-left-top]': 'tooltipPosition == "left-top"',
    '[class.tooltip-from-left-bottom]': 'tooltipPosition == "left-bottom"',
    '[class.tooltip-from-right]': 'tooltipPosition == "right"',
    '[class.tooltip-from-right-top]': 'tooltipPosition == "right-top"',
    '[class.tooltip-from-right-bottom]': 'tooltipPosition == "right-bottom"',
    'class': 'un-tooltip',
    '[style.--tootipColor]': "tooltipTextColor?.startsWith('#') ? tooltipTextColor : 'var(--' + tooltipTextColor + ')' ",
    '[style.--tooltipBg]': "tooltipBgColor?.startsWith('#') ? tooltipBgColor : 'var(--' + tooltipBgColor + ')' ",
    '[style.--tipOffset]': "tipOffset+'px'",
  },
})
export class TooltipComponent implements OnInit {
  @Input() tooltipContent: any;
  @Input() tooltipPosition:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'right-top'
    | 'right-bottom'
    | 'left-top'
    | 'left-bottom' = 'bottom';
  @Input() noTip: boolean = false;
  @Input() tooltipBgColor: string = '#1c1c1c';
  @Input() tooltipTextColor: string = '#fffff';
  @Input() tooltipContext: any;
  @Input() tipOffset: number = 0;
  @HostBinding('attr.tooltipId') tooltipID: any;
  public outsideClick!: boolean;
  
  get isStringOrNumberTooltip(): boolean {
    return typeof this.tooltipContent === 'string' || typeof this.tooltipContent === 'number';
  }
  
  constructor(private elementRef: ElementRef) {
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // Clicked outside the tooltip, emit the outsideClick event
      this.outsideClick = true;
    }
    else {
      this.outsideClick = false;
    }
  }

  ngOnInit(): void {
    const verticalPositions = ['left-bottom', 'left-top', 'right-top', 'right-bottom'];
    const horizontalPositions = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    
    if (verticalPositions.includes(this.tooltipPosition)) {
      if (this.tipOffset > this.elementRef.nativeElement.offsetHeight - 10) {
        this.tipOffset = this.elementRef.nativeElement.offsetHeight - 10;
      }
    } else if (horizontalPositions.includes(this.tooltipPosition)) {
      this.tipOffset = this.elementRef.nativeElement.offsetWidth - 10;
    }
  }
}
