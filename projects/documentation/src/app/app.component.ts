import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  LayoutComponent,
  AvatarComponent,
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  Breadcrumb,
  IconComponent
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
    IconComponent,
    Breadcrumb
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
        name: 'Home',
        link: '/',
        exact: true,
        icon: 'assets/icons/home.svg',
      },
      {
        name: 'accordion',
        link: '/accordion',
        exact: true,
        tag:'done',
        icon: 'assets/icons/accordion.svg',
      },
      {
        name: 'Alert',
        link: '/alert',
        exact: false,
        icon: 'assets/icons/alert.svg',
        children: [
          {
            name: 'Toaster',
            link: 'alert/toast-alert',
            exact: true,
            icon: 'assets/icons/anchor-menu.svg',
          },
          {
            name: 'cta-box',
            link: 'alert/cta-box',
            exact: true,
            icon: 'assets/icons/anchor-menu.svg',
          },
        ]
      },
      {
        name: 'Anchor Menu',
        link: '/anchor-menu',
        exact: true,
        icon: 'assets/icons/anchor-menu.svg',
      },
      {
        name: 'Avatar',
        link: '/avatar',
        exact: true,
        tag:'done',
        icon: 'assets/icons/avatar.svg',
      },
      {
        name: 'Breadcrumb',
        link: '/breadcrumb',
        exact: true,
        icon: 'assets/icons/breadcrumb.svg',
      },
      {
        name: 'Button',
        link: '/button',
        exact: true,
        icon: 'assets/icons/button.svg',
      },
      {
        name: 'Forms',
        link: '/forms',
        exact: false,
        icon: 'assets/icons/star.svg',
        children: [
          {
            name: 'Elements',
            link: '/forms/elements',
            exact: false,
            icon: 'assets/icons/star.svg',
            children: [
              {
                name: 'Checkbox',
                link: '/forms/elements/checkbox',
                exact: true,
                tag:'done',
                icon: 'assets/icons/star.svg',
              },
              {
                name: 'Chips Input',
                link: '/forms/elements/chips-input',
                exact: true,
                tag:'done',
                icon: 'assets/icons/star.svg',
              },
              // {
              //   name: 'Date picker',
              //   link: '/forms/date-picker',
              //   exact: true,
              //   icon: 'assets/icons/star.svg',
              // },
              // {
              //   name: 'Phone Input',
              //   link: '/forms/phone-input',
              //   exact: true,
              //   icon: 'assets/icons/star.svg',
              // },
              {
                name: 'Radio',
                link: '/forms/elements/radio',
                exact: true,
                tag:'done',
                icon: 'assets/icons/star.svg',
              },
              // {
              //   name: 'Select',
              //   link: '/forms/select',
              //   exact: true,
              //   icon: 'assets/icons/star.svg',
              // },
              {
                name: 'Slider',
                link: '/forms/slider',
                exact: true,
                icon: 'assets/icons/star.svg',
              },
            ]
          },
          {
            name: 'Modules',
            link: '/forms/modules',
            exact: false,
            icon: 'assets/icons/star.svg',
            children: [
              // {
              //   name: 'Country Select',
              //   link: '/forms/country-select',
              //   exact: true,
              //   icon: 'assets/icons/star.svg',
              // },
              {
                name: 'Upload Box',
                link: '/forms/modules/upload-box',
                exact: true,
                tag:'done',
                icon: 'assets/icons/star.svg',
              },
              // {
              //   name: 'Location Picker',
              //   link: '/forms/location-picker',
              //   exact: true,
              //   icon: 'assets/icons/star.svg',
              // },
              {
                name: 'Otp Input',
                link: '/forms/modules/otp-input',
                exact: true,
                icon: 'assets/icons/star.svg',
              },
              // {
              //   name: 'Rating',
              //   link: '/forms/rating',
              //   exact: true,
              //   icon: 'assets/icons/star.svg',
              // },
              // {
              //   name: 'Rich Text Editor',
              //   link: '/forms/rich-text-editor',
              //   exact: true,
              //   icon: 'assets/icons/star.svg',
              // },
              {
                name: 'Stepper Form',
                link: '/forms/stepper-form',
                exact: true,
                icon: 'assets/icons/star.svg',
              },
            ]
          },
        ]
      },
      {
        name: 'Icon',
        link: '/icon',
        exact: true,
        tag:'done',
        icon: 'assets/icons/star.svg',
      },
      {
        name: 'Image Picker',
        link: '/imagepicker',
        exact: true,
        icon: 'assets/icons/color-picker.svg',
      },
      {
        name: 'Progress Bar',
        link: '/progress-bar',
        exact: true,
        icon: 'assets/icons/bars-progress.svg',
      },
      {
        name: 'Image Slider',
        link: '/image-slider',
        exact: true,
        icon: 'assets/icons/slider.svg',
      },
      {
        name: 'Table',
        link: '/table',
        exact: true,
        tag:'done',
        icon: 'assets/icons/table.svg',
      },
      {
        name: 'tab',
        link: '/tab',
        exact: true,
        tag:'done',
        icon: 'assets/icons/tab.svg',
      },
      {
        name: 'Tooltip',
        link: '/tooltip',
        exact: true,
        tag:'done',
        icon: 'assets/icons/tooltip.svg',
      },
    ],
    // footerLinks: [
    //   { name: 'How it works?', customLink: 'help', icon: 'assets/avatar.svg' },
    // ],
  };
  sidbarToggle(e: any) {
    console.log(e);
  }

  ngOnInit(): void {
    document.addEventListener('fullscreenchange', () => {
      const isFullscreen = !!document.fullscreenElement;
      console.log('Fullscreen state:', isFullscreen);
    });
  }

  readingMode = false;
  isFullscreen = false;

  refreshPage(): void {
    location.reload(); // Simple and clean refresh
  }

  toggleReadingMode(): void {
    this.readingMode = !this.readingMode;
    document.body.classList.toggle('reading-mode', this.readingMode);
  }

  toggleFullScreen(): void {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().then(() => {
        this.isFullscreen = true;
      });
    } else {
      document.exitFullscreen().then(() => {
        this.isFullscreen = false;
      });
    }
  }

}
