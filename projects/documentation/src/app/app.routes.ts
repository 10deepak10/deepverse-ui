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
import { TabDocumentation } from './component/tab-documentation/tab-documentation';
import { IconDocumentation } from './component/icon-documentation/icon-documentation';
import { ToastAlert } from './component/alert/toast-alert/toast-alert';
import { CtaBox } from './component/alert/cta-box/cta-box';
import { FormsDemoComponent } from './component/forms/forms-demo-component';
import { RadioDocumentation } from './component/forms/radio-documentation/radio-documentation';
import { CheckboxDocumenration } from './component/forms/checkbox-documenration/checkbox-documenration';
import { ChipInputDocumentation } from './component/chip-input-documentation/chip-input-documentation';
import { OtpInputDocumentation } from './component/otp-input-documentation/otp-input-documentation';
import { FileUploadDocunentation } from './component/file-upload-docunentation/file-upload-docunentation';

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
    children:[
      {
        path: 'toast-alert',
        component: ToastAlert,
        data: { breadcrumb: 'Toast Alert' }
      },
    {
        path: 'cta-box',
        component: CtaBox,
        data: { breadcrumb: 'CTA Box' }
      },
    ],
    data: { breadcrumb: 'alert' }
  },
  {
    path: 'button',
    component: ButtonDemoComponent,
    data: { breadcrumb: 'button' }
  },
  {
    path: 'forms',
    component: FormsDemoComponent,
    children:[
      {
        path: 'elements/radio',
        component: RadioDocumentation,
        data: { breadcrumb: 'Radio' }
      },
      {
        path: 'elements/checkbox',
        component: CheckboxDocumenration,
        data: { breadcrumb: 'Checkbox' }
      },
      {
        path: 'elements/chips-input',
        component: ChipInputDocumentation,
        data: { breadcrumb: 'Chip Input' }
      },
      {
        path: 'modules/otp-input',
        component: OtpInputDocumentation,
        data: { breadcrumb: 'OTP Input' }
      },
      {
        path: 'modules/upload-box',
        component: FileUploadDocunentation,
        data: { breadcrumb: 'Upload Box' }
      },
    ],
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
    component: IconDocumentation,
    data: { breadcrumb: 'icon' }
  },
  {
    path: 'anchor-menu',
    component: AnchorMenu,
    data: { breadcrumb: 'anchor-menu' }
  },
];
