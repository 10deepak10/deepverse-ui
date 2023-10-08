import { Routes } from '@angular/router';
import { AccordionDemoComponent } from './component/accordion/accordion.component';
import { ButtonDemoComponent } from './component/button/button.component';
import { HomeComponent } from './component/home/home.component';
import { AvatarDemoComponent } from './component/avatar/avatar.component';
import { ImageSliderDemoComponent } from './component/image-slider/image-slider.component';
import { ProgressBarDemoComponent } from './component/progress-bar/progress-bar.component';
import { AlertDemoComponent } from './component/alert/alert.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'accordion',
    component: AccordionDemoComponent,
  },
  {
    path: 'alert',
    component: AlertDemoComponent,
  },
  {
    path: 'button',
    component: ButtonDemoComponent,
  },
  {
    path: 'avatar',
    component: AvatarDemoComponent,
  },
  {
    path: 'image-slider',
    component: ImageSliderDemoComponent,
  },
  {
    path: 'progress-bar',
    component: ProgressBarDemoComponent,
  },
];
