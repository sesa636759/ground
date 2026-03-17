import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'pg-presentation',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
  currentSlide = 0;
  totalSlides = 5;
  galleryIndex = 0;
  autoRotationAngle = 0;
  private animationFrameId: any;
  private isHoveringGallery = false;

  galleryItems = [
    { title: 'Advanced Data Table', description: 'Enterprise-grade grid with virtualization', icon: 'table-2', color: '#0078d4' },
    { title: 'Kanban Board', description: 'Collaborative task management with drag-and-drop', icon: 'layout-panel-top', color: '#00c3ff' },
    { title: 'Smart Dashboard', description: 'Real-time widget-based control center', icon: 'layout-dashboard', color: '#00d2ff' },
    { title: 'File Manager', description: 'Advanced file explorer with cloud integration', icon: 'folder-tree', color: '#0078d4' },
    { title: 'Real-time Chat', description: 'Messaging module with live presence status', icon: 'messages-square', color: '#00c3ff' },
    { title: 'Advanced Analytics', description: 'Deep-dive telemetry with interactive charts', icon: 'line-chart', color: '#00d2ff' },
    { title: 'Premium Login', description: 'Secure authentication with OTP support', icon: 'lock', color: '#0078d4' },
    { title: 'E-commerce Hub', description: 'Retail interface for catalogues and checkouts', icon: 'shopping-cart', color: '#00c3ff' },
    { title: 'Settings Panel', description: 'Comprehensive configuration suite', icon: 'settings-2', color: '#00d2ff' },
    { title: 'Modern Form Set', description: 'Robust collection of inputs and pickers', icon: 'text-cursor-input', color: '#0078d4' },
    { title: 'Revenue Tracker', description: 'Financial oversight with trend analysis', icon: 'pie-chart', color: '#00c3ff' },
    { title: 'Smart Stepper', description: 'Guided workflows with progress tracking', icon: 'list-checks', color: '#00d2ff' },
  ];

  slides = [
    {
      id: 0,
      title: 'Update complete!',
      subtitle: 'Microsoft Edge has been updated to the latest version.',
      description: 'Experience a faster, safer, and more productive web with new features designed to help you do more.',
      buttonText: 'Next',
      image: 'assets/images/edge-hero.png', // Placeholder
    },
    {
      id: 1,
      title: 'Your AI-powered companion',
      subtitle: 'Copilot in Microsoft Edge',
      description: 'Get answers, summarize pages, and even generate images with Copilot, your everyday AI companion.',
      buttonText: 'Next',
      image: 'assets/images/copilot-hero.png', // Placeholder
    },
    {
      id: 2,
      title: 'Tools to help you focus',
      subtitle: 'Tab Groups & Workspaces',
      description: 'Organize your tabs and keep your personal and professional life separate with intuitive management tools.',
      buttonText: 'Next',
      image: 'assets/images/focus-hero.png', // Placeholder
    },
    {
      id: 3,
      title: 'Our Component Suite',
      subtitle: 'Powerful Atomic UI',
      description: 'Explore our vast library of components, each built with performance and developer experience in mind.',
      buttonText: 'Next',
      isGallery: true,
    },
    {
      id: 4,
      title: 'Ready for more?',
      subtitle: 'Explore all features',
      description: 'From built-in coupons to secure browsing, discover everything Edge has to offer.',
      buttonText: 'Finish',
      image: 'assets/images/edge-final.png', // Placeholder
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.startAutoRotation();
  }

  ngOnDestroy() {
    this.stopAutoRotation();
  }

  private startAutoRotation() {
    const rotate = () => {
      if (!this.isHoveringGallery && this.slides[this.currentSlide]?.isGallery) {
        this.autoRotationAngle += 0.2; // Speed of continuous rotation
      }
      this.animationFrameId = requestAnimationFrame(rotate);
    };
    rotate();
  }

  private stopAutoRotation() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  onGalleryMouseEnter() {
    this.isHoveringGallery = true;
  }

  onGalleryMouseLeave() {
    this.isHoveringGallery = false;
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    } else {
      this.router.navigate(['/home']);
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  nextGalleryItem() {
    this.galleryIndex = (this.galleryIndex + 1) % this.galleryItems.length;
  }

  prevGalleryItem() {
    this.galleryIndex = (this.galleryIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
  }

  getCardStyle(index: number) {
    const cardCount = this.galleryItems.length;
    const angleStep = 360 / cardCount; // Distribute evenly in a circle
    
    // Combined angle: Initial position + continuous auto-rotation + manual index offset
    // We target the current gelleryIndex to be at the front (0 degrees)
    const targetAngle = this.galleryIndex * -angleStep;
    const currentRotation = this.autoRotationAngle + targetAngle;
    
    const cardAngle = (index * angleStep) + currentRotation;
    const absAngle = ((cardAngle % 360) + 360) % 360; // Normalized 0-360
    
    const radius = 750;
    
    // Calculate 3D position
    const x = Math.sin(this.degToRad(cardAngle)) * radius;
    const z = (Math.cos(this.degToRad(cardAngle)) - 1) * radius;
    
    // Opacity and scale based on how close the card is to the front (0 or 360 degrees)
    const distFromFront = Math.min(absAngle, 360 - absAngle);
    const opacity = 1 - (distFromFront / 120);
    const scale = 1 - (distFromFront / 500);
    const zIndex = Math.round(100 - distFromFront);

    return {
      'transform': `translateX(${x}px) translateZ(${z}px) rotateY(${-cardAngle}deg) scale(${scale})`,
      'opacity': opacity > 0 ? opacity : 0,
      'z-index': zIndex,
      'visibility': distFromFront > 100 ? 'hidden' : 'visible',
      'pointer-events': distFromFront < 20 ? 'auto' : 'none'
    };
  }

  private degToRad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}
