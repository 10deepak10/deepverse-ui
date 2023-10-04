import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() rounded: boolean = false;
  @Input() border: boolean = false;
  @Input() showPercentage: boolean = false;
  @Input() barHeight: string = '2rem';
  @Input() color: string = '#123456';
  @Input() borderColor: string = '#000000';
  @Input() borderWidth: string = '.1rem';
  @Input() textColor: string = '#ffffff';
  @Input() bgColor: string = '#cccccc';
  @Input() progress: string = '60%';
  @Input() animate: boolean = false;
  constructor() {}
}
