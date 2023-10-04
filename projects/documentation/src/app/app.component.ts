import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  ButtonComponent,
  AccordionComponent,
  AccordionItemComponent,
  LayoutComponent,
} from '@deepverse/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonComponent,
    AccordionComponent,
    AccordionItemComponent,
    LayoutComponent,
    RouterOutlet,
  ],
})
export class AppComponent {
  title = 'documentation';

  navGroup = [
    {
      icon :'assets/home.svg',
      title: 'home',
      link: '',
    },
    {
      icon :'assets/accordion.svg',
      title: 'accordion',
      link: 'accordion',
    },
    {
      icon :'assets/button.svg',
      title: 'button',
      link: 'button',
    },
    {
      icon :'assets/avatar.svg',
      title: 'avatar',
      link: 'avatar',
    },
    {
      icon :'assets/image-slider.svg',
      title: 'image slider',
      link: 'image-slider',
    },
    {
      icon :'assets/progress-bar.svg',
      title: 'progress bar',
      link: 'progress-bar',
    },
  ];
}
