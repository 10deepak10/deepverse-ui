import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-radio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label>
      <input
        type="radio"
        [attr.name]="name"
        [value]="value"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange?.()" />
      <ng-content />
    </label>
  `,
  styles:`
  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    height: 0;
    width: 0;
  }`,
  encapsulation: ViewEncapsulation.None

})
export class Radio {
  @Input() value: any;
  @Input() checked = false;
  @Input() disabled:boolean | undefined = false;

  private _name?: string;
  hasCustomName = false;

  @Input()
  set name(val: string | undefined) {
    this._name = val;
    this.hasCustomName = val != null;
  }

  get name(): string | undefined {
    return this._name;
  }

  @Input() onChange?: () => void = () => {};

}
