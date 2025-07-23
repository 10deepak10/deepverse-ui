import { Component, ContentChildren, forwardRef, Input, QueryList, AfterContentInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Radio } from './radio/radio';

@Component({
  selector: 'dv-radio-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<ng-content />`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioGroup),
    multi: true
  }]
})
export class RadioGroup implements ControlValueAccessor, AfterContentInit {
  @Input({ required: true }) name!: string;

  @ContentChildren(Radio, { descendants: true }) radios!: QueryList<Radio>;

  private onChange = (val: any) => {};
  private onTouched = () => {};

  private value: any;

  ngAfterContentInit(): void {
    this.radios.forEach(radio => {
      // Inject group name if not set explicitly
      if (!radio.hasCustomName) {
        radio.name = this.name;
      }

      // Set initial checked state
      radio.checked = radio.value === this.value;

      // Setup change handler
      radio.onChange = () => {
        this.select(radio.value);
      };
    });
  }

  writeValue(val: any): void {
    this.value = val;
    if (this.radios) {
      this.radios.forEach(r => r.checked = r.value === val);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  select(val: any) {
    this.value = val;
    this.writeValue(val);
    this.onChange(val);
    this.onTouched();
  }
}
