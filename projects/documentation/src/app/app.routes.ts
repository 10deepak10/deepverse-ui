import { Routes } from '@angular/router';
import { AccordionDemoComponent } from './component/accordion/accordion.component';
import { ButtonDemoComponent } from './component/button/button.component';
import { HomeComponent } from './component/home/home.component';
import { AvatarDemoComponent } from './component/avatar/avatar.component';
import { ImageSliderDemoComponent } from './component/image-slider/image-slider.component';
import { ProgressBarDemoComponent } from './component/progress-bar/progress-bar.component';
import { AlertDemoComponent } from './component/alert/alert.component';
import { ImagePickerComponent } from './component/image-picker/image-picker.component';
import { Tooltip } from './component/tooltip/tooltip';
import { TableDocumentation } from './component/table/table';
import { AnchorMenu } from './component/anchor-menu/anchor-menu';
import { Breadcrumb } from './component/breadcrumb/breadcrumb';
import { Icon } from './component/icon/icon';
import { TabDocumentation } from './component/tab-documentation/tab-documentation';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { breadcrumb: 'Home' },
  },
  {
    path: 'accordion',
    component: AccordionDemoComponent,
    data: { breadcrumb: 'accordion' }
  },
  {
    path: 'alert',
    component: AlertDemoComponent,
    data: { breadcrumb: 'alert' }
  },
  {
    path: 'button',
    component: ButtonDemoComponent,
    data: { breadcrumb: 'button' }
  },
  {
    path: 'avatar',
    component: AvatarDemoComponent,
    data: { breadcrumb: 'avatar' }
  },
  {
    path: 'image-slider',
    component: ImageSliderDemoComponent,
    data: { breadcrumb: 'image-slider' }
  },
  {
    path: 'progress-bar',
    component: ProgressBarDemoComponent,
    data: { breadcrumb: 'progress-bar' }
  },
  {
    path: 'imagepicker',
    component: ImagePickerComponent,
    data: { breadcrumb: 'imagepicker' }
  },
  {
    path: 'tooltip',
    component: Tooltip,
    data: { breadcrumb: 'tooltip' }
  },
  {
    path: 'tab',
    component: TabDocumentation,
    data: { breadcrumb: 'tab' }
  },
  {
    path: 'breadcrumb',
    component: Breadcrumb,
    data: { breadcrumb: 'breadcrumb' }
  },
  {
    path: 'table',
    component: TableDocumentation,
    data: { breadcrumb: 'table' }
  },
  {
    path: 'icon',
    component: Icon,
    data: { breadcrumb: 'icon' }
  },
  {
    path: 'anchor-menu',
    component: AnchorMenu,
    data: { breadcrumb: 'anchor-menu' }
  },
];
