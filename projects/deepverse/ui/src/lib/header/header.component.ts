import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '[style.--bg-color]': 'bgColor',
    '[style.--color]': 'textColor',
  }
})
export class HeaderComponent {
  @Input() bgColor: string = '#012345';
  @Input() textColor: string = '#ffffff';
  constructor() { }

  ngOnInit(): void { }
}
