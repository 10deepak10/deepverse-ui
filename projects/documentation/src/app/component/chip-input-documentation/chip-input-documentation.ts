import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChipInput } from '@deepverse/ui';
import { DvTabShell } from '../../shared/dv-tab-shell/dv-tab-shell';

@Component({
  selector: 'app-chip-input-documentation',
  imports: [CommonModule,DvTabShell, ChipInput , FormsModule],
  templateUrl: './chip-input-documentation.html',
  styleUrl: './chip-input-documentation.scss'
})
export class ChipInputDocumentation {
  tags: string[] = ['Angular', 'Glasmorphism'];

}
