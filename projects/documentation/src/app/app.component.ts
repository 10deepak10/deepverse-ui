import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  ButtonComponent,
  AccordionComponent,
  AccordionItemComponent,
} from '@deepverse/ui';
import { HeaderComponent } from '../../../deepverse/ui/src/lib/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonComponent,
    AccordionComponent,
    AccordionItemComponent,
    HeaderComponent,
  ],
})
export class AppComponent {
  title = 'documentation';
  handleButtonClick() {
    console.log('red');
  }
}
