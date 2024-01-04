import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { debounce } from 'lodash';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas1', { static: true }) canvasRef!: ElementRef;
  private ctx!: CanvasRenderingContext2D;
  private animationFrameId: number | null = null;
  private particles: {
    x: number;
    y: number;
    radius: number;
    color: string;
    speedX: number;
    speedY: number;
    isGlowing: boolean; // New property to track glowing state
  }[] = [];

  constructor(private deviceService: DeviceDetectorService) {
    this.onResize = debounce(this.onResize, 200);
  }

  ngAfterViewInit(): void {
    this.ctx = (this.canvasRef.nativeElement as HTMLCanvasElement).getContext(
      '2d'
    )!;
    this.setupCanvas();
    this.generateParticles();
    this.animate();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setupCanvas();
  }

  private setupCanvas() {
    const canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.particles.forEach((particle) => {
      if (particle.x > canvas.width || particle.y > canvas.height) {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
      }
    });
  }

  private generateParticles() {
    const particleCount = this.deviceService.isMobile() ? 40 : 80;
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 3 + 1;
      const x = Math.random() * (this.ctx.canvas.width - radius * 2) + radius;
      const y = Math.random() * (this.ctx.canvas.height - radius * 2) + radius;
      const speedX = (Math.random() - 0.5) * 2;
      const speedY = (Math.random() - 0.5) * 2;
      const color = '#aaffff';

      this.particles.push({
        x,
        y,
        radius,
        color,
        speedX,
        speedY,
        isGlowing: false,
      });
    }
  }

  private animate() {
    this.animationFrameId = requestAnimationFrame(() => {
      this.animate();
    });

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Check for collisions with other particles
      this.checkParticleCollisions(particle);

      // Update particle position based on canvas boundaries
      this.handleCanvasBoundaries(particle);

      this.drawParticle(particle);
    });

    this.drawConnections();
  }

  private checkParticleCollisions(currentParticle: any) {
    this.particles.forEach((otherParticle) => {
      if (currentParticle !== otherParticle) {
        const dx = currentParticle.x - otherParticle.x;
        const dy = currentParticle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < currentParticle.radius + otherParticle.radius) {
          // Collision detected, update particle velocities
          this.handleCollisionResponse(currentParticle, otherParticle);
        }
      }
    });
  }

  private handleCollisionResponse(particle1: any, particle2: any) {
    // Swap speeds for a simple elastic collision simulation
    const tempSpeedX = particle1.speedX;
    const tempSpeedY = particle1.speedY;

    particle1.speedX = particle2.speedX;
    particle1.speedY = particle2.speedY;

    particle2.speedX = tempSpeedX;
    particle2.speedY = tempSpeedY;
  }

  private handleCanvasBoundaries(particle: any) {
    if (
      particle.x + particle.radius > this.ctx.canvas.width ||
      particle.x - particle.radius < 0
    ) {
      particle.speedX = -particle.speedX;
    }

    if (
      particle.y + particle.radius > this.ctx.canvas.height ||
      particle.y - particle.radius < 0
    ) {
      particle.speedY = -particle.speedY;
    }
  }

  private drawParticle(particle: {
    x: number;
    y: number;
    radius: number;
    color: string;
    speedX: number;
    speedY: number;
    isGlowing: boolean;
  }) {
    if (particle.isGlowing) {
      this.ctx.shadowBlur = 5; // Set the shadow blur radius for a  glow effect
      this.ctx.shadowColor = particle.color; // Set the shadow color to the particle's color
    }

    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = particle.color;
    this.ctx.fill();
    this.ctx.closePath();

    if (particle.isGlowing) {
      this.ctx.shadowBlur = 0; // Reset shadow blur after drawing the particle
      particle.isGlowing = false; // Reset glowing state
    }
  }

  private drawConnections() {
    this.particles.forEach((particle1, index1) => {
      this.particles.slice(index1 + 1).forEach((particle2) => {
        const dx = particle1.x - particle2.x;
        const dy = particle1.y - particle2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const opacity = 1 - distance / 100;
          this.ctx.strokeStyle = `rgba(170, 255, 255, ${opacity})`;
          this.ctx.lineWidth = 1;

          this.ctx.setLineDash([5, 5]);

          this.ctx.beginPath();
          this.ctx.moveTo(particle1.x, particle1.y);
          this.ctx.lineTo(particle2.x, particle2.y);
          this.ctx.stroke();
          this.ctx.closePath();

          // Set particles involved in the line to glowing state
          particle1.isGlowing = true;
          particle2.isGlowing = true;

          // Reset glowing state after a short duration (e.g., 0.1 seconds)
          setTimeout(() => {
            particle1.isGlowing = false;
            particle2.isGlowing = false;
          }, 100); // 100 milliseconds (0.1 seconds)
        }
      });
    });
  }
  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.particles = [];
  }
}
