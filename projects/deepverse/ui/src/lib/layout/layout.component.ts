import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { NavGroup } from '../utilites/interfaces';

@Component({
  selector: 'dv-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [CommonModule, HeaderComponent, SidebarComponent, FooterComponent],
})
export class LayoutComponent {
  @Input() footerFixed: boolean = true;
  @Input() sideNav: NavGroup[] = [];
}
