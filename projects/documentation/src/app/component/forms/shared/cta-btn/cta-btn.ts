import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
export interface DemoLink {
  label: string;
  route: string;
  icon?: string;
  description?: string;
  status?: 'ready' | 'planned' | 'inlist';
}
@Component({
  selector: 'cta-btn',
  imports: [CommonModule , RouterLink],
  templateUrl: './cta-btn.html',
  styleUrl: './cta-btn.scss'
})
export class CtaBtn {
  @Input() demolinks !: DemoLink[]; 

}
