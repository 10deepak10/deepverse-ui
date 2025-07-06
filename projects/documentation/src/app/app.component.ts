import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  LayoutComponent,
  AvatarComponent,
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
} from '@deepverse/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    LayoutComponent,
    RouterOutlet,
    AvatarComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'documentation';

  @ViewChild('userProfile', { static: true })
  userProfileTemplate!: TemplateRef<any>;

  config = {
    hoverEffect: 'default',
    menuItems: [
      {
        name: 'Dashboard',
        link: '/accordion',
        exact: true,
        icon: 'assets/accordion.svg',
        children: [
          {
            name: 'Admins',
            link: '/users/admins',
            icon: 'admin.svg',
            children: [
              {
                name: 'Admins',
                link: '/users/admins',
                icon: 'admin.svg',
                children: [
                  {
                    name: 'Admins',
                    link: '/users/admins',
                    icon: 'admin.svg',
                  },
                  {
                    name: 'Clients',
                    link: '/users/clients',
                    icon: 'clients.svg',
                  },
                ],
              },
              {
                name: 'Clients',
                link: '/users/clients',
                icon: 'clients.svg',
                children: [
                  {
                    name: 'Admins',
                    link: '/users/admins',
                    icon: 'admin.svg',
                  },
                  {
                    name: 'Clients',
                    link: '/users/clients',
                    icon: 'clients.svg',
                  },
                ],
              },
            ],
          },
          {
            name: 'Clients',
            link: '/users/clients',
            icon: 'clients.svg',
            children: [
              {
                name: 'Admins',
                link: '/users/admins',
                icon: 'admin.svg',
              },
              {
                name: 'Clients',
                link: '/users/clients',
                icon: 'clients.svg',
              },
            ],
          },
          {
            name: 'Admins',
            link: '/users/admins',
            icon: 'admin.svg',
            children: [
              {
                name: 'Admins',
                link: '/users/admins',
                icon: 'admin.svg',
                children: [
                  {
                    name: 'Admins',
                    link: '/users/admins',
                    icon: 'admin.svg',
                  },
                  {
                    name: 'Clients',
                    link: '/users/clients',
                    icon: 'clients.svg',
                  },
                ],
              },
              {
                name: 'Clients',
                link: '/users/clients',
                icon: 'clients.svg',
                children: [
                  {
                    name: 'Admins',
                    link: '/users/admins',
                    icon: 'admin.svg',
                  },
                  {
                    name: 'Clients',
                    link: '/users/clients',
                    icon: 'clients.svg',
                  },
                ],
              },
            ],
          },
          {
            name: 'Admins',
            link: '/users/admins',
            icon: 'admin.svg',
            children: [
              {
                name: 'Admins',
                link: '/users/admins',
                icon: 'admin.svg',
                children: [
                  {
                    name: 'Admins',
                    link: '/users/admins',
                    icon: 'admin.svg',
                  },
                  {
                    name: 'Clients',
                    link: '/users/clients',
                    icon: 'clients.svg',
                  },
                ],
              },
              {
                name: 'Clients',
                link: '/users/clients',
                icon: 'clients.svg',
                children: [
                  {
                    name: 'Admins',
                    link: '/users/admins',
                    icon: 'admin.svg',
                  },
                  {
                    name: 'Clients',
                    link: '/users/clients',
                    icon: 'clients.svg',
                  },
                ],
              },
            ],
          },
          {
            name: 'Admins',
            link: '/users/admins',
            icon: 'admin.svg',
            children: [
              {
                name: 'Admins',
                link: '/users/admins',
                icon: 'admin.svg',
                children: [
                  {
                    name: 'Admins',
                    link: '/users/admins',
                    icon: 'admin.svg',
                  },
                  {
                    name: 'Clients',
                    link: '/users/clients',
                    icon: 'clients.svg',
                  },
                ],
              },
              {
                name: 'Clients',
                link: '/users/clients',
                icon: 'clients.svg',
                children: [
                  {
                    name: 'Admins',
                    link: '/users/admins',
                    icon: 'admin.svg',
                  },
                  {
                    name: 'Clients',
                    link: '/users/clients',
                    icon: 'clients.svg',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'colors',
        link: '/button',
        exact: true,
        icon: 'assets/button.svg',
      },
      {
        name: 'colors',
        link: '/button',
        exact: true,
        icon: 'assets/button.svg',
      },
      {
        name: 'colors',
        link: '/button',
        exact: true,
        icon: 'assets/button.svg',
      },
      {
        name: 'colors',
        link: '/button',
        exact: true,
        icon: 'assets/button.svg',
      },
      {
        name: 'colors',
        link: '/button',
        exact: true,
        icon: 'assets/button.svg',
      },
      {
        name: 'colors',
        link: '/button',
        exact: true,
        icon: 'assets/button.svg',
      },
      {
        name: 'colors',
        link: '/button',
        exact: true,
        icon: 'assets/button.svg',
      },
      {
        name: 'colors',
        link: '/button',
        exact: true,
        icon: 'assets/button.svg',
      },
      {
        name: 'colors',
        link: '/button',
        exact: true,
        icon: 'assets/button.svg',
      },
    ],
    footerLinks: [
      { name: 'How it works?', customLink: 'help', icon: 'assets/avatar.svg' },
      { name: 'How it works?', customLink: 'help', icon: 'assets/avatar.svg' },
      { name: 'How it works?', customLink: 'help', icon: 'assets/avatar.svg' },
      { name: 'How it works?', customLink: 'help', icon: 'assets/avatar.svg' },
    ],
  };
  sidbarToggle(e: any) {
    console.log(e);
  }

  ngOnInit(): void {}

  navGroup = [
    {
      icon: 'assets/home.svg',
      title: 'home',
      link: '',
    },
    {
      icon: 'assets/accordion.svg',
      title: 'accordion',
      link: 'accordion',
    },
    {
      icon: 'assets/alert.svg',
      title: 'alert',
      link: 'alert',
    },
    {
      icon: 'assets/button.svg',
      title: 'button',
      link: 'button',
    },
    {
      icon: 'assets/avatar.svg',
      title: 'avatar',
      link: 'avatar',
    },
    {
      icon: 'assets/image-slider.svg',
      title: 'image slider',
      link: 'image-slider',
    },
    {
      icon: 'assets/progress-bar.svg',
      title: 'progress bar',
      link: 'progress-bar',
    },
    {
      icon: 'assets/progress-bar.svg',
      title: 'image picker',
      link: 'imagepicker',
    },
    {
      icon: 'assets/progress-bar.svg',
      title: 'tooltip',
      link: 'tooltip',
    },
  ];
}
