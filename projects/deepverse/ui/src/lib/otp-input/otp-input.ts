import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
  forwardRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-otp-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => OtpInput),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => OtpInput),
    },
  ],
  template: `
    <div class="otp_input" [class.errors]="!!error">
      @for (item of otpBoxesIter; track $index; let i = $index) {
      <input
        #otpInput
        type="text"
        inputmode="numeric"
        maxlength="1"
        autocomplete="off"
        [id]="'otp' + (i + 1) + id"
        name="otp{{ i + 1 }}{{ id }}"
        [(ngModel)]="otpArray[i]"
        (focus)="otpInput.select(); markAsTouched()"
        (keydown)="onOtpKeyDown($event, i)"
        (input)="onOtpInputChange($event, i)"
        (paste)="onOtpPaste($event)"
      />
      }
    </div>
    @if (error) {
    <div class="otp_error">
      {{ error.message }}
    </div>
    }
  `,
  styles: [
    `
      .otp_input {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
      }

      input {
        width: 2.5rem;
        height: 3rem;
        text-align: center;
        font-size: 1.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
      }

      input:focus {
        border-color: #007bff;
      }

      input:disabled {
        background-color: #eee;
        cursor: not-allowed;
      }

      .otp_error {
        color: red;
        text-align: center;
        margin-top: 0.5rem;
      }
    `,
  ],
})
export class OtpInput implements ControlValueAccessor, AfterViewInit, OnInit {
  @Input() length = 6;
  @Input({ alias: 'otpStatus' }) error?: {
    status_code?: number;
    message?: string;
  };
  @Input() id = 'inputId';
  @Output('otpChange') otpChangeEvent = new EventEmitter<string>();

  @ViewChildren('otpInput') inputs!: QueryList<ElementRef<HTMLInputElement>>;

  otpArray: string[] = [];
  otpBoxesIter: number[] = [];

  onChange: (otp: string) => void = () => {};
  onTouched: () => void = () => {};
  touched = false;
  disabled = false;

  ngOnInit(): void {
    this.otpArray = new Array(this.length).fill('');
    this.otpBoxesIter = Array.from({ length: this.length }, (_, i) => i);
  }

  ngAfterViewInit(): void {
    if (this.id === 'inputId') {
      this.focusInput(0);
      this.markAsTouched();
    }
  }

  writeValue(value: string): void {
    const chars = value?.slice(0, this.length).split('') || [];
    this.otpArray = new Array(this.length).fill('');
    chars.forEach((c, i) => (this.otpArray[i] = c));
  }

  registerOnChange(fn: (otp: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const val = control.value as string;
    return val?.length >= 1 ? { boxValueGreaterThanOne: { otp: val } } : null;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  onOtpKeyDown(event: KeyboardEvent, index: number): void {
    const key = event.key;
    const inputEl = this.inputs.get(index)?.nativeElement;

    if (!inputEl) return;

    if (key === 'Backspace') {
      if (inputEl.value) {
        inputEl.value = '';
        this.otpArray[index] = '';
      } else if (index > 0) {
        this.focusInput(index - 1);
      }
      this.emitOtpChange();
      event.preventDefault();
    } else if (/[^0-9]/.test(key)) {
      event.preventDefault();
    }
  }

  onOtpInputChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const char = input.value.replace(/[^0-9]/g, '').charAt(0);
    this.otpArray[index] = char || '';
    input.value = char;

    if (char && index < this.length - 1) {
      this.focusInput(index + 1);
    }

    this.emitOtpChange();
  }

  onOtpPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pasted = event.clipboardData?.getData('text').replace(/[^0-9]/g, '') || '';
    const chars = pasted.slice(0, this.length).split('');
  
    for (let i = 0; i < this.length; i++) {
      this.otpArray[i] = chars[i] || '';
    }
  
    // ✅ Important: replace array reference to trigger change detection
    this.otpArray = [...this.otpArray];
  
    this.emitOtpChange();
    this.focusInput(chars.length < this.length ? chars.length : this.length - 1);
  }
  

  private emitOtpChange(): void {
    const otp = this.otpArray.join('');
    this.onChange(otp);
    this.otpChangeEvent.emit(otp);
  }

  private focusInput(index: number): void {
    this.inputs.get(index)?.nativeElement.focus();
  }
}
