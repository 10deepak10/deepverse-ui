import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent, TooltipComponent, TooltipDirective } from '@deepverse/ui';

@Component({
  selector: 'app-tooltip',
  imports: [TooltipDirective, TooltipComponent ,IconComponent],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tooltip {

}
