import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { TooltipService , ItooltipPosition } from './tooltip.service';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[dvTooltip]',
  host: {
    '[style.cursor]': '"pointer"',
  },
})
export class TooltipDirective implements OnDestroy {
  @Input('dvTooltip') tooltipContent: string | any;
  @Input('tooltipContext') tooltipContext: any;
  @Input('tooltipPosition') tooltipPosition: ItooltipPosition = 'bottom';
  @Input('tooltipDelay') tooltipDelay: number = 0;
  @Input('tooltipOffset') tooltipOffset: number = 0;
  @Input('tipOffset') tipOffset: number = 0;
  @Input() tooltipBgColor: string = '#1c1c1c';
  @Input() tooltipTextColor: string = '#fffff';

  private isTooltipVisible = false;
  private tooltipNativeElement!: HTMLElement;
  private mouseEnterDebounce: any;
  private mouseLeaveDebounce: any;
  private mouseClickDebounce: any;
  private isHoveringTooltip: boolean = false;
  private cleanupObservers: (() => void) | null = null;

  isTouchDevice: boolean = false;

  private _noTip: boolean = false;
  private _tooltipOnClick: boolean = false;

  @Input()
  get noTip(): boolean {
    return this._noTip;
  }

  set noTip(value: BooleanInput) {
    this._noTip = coerceBooleanProperty(value);
  }

  @Input()
  get tooltipOnClick(): boolean {
    return this._tooltipOnClick;
  }

  set tooltipOnClick(value: BooleanInput) {
    this._tooltipOnClick = coerceBooleanProperty(value);
  }

  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private tooltipService: TooltipService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isTouchDevice =
    isPlatformBrowser(platformId) &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
    matchMedia('(pointer: coarse)').matches;
  }

  private intializeState() {
    this.isTooltipVisible = false;
    this.isHoveringTooltip = false;
  }
  @HostListener('click', ['$event'])
  onTooltipClick(event: Event) {
    if (!this.isTouchDevice) return;
    event.stopPropagation();
    clearTimeout(this.mouseClickDebounce);
    this.mouseClickDebounce = setTimeout(() => {
      if (this.tooltipContent) {
        if (this.isTooltipVisible) {
          this.tooltipService.destroyTooltip(); // Hide existing tooltip before showing a new one
          this.isTooltipVisible = false;
        } else {
          this.showTooltip();
        }
      }
    }, 150);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    // this.intializeState();
    if (this.isTouchDevice) return;
    clearTimeout(this.mouseLeaveDebounce); // Clear any pending hide
    this.mouseEnterDebounce = setTimeout(() => {
      if (this.tooltipContent && !this.isTooltipVisible) {
        this.showTooltip();
      }
    }, 150); // Add a 150ms delay
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    clearTimeout(this.mouseEnterDebounce); // Clear any pending show
    if (!this.isHoveringTooltip && !this.isTouchDevice) {
      this.mouseLeaveDebounce = setTimeout(() => {
        this.hideTooltip();
      }, 100); // Add a 100ms delay
    }
  }
  private handleOutsideClick = (event: Event) => {
    const target = event.target as HTMLElement;

    if (
      this.isTooltipVisible &&
      !this.elementRef.nativeElement.contains(target) && // Clicked outside host
      (!this.tooltipNativeElement ||
        !this.tooltipNativeElement.contains(target)) // Clicked outside tooltip
    ) {
      this.hideTooltip();
      document.removeEventListener('click', this.handleOutsideClick, true);
    }
  };

  private observeHostPosition() {
    if (!this.elementRef?.nativeElement) return;
    let prevRect = this.elementRef.nativeElement.getBoundingClientRect();

    // ResizeObserver - Detects layout shifts and resizes
    const resizeObserver = new ResizeObserver(() => {
      this.checkHostPosition(prevRect, resizeObserver);
    });
    resizeObserver.observe(this.elementRef.nativeElement);

    // Scroll listener - Detects movement due to scrolling
    const onScroll = () => {
      this.checkHostPosition(prevRect, resizeObserver);
    };
    window.addEventListener('scroll', onScroll, true);

    // Cleanup when tooltip is hidden
    this.cleanupObservers = () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', onScroll, true); // Properly remove scroll listener
    };
  }

  private checkHostPosition(prevRect: DOMRect, observer: ResizeObserver) {
    const newRect = this.elementRef.nativeElement.getBoundingClientRect();

    if (prevRect.top !== newRect.top || prevRect.left !== newRect.left) {
      this.hideTooltip();
      observer.disconnect();
    }

    prevRect = newRect;
  }

  private tooltipMouseEnterHandler = () => {
    this.isHoveringTooltip = true;
    clearTimeout(this.mouseLeaveDebounce);
  };

  private tooltipMouseLeaveHandler = () => {
    if (!this.isTouchDevice) {
      this.isHoveringTooltip = false;
      this.hideTooltip();
    }
  };
  /**
   * Show the tooltip and position it according to the logic provided.
   */
  private showTooltip() {
    const tooltipId = this.generateUniqueID();
    this.isTooltipVisible = true;
    // Create the tooltip component using TooltipService
    this.tooltipNativeElement = this.tooltipService.createTooltip(
      this.viewContainerRef,
      this.tooltipContent,
      this.tooltipContext,
      tooltipId,
      this.tooltipBgColor,
      this.tooltipTextColor,
      this.tipOffset,
      this._noTip
    );

    // Initially hide the tooltip
    this.tooltipNativeElement.style.opacity = '0';
    this.tooltipNativeElement.style.visibility = 'hidden';

    setTimeout(() => {
      this.tooltipNativeElement.style.position = 'fixed';
      this.tooltipNativeElement.style.zIndex = '2147483647';

      this.tooltipService.positionTooltip(
        this.elementRef.nativeElement,
        this.tooltipNativeElement,
        this.tooltipPosition,
        this.tooltipOffset
      );

      // Show the tooltip
      this.tooltipNativeElement.style.opacity = '1';
      this.tooltipNativeElement.style.visibility = 'visible';
      this.observeHostPosition();

      if (!this.isTouchDevice) {
        this.tooltipNativeElement.addEventListener(
          'mouseenter',
          this.tooltipMouseEnterHandler
        );
        this.tooltipNativeElement.addEventListener(
          'mouseleave',
          this.tooltipMouseLeaveHandler
        );
      }
      if (this.isTouchDevice) {
        document.addEventListener('click', this.handleOutsideClick, true);
      }
    }, this.tooltipDelay);
  }

  /**
   * Hide the tooltip using TooltipService.
   */
  private hideTooltip() {
    this.isTooltipVisible = false;
    this.isHoveringTooltip = false;
    clearTimeout(this.mouseClickDebounce);
    clearTimeout(this.mouseEnterDebounce);
    clearTimeout(this.mouseLeaveDebounce);
    if (this.cleanupObservers) {
      this.cleanupObservers();
      this.cleanupObservers = null;
    }
    if (this.tooltipNativeElement) {
      this.tooltipNativeElement.removeEventListener(
        'mouseenter',
        this.tooltipMouseEnterHandler
      );
      this.tooltipNativeElement.removeEventListener(
        'mouseleave',
        this.tooltipMouseLeaveHandler
      );
    }
    if (this.isTouchDevice) {
      console.log('kk');
      document.removeEventListener('click', this.handleOutsideClick, true);
    }

    this.tooltipService.destroyTooltip();
  }

  /**
   * Generate a unique ID for each tooltip.
   */
  private generateUniqueID(): string {
    const timestamp = new Date().getTime();
    return `tooltip-${timestamp}`;
  }

  ngOnDestroy(): void {
    this.hideTooltip();
  }
}
