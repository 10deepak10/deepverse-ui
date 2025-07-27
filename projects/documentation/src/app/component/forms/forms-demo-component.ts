import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CtaBtn, DemoLink } from "./shared/cta-btn/cta-btn";

@Component({
  selector: 'app-forms-demo-component',
  imports: [CommonModule , CtaBtn] ,
  templateUrl: './forms-demo-component.html',
  styleUrl: './forms-demo-component.scss'
})
export class FormsDemoComponent {
  elementLevelComponents: DemoLink[] = [
    { label: 'Radio Button', route: '/forms/elements/radio', icon: '🔘', description: 'Basic radio selection' , status: 'ready'},
    { label: 'Checkbox', route: '/forms/elements/checkbox', icon: '☑️', description: 'Standard checkbox', status: 'ready' },
    { label: 'Chips Input', route: '/forms/elements/chips-input', icon: '🔤', description: 'Input with token chips', status: 'ready' },
  ];

  moduleLevelComponents: DemoLink[] = [
    { label: 'OTP Input', route: '/forms/modules/otp-input', icon: '🔢', description: 'Multi-field code input' , status: 'ready'},
    { label: 'File Upload', route: '/forms/modules/upload-box', icon: '📁', description: 'Drag & drop uploader', status: 'ready' },
  ];
}