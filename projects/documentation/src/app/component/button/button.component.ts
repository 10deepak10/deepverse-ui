import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@deepverse/ui';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonDemoComponent {
  handleButtonClick() {
    console.log('red');
  }
}
