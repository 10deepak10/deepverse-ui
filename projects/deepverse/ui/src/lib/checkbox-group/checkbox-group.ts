import { Component, ContentChildren, forwardRef, Input, QueryList, AfterContentInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Checkbox } from './checkbox/checkbox';

@Component({
  selector: 'dv-checkbox-group',
  standalone: true,
  imports: [],
  template: `<ng-content />`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxGroup),
    multi: true
  }]
})
export class CheckboxGroup implements ControlValueAccessor, AfterContentInit {
  @ContentChildren(Checkbox, { descendants: true }) checkboxes!: QueryList<Checkbox>;

  private onChange = (_: any) => {};
  private onTouched = () => {};
  private selectedValues: any[] = [];

  ngAfterContentInit(): void {
    this.syncCheckboxes();
  }

  private syncCheckboxes() {
    this.checkboxes.forEach(checkbox => {
      checkbox.checked = this.selectedValues.includes(checkbox.value);
      checkbox.onChange = () => this.toggleValue(checkbox.value);
    });
  }

  writeValue(value: any[]): void {
    this.selectedValues = value ?? [];
    if (this.checkboxes) {
      this.syncCheckboxes();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleValue(value: any) {
    const index = this.selectedValues.indexOf(value);
    if (index === -1) {
      this.selectedValues.push(value);
    } else {
      this.selectedValues.splice(index, 1);
    }
    this.syncCheckboxes();
    this.onChange([...this.selectedValues]);
    this.onTouched();
  }
}
