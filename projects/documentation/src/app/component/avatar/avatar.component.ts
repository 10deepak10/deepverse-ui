import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent, Table, TableItem } from '@deepverse/ui';
import { DvTabShell } from '../../shared/dv-tab-shell/dv-tab-shell';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule,DvTabShell, AvatarComponent , Table ,TableItem],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarDemoComponent {
  public onAvatarClick(): void {}
  documentation: any[] = [
    {
      property: 'imageUrl',
      description: 'URL of the image to display as the avatar.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'name',
      description: 'Full name of the user. Used for fallback initials or displaying the name.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'shape',
      description: 'Shape of the avatar. Typically "circle", "square", or "rounded".',
      type: 'string',
      default_value: `'circle'`,
    },
    {
      property: 'size',
      description: 'Size of the avatar. Common values: "sm", "md", "lg", "xl".',
      type: 'string',
      default_value: `'md'`,
    },
    {
      property: 'showBorder',
      description: 'If true, applies a border around the avatar.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'bgColor',
      description: 'Background color used when there is no image or as fallback.',
      type: 'string',
      default_value: `'#123456'`,
    },
    {
      property: 'textColor',
      description: 'Color used for fallback initials or name text.',
      type: 'string',
      default_value: `'#ffffff'`,
    },
    {
      property: 'status',
      description: 'Optional status indicator (e.g., "online", "busy", "offline").',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'initials',
      description: 'Manually provided initials to show if no image is set.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'cornerRadius',
      description: 'Custom border-radius for the avatar when shape is not strictly defined.',
      type: 'string',
      default_value: `''`,
    },
    {
      property: 'borderColor',
      description: 'Border color if `showBorder` is true.',
      type: 'string',
      default_value: `'#000000'`,
    },
    {
      property: 'borderWidth',
      description: 'Width of the border in pixels.',
      type: 'string',
      default_value: `'1'`,
    },
    {
      property: 'borderStyle',
      description: 'Style of the border (e.g., "solid", "dashed", "dotted").',
      type: 'string',
      default_value: `'solid'`,
    },
    {
      property: 'showName',
      description: 'If true, displays the name beside or below the avatar.',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'avatarClick',
      description: 'Event emitted when the avatar is clicked.',
      type: 'EventEmitter<any>',
      default_value: '—',
    }
  ];
  
 
}
