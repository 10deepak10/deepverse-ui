import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';

interface AnchorItem {
  id: string;
  label: string;
}

@Component({
  selector: 'dv-anchor-menu',
  standalone: true,
  imports: [],
  templateUrl: './anchor-menu.html',
  styleUrl: './anchor-menu.scss'
})
export class AnchorMenu implements AfterViewInit, OnDestroy, OnChanges {

  @Input() items: AnchorItem[] = [];
  @Input() selected!: string;
  @Input() scrollRoot?: HTMLElement; // ✅ optional custom scroll container

  @Output() selectedChange = new EventEmitter<string>();

  private observer!: IntersectionObserver;
  private isProgrammaticScroll = false;

  ngAfterViewInit() {
    queueMicrotask(() => this.observeSections());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selected'] && this.selected) {
      this.scrollToSelected();
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  anchor(id: string) {
    this.isProgrammaticScroll = true;
    this.selectedChange.emit(id);
    setTimeout(() => this.isProgrammaticScroll = false, 500);
  }

  private observeSections() {
    if (!this.items?.length) return;

    this.observer = new IntersectionObserver(entries => {
      console.log(entries , 'deepak')
      const visible = entries.find(e => e.isIntersecting);
      if (visible && !this.isProgrammaticScroll) {
        this.selectedChange.emit(visible.target.id);
      }
    }, {
      root: this.scrollRoot ?? null, // ✅ critical for scroll containers
      threshold: 0.5,
      rootMargin: '0px 0px -60% 0px',
    });

    this.items.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) this.observer.observe(el);
    });
  }

  private scrollToSelected() {
    const el = document.getElementById(this.selected);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
