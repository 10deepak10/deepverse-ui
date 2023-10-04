import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '@deepverse/ui';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule , ProgressBarComponent],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarDemoComponent {

}
