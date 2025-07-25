import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { AlertComponent } from '@deepverse/ui';
import { debounce } from 'lodash';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[AlertComponent],
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
    isGlowing: boolean;
    originalSpeedX: number; // To store the original speed for toggling
    originalSpeedY: number;
  }[] = [];
  private slowMotion: boolean = false; // Flag to toggle slow motion

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

    // Add double-click event listener for canvas
    (this.canvasRef.nativeElement as HTMLCanvasElement).addEventListener('dblclick', () => {
      this.toggleSlowMotion();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setupCanvas();
  }

  private setupCanvas() {
    const canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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
        originalSpeedX: speedX, // Store original speed
        originalSpeedY: speedY,
      });
    }
  }

  private toggleSlowMotion() {
    this.slowMotion = !this.slowMotion;
  
    this.particles.forEach(particle => {
      if (this.slowMotion) {
        // Set speed to 50% of original speed for slow motion
        particle.speedX = particle.originalSpeedX / 2;
        particle.speedY = particle.originalSpeedY / 2;
      } else {
        // Reset speed to the original value (not based on current speed)
        particle.speedX = particle.originalSpeedX;
        particle.speedY = particle.originalSpeedY;
      }
    });
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

          // Change both particles' color to red on collision
          currentParticle.color = 'red';
          otherParticle.color = 'red';

          // Revert to the original color after 100ms
          setTimeout(() => {
            currentParticle.color = '#aaffff'; // Reverting to original color
            otherParticle.color = '#aaffff';
          }, 100); // 100 milliseconds (adjust as necessary)
        }
      }
    });
  }

  private handleCollisionResponse(particle1: any, particle2: any) {
    const dx = particle1.x - particle2.x;
    const dy = particle1.y - particle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
  
    // Unit normal vector
    const normalX = dx / distance;
    const normalY = dy / distance;
  
    // Unit tangent vector
    const tangentX = -normalY;
    const tangentY = normalX;
  
    // Dot product of velocity and normal vector (along the line of impact)
    const dpNorm1 = particle1.speedX * normalX + particle1.speedY * normalY;
    const dpNorm2 = particle2.speedX * normalX + particle2.speedY * normalY;
  
    // Dot product of velocity and tangent vector (perpendicular to the line of impact)
    const dpTan1 = particle1.speedX * tangentX + particle1.speedY * tangentY;
    const dpTan2 = particle2.speedX * tangentX + particle2.speedY * tangentY;
  
    // Velocities along the tangent remain unchanged (conservation of momentum in the tangential direction)
    const vTan1X = dpTan1 * tangentX;
    const vTan1Y = dpTan1 * tangentY;
    const vTan2X = dpTan2 * tangentX;
    const vTan2Y = dpTan2 * tangentY;
  
    // Compute new normal velocities using the elastic collision equations
    const radius1 = particle1.radius;
    const radius2 = particle2.radius;
    const mass1 = radius1; // Assuming mass is proportional to radius
    const mass2 = radius2;
  
    const newNorm1 = (dpNorm1 * (mass1 - mass2) + 2 * mass2 * dpNorm2) / (mass1 + mass2);
    const newNorm2 = (dpNorm2 * (mass2 - mass1) + 2 * mass1 * dpNorm1) / (mass1 + mass2);
  
    // Compute final velocities by combining normal and tangential components
    particle1.speedX = vTan1X + newNorm1 * normalX;
    particle1.speedY = vTan1Y + newNorm1 * normalY;
    particle2.speedX = vTan2X + newNorm2 * normalX;
    particle2.speedY = vTan2Y + newNorm2 * normalY;
  
    // --- Position Correction to avoid sticking ---
    // Calculate the overlap distance between the particles
    const overlap = particle1.radius + particle2.radius - distance;
  
    if (overlap > 0) {
      // Move each particle half of the overlap distance away from each other
      const correctionFactor = overlap / 2;
      particle1.x += normalX * correctionFactor;
      particle1.y += normalY * correctionFactor;
      particle2.x -= normalX * correctionFactor;
      particle2.y -= normalY * correctionFactor;
    }
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
