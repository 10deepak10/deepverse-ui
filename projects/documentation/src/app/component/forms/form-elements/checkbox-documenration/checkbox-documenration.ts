import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxGroupModule } from '@deepverse/ui';

@Component({
  selector: 'app-checkbox-documenration',
  imports: [CheckboxGroupModule, FormsModule],
  templateUrl: './checkbox-documenration.html',
  styleUrl: './checkbox-documenration.scss'
})
export class CheckboxDocumenration {
  tools = ['Figma', 'Sketch', 'XD', 'Framer'];
  selectedTools: string[] = [];
}
