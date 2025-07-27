import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  forwardRef,
  signal,
  computed
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';

export type UploadState = 'idle' | 'loading' | 'success' | 'failed';

@Component({
  selector: 'dv-upload-box',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadBoxComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UploadBoxComponent),
      multi: true,
    },
  ],
  template: `
    <ng-content></ng-content>
    <input
      type="file"
      [accept]="accept"
      hidden
      #fileInput
      (change)="importFile($event)"
    />
  `,
})
export class UploadBoxComponent
  implements ControlValueAccessor, Validator {
  @ViewChild('fileInput', { static: true }) fileInputRef!: ElementRef<HTMLInputElement>;

  @Input() accept = '.csv';
  @Input() maxSizeMB = 10;

  @Output() stateChange = new EventEmitter<UploadState>();
  @Output() error = new EventEmitter<any>();
  @Output() fileImported = new EventEmitter<File>();
  @Output() cleared = new EventEmitter<void>();

  private _state = signal<UploadState>('idle');
  file = signal<File | null>(null);

  fileName = computed(() => this.file()?.name ?? null);
  fileSize = computed(() => this.file()?.size ?? null);
  fileExtension = computed(() => {
    const name = this.fileName();
    return name ? name.split('.').pop()?.toLowerCase() ?? null : null;
  });

  disabled = false;
  private onChange = (value: File | null) => {};
  private onTouched = () => {};

  get state(): UploadState {
    return this._state();
  }

  openFilePicker(): void {
    if (!this.file() && this.state === 'idle' && !this.disabled) {
      this.fileInputRef.nativeElement.click();
    }
  }

  onDropAreaClick(): void {
    this.openFilePicker();
  }

  importFile(event: Event): void {
    if (this.disabled) return;

    const input = event.target as HTMLInputElement;
    const file =
      (event as DragEvent).dataTransfer?.files?.[0] ||
      input?.files?.[0];

    if (!file) return;
    input.value = '';

    this._state.set('loading');

    const isOnline = navigator.onLine;
    const sizeLimit = this.maxSizeMB * 1024 * 1024;
    const acceptedTypes = this.accept.split(',').map(ext => ext.trim());
    const isValidType = acceptedTypes.some(ext => file.name.endsWith(ext));

    if (!isOnline) {
      this.emitError('network-issue', 'Upload failed. Please try again.');
      return;
    }

    if (!isValidType) {
      this.emitError('invalid-file-type', `Only ${this.accept} file allowed.`);
      return;
    }

    if (file.size > sizeLimit) {
      this.emitError(
        'file-size-exceeded',
        `Please upload file <= ${this.maxSizeMB} MB`
      );
      return;
    }

    this.file.set(file);
    this.fileImported.emit(file);
    this._state.set('success');
    this.stateChange.emit('success');
    this.onChange(file);
    this.onTouched();
  }

  reset(event?: MouseEvent): void {
    event?.stopPropagation();
    this.file.set(null);
    this._state.set('idle');
    this.onChange(null);
    this.stateChange.emit('idle');
    this.cleared.emit();
  }

  delete(event?: MouseEvent): void {
    event?.stopPropagation();
    this.file.set(null);
    this._state.set('idle');
    this.onChange(null);
    this.stateChange.emit('idle');
    this.cleared.emit();
  }

  private emitError(type: string, message: string): void {
    this.error.emit({ type, message });
    this.reset();
  }

  // ControlValueAccessor methods
  writeValue(value: File | null): void {
    this.file.set(value);
    this._state.set(value ? 'success' : 'idle');
  }

  registerOnChange(fn: (value: File | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Validator
  validate(control: AbstractControl): ValidationErrors | null {
    return this.file() ? null : { required: true };
  }
}
