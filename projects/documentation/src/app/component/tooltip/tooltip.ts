import { Component } from '@angular/core';
import { TooltipComponent, TooltipDirective } from '@deepverse/ui';

@Component({
  selector: 'app-tooltip',
  imports: [TooltipDirective, TooltipComponent],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss'
})
export class Tooltip {

}
