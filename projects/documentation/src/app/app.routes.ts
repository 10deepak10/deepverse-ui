import { Routes } from '@angular/router';
import { AccordionDemoComponent } from './component/accordion/accordion.component';
import { ButtonDemoComponent } from './component/button/button.component';
import { HomeComponent } from './component/home/home.component';
import { AvatarDemoComponent } from './component/avatar/avatar.component';
import { ImageSliderDemoComponent } from './component/image-slider/image-slider.component';

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
];
