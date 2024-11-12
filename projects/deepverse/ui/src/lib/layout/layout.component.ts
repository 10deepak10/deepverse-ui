import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [CommonModule],
})
export class LayoutComponent{
  @Input() layoutType : 'full-header'| 'full-sidebar' =  'full-header' ;


  @Input() footerFixed: boolean = true;

}
