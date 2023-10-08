import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '@deepverse/ui';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, AlertComponent],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertDemoComponent {

}
