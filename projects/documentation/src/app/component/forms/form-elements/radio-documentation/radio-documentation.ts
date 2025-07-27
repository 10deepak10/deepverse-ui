import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioGroupModule } from '@deepverse/ui';

@Component({
  selector: 'app-radio-documentation',
  imports: [RadioGroupModule, FormsModule],
  templateUrl: './radio-documentation.html',
  styleUrl: './radio-documentation.scss'
})
export class RadioDocumentation {
  selectedTheme = 'Aqua';
  themes = ['Aqua', 'Frost', 'Blush'];
}
