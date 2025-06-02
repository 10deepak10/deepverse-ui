import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss']
})
export class ImagePickerComponent {
  imageSrc: string | ArrayBuffer | null = null;
  paletteColors: { 
    dominant: string, accent: string, highlight: string, unique: string, 
    secondary: string, tertiary: string, shadow: string, contrast: string 
  } = { 
    dominant: '', accent: '', highlight: '', unique: '', 
    secondary: '', tertiary: '', shadow: '', contrast: '' 
  };
  // Handle the image upload event
  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
        this.extractColors(this.imageSrc);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  // Extract colors and compute contrast color
  extractColors(imageSrc: string | ArrayBuffer | null): void {
    const img = new Image();
    img.src = imageSrc as string;
    img.crossOrigin = 'Anonymous';  // Avoid CORS issues

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    
      // Scale down the image to avoid excessive processing
      const MAX_SIZE = 300;
      const scaleFactor = Math.min(MAX_SIZE / img.width, MAX_SIZE / img.height);
      canvas.width = img.width * scaleFactor;
      canvas.height = img.height * scaleFactor;
    
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      this.paletteColors = this.getColors(imageData);

      // Get the pixel data from the canvas

      // Extract the dominant, accent, highlight, and unique color
      const colors = this.getColors(imageData);

      this.paletteColors = {
        dominant: colors.dominant,
        accent: colors.accent,
        highlight: colors.highlight,
        unique: colors.unique,  // New "unique" standout color
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        shadow: colors.shadow,
        contrast: colors.contrast,
      };

      // Set the themes based on the extracted colors

      console.log('Extracted Theme Colors with Contrast and Unique Shade:', this.paletteColors);
    };
  }


  // Extract dominant, accent, highlight, and unique standout colors
  getColors(data: Uint8ClampedArray): { 
    dominant: string, accent: string, highlight: string, unique: string, 
    secondary: string, tertiary: string, shadow: string, contrast: string 
  } {
    const colorMap = new Map<string, number>();
  
    // Count pixel color occurrences
    for (let i = 0; i < data.length; i += 16) {
      const rgb = `${data[i]},${data[i + 1]},${data[i + 2]}`;
      const count = colorMap.get(rgb) || 0;
      colorMap.set(rgb, count + 1);
    }
  
    // Sort colors by frequency
    const sortedColors = Array.from(colorMap.entries()).sort((a, b) => b[1] - a[1]);
  
    // Get the most frequent color (dominant)
    const dominant = this.rgbToHex(sortedColors[0][0]);
  
    // Find secondary and tertiary colors
    const secondary = this.rgbToHex(sortedColors[1][0] || dominant);
    const tertiary = this.rgbToHex(sortedColors[2][0] || dominant);
  
    // Find accent and highlight colors based on saturation and brightness
    let accent = dominant, highlight = dominant, maxVibrancy = 0;
    for (const [rgb] of sortedColors) {
      const hex = this.rgbToHex(rgb);
      const { brightness, saturation } = this.getBrightnessAndSaturation(hex);
  
      if (this.getColorDifference(dominant, hex) > 50) {
        accent = hex;
      }
      
      if (brightness > 20 && saturation > 0.3) {
        const vibrancy = brightness * saturation;
        if (vibrancy > maxVibrancy) {
          highlight = hex;
          maxVibrancy = vibrancy;
        }
      }
    }
  
    // Find shadow color (darkest)
    let shadow = dominant;
    for (const [rgb] of sortedColors) {
      const hex = this.rgbToHex(rgb);
      if (this.getBrightnessAndSaturation(hex).brightness < this.getBrightnessAndSaturation(shadow).brightness) {
        shadow = hex;
      }
    }
  
    // Find contrast color (most different from dominant)
    let contrast = dominant, maxDiff = 0;
    for (const [rgb] of sortedColors) {
      const hex = this.rgbToHex(rgb);
      const diff = this.getColorDifference(dominant, hex);
      if (diff > maxDiff) {
        contrast = hex;
        maxDiff = diff;
      }
    }
  
    // Find unique standout color
    let unique = dominant, maxUniqueDiff = 0;
    for (const [rgb] of sortedColors) {
      const hex = this.rgbToHex(rgb);
      const totalDiff = this.getColorDifference(dominant, hex) + this.getColorDifference(accent, hex) + this.getColorDifference(highlight, hex);
      if (totalDiff > maxUniqueDiff) {
        unique = hex;
        maxUniqueDiff = totalDiff;
      }
    }
  
    return { dominant, accent, highlight, unique, secondary, tertiary, shadow, contrast };
  }
  

  // Convert RGB string to HEX
  rgbToHex(rgb: string): string {
    const [r, g, b] = rgb.split(',').map(Number);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  // Darken a HEX color by a certain percentage
  darkenColor(hex: string, percentage: number): string {
    const { r, g, b } = this.hexToRgb(hex);
    return this.rgbToHex(`${Math.floor(r * (1 - percentage))},${Math.floor(g * (1 - percentage))},${Math.floor(b * (1 - percentage))}`);
  }

  // Lighten a HEX color by a certain percentage
  lightenColor(hex: string, percentage: number): string {
    const { r, g, b } = this.hexToRgb(hex);
    return this.rgbToHex(`${Math.floor(r + (255 - r) * percentage)},${Math.floor(g + (255 - g) * percentage)},${Math.floor(b + (255 - b) * percentage)}`);
  }

  // Get color difference (Euclidean distance in RGB space)
  getColorDifference(color1: string, color2: string): number {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);
    return Math.sqrt(
      Math.pow(rgb1.r - rgb2.r, 2) +
      Math.pow(rgb1.g - rgb2.g, 2) +
      Math.pow(rgb1.b - rgb2.b, 2)
    );
  }

  // Convert HEX to RGB
  hexToRgb(hex: string): { r: number, g: number, b: number } {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  }

  // Get brightness and saturation of a color
  getBrightnessAndSaturation(hex: string): { brightness: number, saturation: number } {
    const { r, g, b } = this.hexToRgb(hex);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const brightness = (max + min) / 2;
    const saturation = max === min ? 0 : (max - min) / (255 - Math.abs(2 * brightness - 255));

    return { brightness: (brightness / 255) * 100, saturation };
  }
}
