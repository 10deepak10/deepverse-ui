import { Component } from '@angular/core';
import { IconComponent, Table, TableItem } from '@deepverse/ui';
import { DvTabShell } from '../../shared/dv-tab-shell/dv-tab-shell';

@Component({
  selector: 'app-icon-documentation',
  imports: [IconComponent ,DvTabShell, Table , TableItem],
  templateUrl: './icon-documentation.html',
  styleUrl: './icon-documentation.scss'
})
export class IconDocumentation {
  documentation: any[] = [
    {
      property: 'icon',
      description: 'The icon name or path (should be an SVG file). Required.',
      type: 'string',
      default_value: '—',
    },
    {
      property: 'iconPrefix',
      description: 'Optional prefix path to prepend to the icon (e.g., for a shared assets folder).',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'size',
      description: 'Size of the icon. Accepts a string like "24px" or a number in pixels.',
      type: 'string | number',
      default_value: `'24px'`,
    },
    {
      property: 'bgSize',
      description: 'Size of the icon background. If not provided, falls back to `size`.',
      type: 'string | number',
      default_value: `'size'`,
    },
    {
      property: 'color',
      description: 'Array of colors [default, hover, active]. Values can be hex or CSS variables.',
      type: 'string[]',
      default_value: 'undefined',
    },
    {
      property: 'bg',
      description: 'Array of background colors [default, hover, active].',
      type: 'string[]',
      default_value: `['transparent', 'transparent', 'transparent']`,
    },
    {
      property: 'borderColor',
      description: 'Border color for the icon wrapper.',
      type: 'string',
      default_value: `'transparent'`,
    },
    {
      property: 'rounded',
      description: 'Controls the border-radius. Can be "none", "sm", "md", or "full".',
      type: `'none' | 'sm' | 'md' | 'full'`,
      default_value: `'none'`,
    },
    {
      property: 'padding',
      description: 'An array of 1-4 numbers for CSS padding in px (top, right, bottom, left).',
      type: 'number[]',
      default_value: `[NaN]`,
    },
    {
      property: 'alt',
      description: 'Text alternative for accessibility or fallback. Defaults to icon filename.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'asBtn',
      description: 'If true, styles the icon like a button and adds cursor pointer.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'disabled',
      description: 'Disables interaction and adds a `disabled` CSS class.',
      type: 'boolean',
      default_value: 'false',
    }
  ];
  
}
