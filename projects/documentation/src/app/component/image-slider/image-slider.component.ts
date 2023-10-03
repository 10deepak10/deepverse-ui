import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarComponent, ImageSliderComponent } from '@deepverse/ui';
@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent, AvatarComponent],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderDemoComponent{

  constructor() {}
  public imgs = [
    'assets/images/img01.jpg',
    'assets/images/img02.jpg',
    'assets/images/img03.jpg',
    'assets/images/img04.jpg',
    'assets/images/img05.jpg',
    'assets/images/img01.jpg',
    'assets/images/img02.jpg',
    'assets/images/img03.jpg',
    'assets/images/img04.jpg',
    'assets/images/img05.jpg',
    'assets/images/img01.jpg',
    'assets/images/img02.jpg',
    'assets/images/img03.jpg',
  ];

}
