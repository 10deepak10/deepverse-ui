import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CtaBtn, DemoLink } from '../shared/cta-btn/cta-btn';


@Component({
  selector: 'app-forms-module',
  imports: [ CommonModule, CtaBtn],
  templateUrl: './forms-module.html',
  styleUrl: './forms-module.scss'
})
export class FormsModule {
  moduleComponents : DemoLink[] = [
    {
      label: 'File Upload',
      route: '/forms/modules/upload-box',
      icon: '📤',
      description: 'Drag and drop file upload module',
      status: 'ready'
    },
    {
      label: 'Stepper',
      route: '/forms/modules/stepper',
      icon: '🪜',
      description: 'Multi-step form navigation component',
      status: 'planned'
    },
    {
      label: 'Date Range Picker',
      route: '/forms/modules/date-range',
      icon: '📅',
      description: 'Select start and end dates in a form',
      status: 'planned'
    },
    {
      label: 'Form Wizard',
      route: '/forms/modules/wizard',
      icon: '🧙‍♂️',
      description: 'Guided form experience with progress control',
      status: 'inlist'
    },
    {
      label: 'Dynamic Form Generator',
      route: '/forms/modules/dynamic-form',
      icon: '⚙️',
      description: 'Render forms based on JSON schema or config',
      status: 'inlist'
    },
    {
      label: 'Signature Pad',
      route: '/forms/modules/signature-pad',
      icon: '✍️',
      description: 'Capture user signatures digitally',
      status: 'inlist'
    },
    {
      label: 'Repeater / Form Array UI',
      route: '/forms/modules/repeater',
      icon: '🔁',
      description: 'Repeatable form sections with add/remove support',
      status: 'inlist'
    },
    {
      label: 'Address Autocomplete',
      route: '/forms/modules/address-autocomplete',
      icon: '📍',
      description: 'Google-style location search and autofill',
      status: 'inlist'
    }
  ];
}