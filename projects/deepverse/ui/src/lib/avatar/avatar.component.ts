import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dv-avatar',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() public imageUrl: string = '';
  @Input() public name: string = '';
  @Input() public shape: string = 'circle';
  @Input() public size: string = 'md';
  @Input() public showBorder: boolean = false;
  @Input() public bgColor: string = '#123456';
  @Input() public textColor: string = '#ffffff';
  @Input() public status: string = '';
  @Input() public initials: string = '';
  @Input() public cornerRadius: string = '';
  @Input() public borderColor: string = '#000000';
  @Input() public borderWidth: string = '1';
  @Input() public borderStyle: string = 'solid';
  @Input() public showName: boolean = false;
  @Output() avatarClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public onAvatarClick(): void {
    this.avatarClick.emit();
  }
}
