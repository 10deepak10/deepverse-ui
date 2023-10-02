import {
  Component,
  Input,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public disabled: boolean = false;
  @Input() variant: 'primary' | 'outline' | 'link' = 'primary';
  @Input() bg: string = '#aaffaa';
  @Input() color: string = '#123456';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Output() click = new EventEmitter<void>();
  handleClick() {
    this.click.emit();
  }
  constructor(private elementRef: ElementRef) {
    this.disabled = this.elementRef.nativeElement.hasAttribute('disabled');
  }
}
