import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dv-checkbox',
  standalone: true,
  template: `
    <label class="checkbox-wrapper">
      <input
        type="checkbox"
        [checked]="checked"
        [disabled]="disabled"
        [value]="value"
        (change)="onChange?.()"
      />
      <ng-content />
    </label>
  `,
  styles:`
  input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  height: 0;
  width: 0;
}
  `,
    encapsulation: ViewEncapsulation.None
})
export class Checkbox {
  @Input() value: any;
  @Input() checked = false;
  @Input() disabled?: boolean;
  @Input() onChange?: () => void;
}
