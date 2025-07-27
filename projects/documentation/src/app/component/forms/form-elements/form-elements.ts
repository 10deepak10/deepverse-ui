import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CtaBtn, DemoLink } from '../shared/cta-btn/cta-btn';

@Component({
  selector: 'app-form-elements',
  imports: [CommonModule, CtaBtn],
  templateUrl: './form-elements.html',
  styleUrl: './form-elements.scss',
})
export class FormElements {
  elementControls: DemoLink[] = [
    {
      label: 'Radio Button',
      route: '/forms/elements/radio',
      icon: '🔘',
      description: 'Basic radio button component',
      status: 'ready',
    },
    {
      label: 'Checkbox',
      route: '/forms/elements/checkbox',
      icon: '☑️',
      description: 'A customizable checkbox',
      status: 'ready',
    },
    {
      label: 'Chips Input',
      route: '/forms/elements/chips-input',
      icon: '🔤',
      description: 'Chips input for tag-based entry',
      status: 'ready',
    },

    // Interactive controls
    {
      label: 'Time Picker',
      route: '/forms/elements/time-picker',
      icon: '⏰',
      description: 'Clock-style or dropdown time selection input',
      status: 'inlist',
    },
    {
      label: 'Rating',
      route: '/forms/elements/rating',
      icon: '⭐',
      description: 'Interactive star or emoji rating input',
      status: 'inlist',
    },
    {
      label: 'Range Slider',
      route: '/forms/elements/range-slider',
      icon: '🎚️',
      description: 'Slider input for selecting a numeric range',
      status: 'inlist',
    },
    {
      label: 'Masked Input',
      route: '/forms/elements/masked-input',
      icon: '🔒',
      description: 'Input fields with predefined format masks',
      status: 'planned',
    },
    {
      label: 'Phone Number Input',
      route: '/forms/elements/phone-input',
      icon: '📱',
      description: 'International phone input with validation',
      status: 'inlist',
    },
  ];
}
