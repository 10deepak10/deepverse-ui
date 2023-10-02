import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavGroup } from '../utilites/interfaces';

@Component({
  selector: 'dv-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebarWidth = '12rem';
  @Input() navGroups: NavGroup[] = [];
  @Input() offset: string = ' 0rem';
  @Input() activeColor: string = ' #012345';
  @Input() bg: string = '#123456';
  @Input() text: string = '#fff';
  @Input() indicatorColor: string = '#aaffaa';
  Acolor: string = this.activeColor + '80';
  hover: string = this.activeColor + '30';
  toggleSidebarWidth() {
    this.sidebarWidth = this.sidebarWidth == '12rem' ? '3.5rem' : '12rem';
  }
  constructor(private route: Router) {}
}
