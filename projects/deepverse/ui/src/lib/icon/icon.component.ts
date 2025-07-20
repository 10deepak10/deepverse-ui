import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule} from '@angular/common';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dv-icon',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  host: {
    '[class.disabled]': '_disabled',
    '[class.cursor]': '_asBtn',
  },
})
export class IconComponent implements OnInit {
  @Input('icon') icon: any;
  @Input('iconPrefix') iconPrefix: any = '';

  @Input() size: string | number = '24px';
  @Input() bgSize!: string | number;
  @Input() color!: string[];
  @Input() bg: string[] = ['transparent', 'transparent', 'transparent'];
  @Input() borderColor: string = 'transparent';
  @Input() rounded: 'none' | 'full' | 'sm' | 'md' = 'none';
  @Input() padding: number[] = [NaN];
  @Input() alt: string = '';

  public _asBtn: boolean = false;
  public _defaultColor: boolean = true;
  public _disabled: boolean = false;
  public _padding!: string;

  classString = { filter: '', hover: '' };
  constructor() {}

  @Input()
  get asBtn(): boolean {
    return this._asBtn;
  }
  set asBtn(value: BooleanInput) {
    this._asBtn = coerceBooleanProperty(value);
  }
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  ngOnChanges(changes: SimpleChanges): void {
     if (changes['color']) {
      this._defaultColor = false;
    }
  }

  getIconStyles() {
    return {
      '-webkit-mask-image': 'url(' + this.iconPrefix + this.icon + ')',
      'mask-image': 'url(' + this.iconPrefix + this.icon + ')',
      '--size': typeof this.size == 'number' ? this.size + 'px' : this.size,
      '--color': this.getColorValue(this.color?.[0] || 'grey-1100'),
      '--hover': this.getColorValue(
        this.color?.[1] || this.color?.[0] || 'grey-1100'
      ),
      '--active': this.getColorValue(
        this.color?.[2] || this.color?.[1] || this.color?.[0] || 'grey-1100'
      ),
    };
  }
  getIconBgStyles() {
    return {
      '--bgSize':
        typeof this.bgSize == 'number' ? this.bgSize + 'px' : this.bgSize,
      '--bg': this.getColorValue(this.bg[0] || 'transparent'),
      '--bgHover': this.getColorValue(
        this.bg[1] || this.bg[0] || 'transparent'
      ),
      '--bgActive': this.getColorValue(
        this.bg[2] || this.bg[1] || this.bg[0] || 'transparent'
      ),
      '--rounded':
        this.rounded == 'sm'
          ? '8px'
          : this.rounded == 'full'
          ? '99999px'
          : this.rounded == 'md'
          ? '12px'
          : '0px',
      '--borderColor': this.getColorValue(this.borderColor),
      '--size': typeof this.size == 'number' ? this.size + 'px' : this.size,
      '--color': this.getColorValue(this.color?.[0] || 'grey-1100'),
      '--hover': this.getColorValue(
        this.color?.[1] || this.color?.[0] || 'grey-1100'
      ),
      '--active': this.getColorValue(
        this.color?.[2] || this.color?.[1] || this.color?.[0] || 'grey-1100'
      ),
    };
  }
  ngOnInit(): void {
    if (!this.bgSize) {
      this.bgSize = this.size;
    }
   
    this._padding = `${
      this.padding[0] != undefined ? this.padding[0] + 'px' : ''
    } ${this.padding[1] != undefined ? this.padding[1] + 'px' : ''} ${
      this.padding[2] != undefined ? this.padding[2] + 'px' : ''
    } ${this.padding[3] != undefined ? this.padding[3] + 'px' : ''} `;

    if (!this.icon) {
      console.error(
        `[IconComponent]: Missing 'icon' input. Please provide a valid icon name.`
      );
      return;
    }

    if (!this.icon.endsWith('.svg')) {
      console.warn(
        `[IconComponent]: The provided icon ('${this.icon}') is not an SVG. Please use an SVG file for optimal display.`
      );
    }

    if (!this.alt && this.icon) {
      this.alt = this.icon.split('.')[0];
    }
  }

  private getColorValue(color: string): string {
    return color.startsWith('#') ? color : 'var(--' + color + ')';
  }
}
