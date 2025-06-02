import {
  Injectable,
  ComponentRef,
  Renderer2,
  RendererFactory2,
  ViewContainerRef,
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';

export type ItooltipPosition =
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
  | 'left-bottom';

@Injectable({
  providedIn: 'root',
})
export class TooltipService {
  public tooltipComponentRef: ComponentRef<TooltipComponent> | null = null;
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  /**
   * Create and show the tooltip component.
   */
  createTooltip(
    viewContainerRef: ViewContainerRef,
    tooltipContent: string | any,
    tooltipContext: any,
    tooltipID: string,
    tooltipBgColor: string,
    tooltipTextColor: string,
    tipOffset: number,
    noTip: boolean
  ): HTMLElement {
    // Destroy any existing tooltip
    this.destroyTooltip();

    // Dynamically create TooltipComponent
    this.tooltipComponentRef =
      viewContainerRef.createComponent(TooltipComponent);

    // Pass inputs to the TooltipComponent instance
    const tooltipInstance = this.tooltipComponentRef.instance;
    tooltipInstance.tooltipContent = tooltipContent;
    tooltipInstance.tooltipContext = tooltipContext;
    tooltipInstance.tooltipID = tooltipID;
    tooltipInstance.tooltipBgColor = tooltipBgColor;
    tooltipInstance.tooltipTextColor = tooltipTextColor;
    tooltipInstance.tipOffset = tipOffset;
    tooltipInstance.noTip = noTip;

    // Return the tooltip's native DOM element for positioning
    const tooltipElement = this.tooltipComponentRef.location.nativeElement;
    document.body.appendChild(tooltipElement);

    return tooltipElement;
  }

  public positionTooltip(
    hostElement: HTMLElement,
    tooltipElement: HTMLElement,
    tooltipPosition:ItooltipPosition,
    tooltipOffset:number

  ) {
    const HostTooltip = hostElement.getBoundingClientRect();
    const tooltipWidth = tooltipElement.offsetWidth;
    const tooltipHeight = tooltipElement.offsetHeight;

    const gapToTop = HostTooltip.top - tooltipHeight;
    const gapToBottom = window.innerHeight - HostTooltip.bottom - tooltipHeight;
    const gapToLeft = HostTooltip.left - tooltipWidth;
    const gapToRight = window.innerWidth - HostTooltip.right - tooltipWidth;

    const fitsAbove = gapToTop >= 0;
    const fitsBottom = gapToBottom >= 0;
    const fitsLeft = gapToLeft - 10 >= 0;
    const fitsRight = gapToRight - 10 >= 0;

    // Adjust tooltipPosition based on space
    if (!fitsRight && !fitsLeft) {
      if (
        [
          'top-right',
          'top-left',
          'right-top',
          'left-top',
          'right',
          'left',
        ].includes(tooltipPosition)
      )
        tooltipPosition = 'top';
      if (
        ['bottom-left', 'left-bottom', 'right-bottom', 'bottom-right'].includes(
          tooltipPosition
        )
      )
        tooltipPosition = 'bottom';
    } else if (!fitsAbove && !fitsBottom) {
      tooltipPosition = 'left';
    }

    // Switch logic for all positions
    switch (tooltipPosition) {
      case 'top':
        if (gapToLeft + tooltipWidth / 2 <= 0) {
          this.setItooltipPosition(
            fitsAbove || gapToBottom < gapToTop,
            'top-left',
            'bottom-left',
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.left + tooltipOffset}px`,
            `${HostTooltip.bottom}px`,
            `${HostTooltip.left + tooltipOffset}px`
          );
        } else if (gapToRight + tooltipWidth / 2 <= 0) {
          this.setItooltipPosition(
            fitsAbove || gapToBottom < gapToTop,
            'top-right',
            'bottom-right',
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`,
            `${HostTooltip.bottom}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`
          );
        } else {
          this.setItooltipPosition(
            fitsAbove || gapToBottom < gapToTop,
            'top',
            'bottom',
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.left + HostTooltip.width / 2}px`,
            `${HostTooltip.bottom}px`,
            `${HostTooltip.left + HostTooltip.width / 2}px`
          );
        }
        break;
      case 'top-right':
        if (gapToLeft + 20 <= 0) {
          this.setItooltipPosition(
            fitsAbove || gapToBottom < gapToTop,
            'top-left',
            'bottom-left',
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.left + tooltipOffset}px`,
            `${HostTooltip.bottom}px`,
            `${HostTooltip.left + tooltipOffset}px`
          );
        } else {
          this.setItooltipPosition(
            fitsAbove || gapToBottom < gapToTop,
            'top-right',
            'bottom-right',
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`,
            `${HostTooltip.bottom}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`
          );
        }
        break;
      case 'top-left':
        if (gapToRight <= 0) {
          this.setItooltipPosition(
            fitsAbove || gapToBottom < gapToTop,
            'top-right',
            'bottom-right',
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`,
            `${HostTooltip.bottom}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`
          );
        } else {
          this.setItooltipPosition(
            fitsAbove || gapToBottom < gapToTop,
            'top-left',
            'bottom-left',
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.left + tooltipOffset}px`,
            `${HostTooltip.bottom}px`,
            `${HostTooltip.left + tooltipOffset}px`
          );
        }
        break;
      case 'bottom':
        if (gapToLeft + tooltipWidth / 2 <= 0) {
          this.setItooltipPosition(
            fitsBottom || gapToBottom > gapToTop,
            'bottom-left',
            'top-left',
            `${HostTooltip.bottom}px`,
            `${HostTooltip.left + tooltipOffset}px`,
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.left + tooltipOffset}px`
          );
        } else if (gapToRight + tooltipWidth / 2 <= 0) {
          this.setItooltipPosition(
            fitsBottom || gapToBottom > gapToTop,
            'bottom-right',
            'top-right',
            `${HostTooltip.bottom}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`,
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`
          );
        } else {
          this.setItooltipPosition(
            fitsBottom || gapToBottom > gapToTop,
            'bottom',
            'top',
            `${HostTooltip.bottom}px`,
            `${HostTooltip.left + HostTooltip.width / 2}px`,
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.left + HostTooltip.width / 2}px`
          );
        }
        break;
      case 'bottom-right':
        if (gapToLeft + 20 <= 0) {
          this.setItooltipPosition(
            fitsBottom || gapToBottom > gapToTop,
            'bottom-left',
            'top-left',
            `${HostTooltip.bottom}px`,
            `${HostTooltip.left + tooltipOffset}px`,
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.left + tooltipOffset}px`
          );
        } else {
          this.setItooltipPosition(
            fitsBottom || gapToBottom > gapToTop,
            'bottom-right',
            'top-right',
            `${HostTooltip.bottom}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`,
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`
          );
        }
        break;
      case 'bottom-left':
        if (gapToRight <= 0) {
          this.setItooltipPosition(
            fitsBottom || gapToBottom > gapToTop,
            'bottom-right',
            'top-right',
            `${HostTooltip.bottom}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`,
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.right - tooltipWidth - tooltipOffset}px`
          );
        } else {
          this.setItooltipPosition(
            fitsBottom || gapToBottom > gapToTop,
            'bottom-left',
            'top-left',
            `${HostTooltip.bottom}px`,
            `${HostTooltip.left + tooltipOffset}px`,
            `${HostTooltip.top - tooltipHeight}px`,
            `${HostTooltip.left + tooltipOffset}px`
          );
        }
        break;
      case 'left':
        this.setItooltipPosition(
          fitsLeft || gapToRight < gapToLeft,
          'left',
          'right',
          `${HostTooltip.top + HostTooltip.height / 2}px`,
          `${HostTooltip.left - tooltipWidth}px`,
          `${HostTooltip.top + HostTooltip.height / 2}px`,
          `${HostTooltip.right}px`
        );
        break;
      case 'left-top':
        if (gapToBottom + tooltipHeight / 2 - 10 <= 0) {
          this.setItooltipPosition(
            fitsLeft || gapToRight < gapToLeft,
            'left-bottom',
            'right-bottom',
            `${
              HostTooltip.top - (tooltipHeight / 2 - 20) - tooltipOffset
            }px`,
            `${HostTooltip.left - tooltipWidth}px`,
            `${
              HostTooltip.top - (tooltipHeight / 2 - 20) - tooltipOffset
            }px`,
            `${HostTooltip.right}px`
          );
        } else if (tooltipHeight < 35) {
          this.setItooltipPosition(
            fitsLeft || gapToRight < gapToLeft,
            'left',
            'right',
            `${HostTooltip.top + HostTooltip.height / 2}px`,
            `${HostTooltip.left - tooltipWidth}px`,
            `${HostTooltip.top + HostTooltip.height / 2}px`,
            `${HostTooltip.right}px`
          );
        } else {
          this.setItooltipPosition(
            fitsLeft || gapToRight < gapToLeft,
            'left-top',
            'right-top',
            `${HostTooltip.top + tooltipOffset}px`,
            `${HostTooltip.left - tooltipWidth}px`,
            `${HostTooltip.top + tooltipOffset}px`,
            `${HostTooltip.right}px`
          );
        }
        break;
      case 'left-bottom':
        if (gapToTop + 10 <= 0) {
          this.setItooltipPosition(
            fitsLeft || gapToRight < gapToLeft,
            'left-top',
            'right-top',
            `${HostTooltip.top + tooltipOffset}px`,
            `${HostTooltip.left - tooltipWidth}px`,
            `${HostTooltip.top + tooltipOffset}px`,
            `${HostTooltip.right}px`
          );
        } else if (tooltipHeight < 35) {
          this.setItooltipPosition(
            fitsLeft || gapToRight < gapToLeft,
            'left',
            'right',
            `${HostTooltip.top + HostTooltip.height / 2}px`,
            `${HostTooltip.left - tooltipWidth}px`,
            `${HostTooltip.top + HostTooltip.height / 2}px`,
            `${HostTooltip.right}px`
          );
        } else {
          this.setItooltipPosition(
            fitsLeft || gapToRight < gapToLeft,
            'left-bottom',
            'right-bottom',
            `${
              HostTooltip.top -
              tooltipHeight / 2 +
              HostTooltip.height -
              tooltipOffset
            }px`,
            `${HostTooltip.left - tooltipWidth}px`,
            `${
              HostTooltip.top -
              tooltipHeight / 2 +
              HostTooltip.height -
              tooltipOffset
            }px`,
            `${HostTooltip.right}px`
          );
        }
        break;
      case 'right':
        this.setItooltipPosition(
          fitsRight || gapToRight > gapToLeft,
          'right',
          'left',
          `${HostTooltip.top + HostTooltip.height / 2}px`,
          `${HostTooltip.right}px`,
          `${HostTooltip.top + HostTooltip.height / 2}px`,
          `${HostTooltip.left - tooltipWidth}px`
        );
        break;
      case 'right-top':
        if (gapToBottom - 10 <= 0) {
          this.setItooltipPosition(
            fitsRight || gapToRight > gapToLeft,
            'right-bottom',
            'left-bottom',
            `${HostTooltip.bottom - tooltipHeight - tooltipOffset}px`,
            `${HostTooltip.right}px`,
            `${
              HostTooltip.top -
              tooltipHeight / 2 +
              HostTooltip.height -
              tooltipOffset
            }px`,
            `${HostTooltip.left - tooltipWidth}px`
          );
        } else if (tooltipHeight < 35) {
          this.setItooltipPosition(
            fitsRight || gapToRight > gapToLeft,
            'right',
            'left',
            `${HostTooltip.top + HostTooltip.height / 2}px`,
            `${HostTooltip.right}px`,
            `${HostTooltip.top + HostTooltip.height / 2}px`,
            `${HostTooltip.left - tooltipWidth}px`
          );
        } else {
          this.setItooltipPosition(
            fitsRight || gapToRight > gapToLeft,
            'right-top',
            'left-top',
            `${HostTooltip.top + tooltipOffset}px`,
            `${HostTooltip.right}px`,
            `${HostTooltip.top + tooltipOffset}px`,
            `${HostTooltip.left - tooltipWidth}px`
          );
        }
        break;
      case 'right-bottom':
        if (gapToTop <= 0) {
          this.setItooltipPosition(
            fitsRight || gapToRight > gapToLeft,
            'right-top',
            'left-top',
            `${HostTooltip.top - tooltipOffset}px`,
            `${HostTooltip.right}px`,
            `${HostTooltip.top - tooltipOffset}px`,
            `${HostTooltip.left - tooltipWidth}px`
          );
        } else if (tooltipHeight < 35) {
          this.setItooltipPosition(
            fitsRight || gapToRight > gapToLeft,
            'right',
            'left',
            `${HostTooltip.top + HostTooltip.height / 2}px`,
            `${HostTooltip.right}px`,
            `${HostTooltip.top + HostTooltip.height / 2}px`,
            `${HostTooltip.left - tooltipWidth}px`
          );
        } else {
          this.setItooltipPosition(
            fitsRight || gapToRight > gapToLeft,
            'right-bottom',
            'left-bottom',
            `${HostTooltip.bottom - tooltipHeight / 2 - tooltipOffset}px`,
            `${HostTooltip.right}px`,
            `${
              HostTooltip.top -
              tooltipHeight / 2 +
              HostTooltip.height -
              tooltipOffset
            }px`,
            `${HostTooltip.left - tooltipWidth}px`
          );
        }
        break;
    }
  }

  private setItooltipPosition(
    fitsCondition: boolean,
    position1: ItooltipPosition,
    position2: ItooltipPosition,
    top1: string,
    left1: string,
    top2: string,
    left2: string
  ) {
    const tooltipElement = this.tooltipComponentRef;
    if (!tooltipElement) return;
    if (fitsCondition && tooltipElement) {
      tooltipElement.location.nativeElement.style.top = top1;
      tooltipElement.location.nativeElement.style.left = left1;
      tooltipElement.instance.tooltipPosition = position1;
    } else {
      tooltipElement.location.nativeElement.style.top = top2;
      tooltipElement.location.nativeElement.style.left = left2;
      tooltipElement.instance.tooltipPosition = position2;
    }
  }


  /**
   * Destroy the tooltip.
   */
  destroyTooltip() {
    if (this.tooltipComponentRef) {
      this.tooltipComponentRef.destroy();
      this.tooltipComponentRef = null;
    }
  }
}
