import { Component, Input, OnInit, TemplateRef } from '@angular/core';
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
export class LayoutComponent{
  @Input() layoutType : 'full-header'| 'full-sidebar' =  'full-header' ;


  @Input() footerFixed: boolean = true;

}
