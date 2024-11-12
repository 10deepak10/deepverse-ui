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
  paletteColors: { dominant: string, accent: string, highlight: string, unique: string } = { 
    dominant: '', accent: '', highlight: '', unique: ''
  };

  lightTheme = { background: '', text: '', accent: '', highlight: '' };
  darkTheme = { background: '', text: '', accent: '', highlight: '' };

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

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Get the pixel data from the canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      // Extract the dominant, accent, highlight, and unique color
      const colors = this.getColors(imageData);

      this.paletteColors = {
        dominant: colors.dominantColor,
        accent: colors.accentColor,
        highlight: colors.highlightColor,
        unique: colors.uniqueColor,  // New "unique" standout color
      };

      // Set the themes based on the extracted colors
      this.generateThemes();

      console.log('Extracted Theme Colors with Contrast and Unique Shade:', this.paletteColors);
    };
  }

  // Generate light and dark themes based on the extracted palette
  generateThemes(): void {
    // Light theme
    this.lightTheme = {
      background: this.paletteColors.highlight,  // Light background
      text: this.paletteColors.dominant,  // Darker text for contrast
      accent: this.paletteColors.accent,  // Accent color
      highlight: this.paletteColors.unique  // Highlight color
    };

    // Dark theme
    this.darkTheme = {
      background: this.darkenColor(this.paletteColors.dominant, 0.7),  // Darkened dominant color as background
      text: this.lightenColor(this.paletteColors.accent, 0.8),  // Lighter text color for contrast
      accent: this.paletteColors.highlight,  // Accent color
      highlight: this.paletteColors.unique  // Highlight color
    };

    console.log('Light Theme:', this.lightTheme);
    console.log('Dark Theme:', this.darkTheme);
  }

  // Extract dominant, accent, highlight, and unique standout colors
  getColors(data: Uint8ClampedArray): { dominantColor: string, accentColor: string, highlightColor: string, uniqueColor: string } {
    const colorMap = new Map<string, number>();
    let totalPixels = 0;

    // Map color frequency
    for (let i = 0; i < data.length; i += 4) {
      const rgb = `${data[i]},${data[i + 1]},${data[i + 2]}`;
      const count = colorMap.get(rgb) || 0;
      colorMap.set(rgb, count + 1);
      totalPixels++;
    }

    // Sort colors by frequency
    const sortedColors = Array.from(colorMap.entries()).sort((a, b) => b[1] - a[1]);
    const dominantColor = this.rgbToHex(sortedColors[0][0]);

    // Find accent color with noticeable difference
    let accentColor = dominantColor;
    for (let i = 1; i < sortedColors.length; i++) {
      const candidateColor = this.rgbToHex(sortedColors[i][0]);
      if (this.getColorDifference(dominantColor, candidateColor) > 50) {
        accentColor = candidateColor;
        break;
      }
    }

    // Find highlight color with vibrancy
    let highlightColor = dominantColor;
    let maxVibrancy = 0;
    for (let i = 0; i < sortedColors.length; i++) {
      const candidateColor = this.rgbToHex(sortedColors[i][0]);
      const { brightness, saturation } = this.getBrightnessAndSaturation(candidateColor);

      if (brightness < 90 && brightness > 10 && saturation > 0.2) {
        const vibrancy = saturation * brightness;
        if (vibrancy > maxVibrancy) {
          highlightColor = candidateColor;
          maxVibrancy = vibrancy;
        }
      }
    }

    // Find a unique color that stands out from the others
    let uniqueColor = dominantColor;
    let maxDifference = 0;
    for (let i = 0; i < sortedColors.length; i++) {
      const candidateColor = this.rgbToHex(sortedColors[i][0]);
      const diffFromdominant = this.getColorDifference(dominantColor, candidateColor);
      const diffFromAccent = this.getColorDifference(accentColor, candidateColor);
      const diffFromHighlight = this.getColorDifference(highlightColor, candidateColor);

      // Check if this color stands out significantly compared to others
      const totalDifference = diffFromdominant + diffFromAccent + diffFromHighlight;
      if (totalDifference > maxDifference) {
        uniqueColor = candidateColor;
        maxDifference = totalDifference;
      }
    }

    return { dominantColor, accentColor, highlightColor, uniqueColor };
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
