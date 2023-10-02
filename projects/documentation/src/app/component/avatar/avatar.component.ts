import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '@deepverse/ui';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarDemoComponent {
  public onAvatarClick(): void {}
 
}
