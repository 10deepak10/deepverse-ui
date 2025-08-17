import { Component } from '@angular/core';
import {
  IconComponent,
  Table,
  TableItem,
  TooltipDirective,
} from '@deepverse/ui';
import { CommonModule } from '@angular/common';
import { DvTabShell } from '../../shared/dv-tab-shell/dv-tab-shell';
import { PrismHighlightDirective } from '../../shared/directive/highlight';

@Component({
  selector: 'app-tooltip',
  imports: [
    CommonModule,
    DvTabShell,
    TooltipDirective,
    IconComponent,
    Table,
    TableItem,
    PrismHighlightDirective,
  ],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
})
export class Tooltip {
  documentation: any[] = [
    {
      property: 'dvTooltip',
      description: 'The content of the tooltip. Can be a string or a template.',
      type: 'string | any',
      default_value: '—',
    },
    {
      property: 'tooltipContext',
      description:
        'Context object used when tooltip content is a template. Available as `$implicit` in the template.',
      type: 'any',
      default_value: '—',
    },
    {
      property: 'tooltipPosition',
      description:
        'Position of the tooltip relative to the host element. Accepts "top", "bottom", "left", or "right".',
      type: 'ItooltipPosition',
      default_value: `'bottom'`,
    },
    {
      property: 'tooltipDelay',
      description: 'Delay in milliseconds before the tooltip is shown.',
      type: 'number',
      default_value: '0',
    },
    {
      property: 'tooltipOffset',
      description:
        'Pixel offset to shift the tooltip position from the host element.',
      type: 'number',
      default_value: '0',
    },
    {
      property: 'tipOffset',
      description: 'Offset applied to the arrow/tip of the tooltip.',
      type: 'number',
      default_value: '0',
    },
    {
      property: 'tooltipBgColor',
      description: 'Background color of the tooltip box.',
      type: 'string',
      default_value: `'#1c1c1c'`,
    },
    {
      property: 'tooltipTextColor',
      description: 'Text color used inside the tooltip.',
      type: 'string',
      default_value: `'#fffff'`,
    },
    {
      property: 'noTip',
      description: 'If true, disables the tooltip arrow (tip).',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'tooltipOnClick',
      description:
        'If true, shows tooltip on click instead of hover (primarily for mobile).',
      type: 'boolean',
      default_value: 'false',
    },
  ];
  tooltipBasicCode: string = `
<span [dvTooltip]="'Basic tooltip text'">
  <dv-icon [icon]="'assets/icons/info.svg'" [size]="24"></dv-icon>
</span>
`;

  tooltipPositionCode: string = `
<span [dvTooltip]="'Top tooltip'" tooltipPosition="top">...</span>
<span [dvTooltip]="'Right tooltip'" tooltipPosition="right">...</span>
<span [dvTooltip]="'Bottom tooltip'" tooltipPosition="bottom">...</span>
<span [dvTooltip]="'Left tooltip'" tooltipPosition="left">...</span>
`;

  tooltipDelayCode: string = `
<span [dvTooltip]="'Appears after 1s'" [tooltipDelay]="1000">
  <dv-icon [icon]="'assets/icons/timer.svg'" [size]="24"></dv-icon>
</span>
`;

  tooltipOffsetCode: string = `
<span [dvTooltip]="'Offset 15px'" [tooltipOffset]="15">
  <dv-icon [icon]="'assets/icons/move.svg'" [size]="24"></dv-icon>
</span>
`;

  tooltipColorCode: string = `
<span
  [dvTooltip]="'White background, black text'"
  [tooltipBgColor]="'#fff'"
  [tooltipTextColor]="'#000'"
>
  <dv-icon [icon]="'assets/icons/palette.svg'" [size]="24"></dv-icon>
</span>
`;

  tooltipClickCode: string = `
<span [dvTooltip]="'Opens on click'" tooltipOnClick>
  <dv-icon [icon]="'assets/icons/click.svg'" [size]="24"></dv-icon>
</span>
`;
}
