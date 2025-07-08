import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { IconComponent, TooltipDirective} from '@deepverse/ui';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  imports: [ CommonModule, TooltipDirective ,IconComponent],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tooltip {
 
}
