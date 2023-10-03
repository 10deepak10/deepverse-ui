import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dv-image-slider',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @Input() public images: string[] = [];
  public slideURL: any;
  public selectedIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.slideURL = this.images[0];
  }

  public setIndex(index: number, dots: HTMLElement): void {
    if (index > this.selectedIndex) {
      dots.scrollBy(25, 0);
      this.selectedIndex = index;
    } else {
      dots.scrollBy(-25, 0);
      this.selectedIndex = index;
    }
  }

  public sliderNext(dots: HTMLElement): void {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex = this.selectedIndex + 1;
      this.slideURL = this.images[this.selectedIndex];
      dots.scrollBy(25, 0);
    }
  }
  public sliderprev(dots: HTMLElement): void {
    if (1 <= this.selectedIndex) {
      this.selectedIndex = this.selectedIndex - 1;
      this.slideURL = this.images[this.selectedIndex];
      dots.scrollBy(-25, 0);
    }
  }
}
