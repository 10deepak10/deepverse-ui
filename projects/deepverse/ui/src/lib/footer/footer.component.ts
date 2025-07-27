import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'dv-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [CommonModule, ]
})
export class FooterComponent {
  @Input() bgColor: string = '#123456';
  @Input() textColor: string = '#ffffff';
}
