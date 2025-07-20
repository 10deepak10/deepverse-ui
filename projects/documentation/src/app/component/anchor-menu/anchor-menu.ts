import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { AnchorMenu as anchor } from '@deepverse/ui';

@Component({
  selector: 'app-anchor-menu',
  imports: [anchor],
  templateUrl: './anchor-menu.html',
  styleUrl: './anchor-menu.scss'
})
export class AnchorMenu {

  readonly sections = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  activeId = signal('about');

  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef<HTMLElement>;


  onSelectedChange(id: string) {
    this.activeId.set(id);
  }

}
