import { Injectable, effect, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';

export type ViewPort = 'mobile' | 'tablet' | 'desktop';

@Injectable({ providedIn: 'root' })
export class ViewportService {
  private breakpointObserver = inject(BreakpointObserver);

  // Define breakpoints
  private readonly breakpoints = {
    mobile: '(max-width: 599px)',
    tablet: '(min-width: 600px) and (max-width: 1023px)',
    desktop: '(min-width: 1024px)',
  };

  // Observe all breakpoints
  private breakpointState$ = this.breakpointObserver.observe(Object.values(this.breakpoints));

  // Convert observable to signal
  private breakpointState = toSignal(this.breakpointState$, {
    initialValue: { matches: false, breakpoints: {} }
  });

  // Public signal: mobile | tablet | desktop
  readonly viewPort = signal<ViewPort>(this.calculateViewPort());

  constructor() {
    effect(() => {
      this.viewPort.set(this.calculateViewPort());
    });
  }

  private calculateViewPort(): ViewPort {
    const state = this.breakpointState();
    const bps = state.breakpoints as { [key: string]: boolean }; // <- Type assertion here
  
    if (bps[this.breakpoints.mobile]) return 'mobile';
    if (bps[this.breakpoints.tablet]) return 'tablet';
    if (bps[this.breakpoints.desktop]) return 'desktop';
  
    return 'desktop'; // fallback
  }
  
}
