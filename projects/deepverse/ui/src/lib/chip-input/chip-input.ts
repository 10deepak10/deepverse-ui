import {
  Component,
  Input,
  forwardRef,
  ViewChild,
  ElementRef,
  ContentChild,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-chip-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div (click)="focusInput()" ngClass="d-content">
      <ng-container
        *ngFor="let chip of chips; let i = index"
        [ngTemplateOutlet]="chipTemplate"
        [ngTemplateOutletContext]="{ $implicit: chip, index: i }"
      >
      </ng-container>

      <input
        #inputRef
        type="text"
        [(ngModel)]="inputValue"
        (keydown)="onKeyDown($event)"
        [placeholder]="placeholder"
      />
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipInput),
      multi: true,
    },
  ],
  styles: ` 
  .d-content {
    display:contents
  }
  input {
      all: unset; 
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      flex: 1;
      min-width: 80px;
      font-size: 1rem;
      padding: 0.4rem 0.6rem;
      background: transparent;
      border: none;
      outline: none;
      color: white;
      border-bottom: 1px solid;
  
      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
  
      &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 6px;
      }
    }`,
    encapsulation:ViewEncapsulation.None
})
export class ChipInput implements ControlValueAccessor {
  @Input() placeholder: string = '';
  chips: string[] = [];
  inputValue = '';

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
  @ContentChild('chip', { static: false }) chipTemplate!: TemplateRef<any>;

  private onChange = (val: string[]) => {};
  private onTouched = () => {};

  writeValue(val: string[]): void {
    this.chips = val || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.inputValue.trim()) {
      this.addChip(this.inputValue.trim());
      this.inputValue = '';
      event.preventDefault();
    } else if (
      event.key === 'Backspace' &&
      !this.inputValue &&
      this.chips.length
    ) {
      this.removeChip(this.chips.length - 1);
    }
  }

  addChip(value: string) {
    if (!this.chips.includes(value)) {
      this.chips.push(value);
      this.onChange(this.chips);
    }
  }

  removeChip(index: number) {
    this.chips.splice(index, 1);
    this.onChange(this.chips);
  }

  focusInput() {
    this.inputRef.nativeElement.focus();
  }
}
