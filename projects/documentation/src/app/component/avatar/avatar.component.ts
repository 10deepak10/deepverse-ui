import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent, Table, TableItem } from '@deepverse/ui';
import { DvTabShell } from '../../shared/dv-tab-shell/dv-tab-shell';
import { PrismHighlightDirective } from '../../shared/directive/highlight';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, DvTabShell, AvatarComponent, Table, TableItem, PrismHighlightDirective],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarDemoComponent {
  // =====================
  // CODE SNIPPETS FOR DOC
  // =====================

  avatarCircleCode: string = `
<dv-avatar [imageUrl]="'assets/avatars/1.jpg'"></dv-avatar>
<dv-avatar [imageUrl]="'assets/avatars/2.jpg'"></dv-avatar>
`;

  avatarSquareCode: string = `
<dv-avatar [imageUrl]="'assets/avatars/1.jpg'" [shape]="'square'"></dv-avatar>
<dv-avatar [imageUrl]="'assets/avatars/2.jpg'" [shape]="'square'"></dv-avatar>
`;

  avatarRoundedCode: string = `
<dv-avatar [imageUrl]="'assets/avatars/3.jpg'" [shape]="'rounded'"></dv-avatar>
<dv-avatar [imageUrl]="'assets/avatars/4.jpg'" [shape]="'rounded'"></dv-avatar>
`;

  avatarInitialsCode: string = `
<dv-avatar [name]="'Andrea Gibson'" [initials]="'AG'"></dv-avatar>
<dv-avatar [name]="'Jared Brown'" [initials]="'JB'"></dv-avatar>
`;

  avatarSizesCode: string = `
<dv-avatar [imageUrl]="'assets/avatars/1.jpg'" [size]="'xl'"></dv-avatar>
<dv-avatar [imageUrl]="'assets/avatars/2.jpg'" [size]="'lg'"></dv-avatar>
<dv-avatar [imageUrl]="'assets/avatars/3.jpg'" [size]="'md'"></dv-avatar>
<dv-avatar [imageUrl]="'assets/avatars/4.jpg'" [size]="'sm'"></dv-avatar>
`;

  avatarBordersCode: string = `
<dv-avatar [imageUrl]="'assets/avatars/1.jpg'" [showBorder]="true"></dv-avatar>
<dv-avatar [imageUrl]="'assets/avatars/1.jpg'" [showBorder]="true" [borderWidth]="'3'" [borderStyle]="'dotted'"></dv-avatar>
<dv-avatar [imageUrl]="'assets/avatars/1.jpg'" [showBorder]="true" [borderColor]="'red'"></dv-avatar>
`;

  avatarColorsCode: string = `
<dv-avatar [name]="'Andrea Gibson'" [initials]="'AG'" [bgColor]="'red'"></dv-avatar>
<dv-avatar [name]="'Shannon Allison'" [initials]="'SA'" [textColor]="'black'"></dv-avatar>
`;

  avatarStatusCode: string = `
<dv-avatar [imageUrl]="'assets/avatars/1.jpg'" [status]="'danger'"></dv-avatar>
<dv-avatar [imageUrl]="'assets/avatars/2.jpg'" [status]="'success'"></dv-avatar>
`;

  avatarClickCode: string = `
<dv-avatar [imageUrl]="'assets/avatars/1.jpg'" (avatarClick)="onAvatarClick()"></dv-avatar>
`;

  avatarNameCode: string = `
<dv-avatar
  [name]="'Andrea Gibson'"
  [imageUrl]="'assets/avatars/1.jpg'"
  [showBorder]="true"
  [showName]="true">
</dv-avatar>
`;

  // =====================
  // DEMO HANDLERS
  // =====================

  onAvatarClick() {
    alert('Avatar clicked!');
  }

  // =====================
  // API TABLE ROWS
  // =====================

  documentation = [
    {
      property: 'imageUrl',
      description: 'Image source for the avatar',
      type: 'string',
      default_value: '-',
    },
    {
      property: 'name',
      description: 'Full name of the user',
      type: 'string',
      default_value: '-',
    },
    {
      property: 'initials',
      description: 'Initials displayed if no image is provided',
      type: 'string',
      default_value: '-',
    },
    {
      property: 'shape',
      description: 'Shape of the avatar (circle | square | rounded)',
      type: 'string',
      default_value: 'circle',
    },
    {
      property: 'size',
      description: 'Size of the avatar (sm | md | lg | xl)',
      type: 'string',
      default_value: 'md',
    },
    {
      property: 'showBorder',
      description: 'Whether to show border around the avatar',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'borderWidth',
      description: 'Custom border width (px)',
      type: 'string',
      default_value: '1',
    },
    {
      property: 'borderColor',
      description: 'Border color',
      type: 'string',
      default_value: '#ccc',
    },
    {
      property: 'borderStyle',
      description: 'Border style (solid, dashed, dotted, etc.)',
      type: 'string',
      default_value: 'solid',
    },
    {
      property: 'bgColor',
      description: 'Background color for initials avatar',
      type: 'string',
      default_value: 'auto',
    },
    {
      property: 'textColor',
      description: 'Text color for initials avatar',
      type: 'string',
      default_value: '#fff',
    },
    {
      property: 'status',
      description: 'Status indicator (success | danger | warning | info)',
      type: 'string',
      default_value: '-',
    },
    {
      property: 'cornerRadius',
      description: 'Custom corner radius (px)',
      type: 'string',
      default_value: '-',
    },
    {
      property: 'showName',
      description: 'Whether to display the name below the avatar',
      type: 'boolean',
      default_value: 'false',
    },
    {
      property: 'avatarClick',
      description: 'Event emitted on avatar click',
      type: 'EventEmitter<void>',
      default_value: '-',
    },
  ];
}
