import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent, Table, TableItem, TabsModule } from '@deepverse/ui';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule , ProgressBarComponent ,TableItem , Table],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarDemoComponent {
  documentation: any[] = [
    {
      property: 'rounded',
      description: 'If true, applies rounded corners to the progress bar.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'border',
      description: 'If true, shows a border around the progress bar.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'showPercentage',
      description: 'If true, displays the percentage text inside or near the bar.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'barHeight',
      description: 'Height of the progress bar. Accepts any valid CSS unit (e.g., "2rem", "20px").',
      type: 'string',
      default_value: `'2rem'`,
    },
    {
      property: 'color',
      description: 'Color of the filled portion of the progress bar.',
      type: 'string',
      default_value: `'#123456'`,
    },
    {
      property: 'borderColor',
      description: 'Color of the progress bar border (if `border` is true).',
      type: 'string',
      default_value: `'#000000'`,
    },
    {
      property: 'borderWidth',
      description: 'Width of the border. Accepts CSS units (e.g., "1px", ".1rem").',
      type: 'string',
      default_value: `'.1rem'`,
    },
    {
      property: 'textColor',
      description: 'Color of the percentage text (if shown).',
      type: 'string',
      default_value: `'#ffffff'`,
    },
    {
      property: 'bgColor',
      description: 'Background color of the unfilled portion of the progress bar.',
      type: 'string',
      default_value: `'#cccccc'`,
    },
    {
      property: 'progress',
      description: 'Progress value as a percentage string (e.g., "75%").',
      type: 'string',
      default_value: `'60%'`,
    },
    {
      property: 'animate',
      description: 'If true, adds animation to the progress fill when the component is initialized.',
      type: 'boolean',
      default_value: 'false',
    }
  ];
  

}
