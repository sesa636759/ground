import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { AnimateOnScrollPlaygroundComponent } from './components/animate-on-scroll-playground/animate-on-scroll-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-animate-on-scroll-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AnimateOnScrollPlaygroundComponent,
    CodeBlockComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-animate-on-scroll-demo.component.html',
  styleUrl: './set-animate-on-scroll-demo.component.scss',
})
export class SetAnimateOnScrollDemoComponent {
  variants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'cinematic-fidelity', title: 'Cinematic Fidelity', icon: '🎬' },
    { id: 'staggering', title: 'Orchestrated Staggering', icon: '🎵' },
    { id: '3d-depth', title: 'True 3D Depth', icon: '🎲' },
    { id: 'scroll-triggering', title: 'Scroll Triggering', icon: '🎯' },
    { id: 'scroll-scrubbing', title: 'Scroll Scrubbing', icon: '🎛️' },
    { id: 'text-reveal', title: 'Text Reveal', icon: '✍️' },
  ];

  get exampleVariants() {
    return this.variants.filter(v => v.id !== 'playground');
  }

  playgroundCode = `<app-animate-on-scroll
  animation="fadeIn"
  duration="1000"
>
  <div>Content to animate</div>
</app-animate-on-scroll>`;

  cinematicCode = `<!-- Glassmorphic Blur -->
<app-animate-on-scroll
  animation="fade-in"
  blur-amount="20"
  easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  duration="1200"
>
  <div class="glass-card">Premium Content</div>
</app-animate-on-scroll>`;

  staggeringCode = `<!-- Stagger children animations -->
<app-animate-on-scroll stagger="100">
  <div class="card">Analytics</div>
  <div class="card">Security</div>
  <div class="card">Speed</div>
  <div class="card">Cloud</div>
</app-animate-on-scroll>`;

  depth3dCode = `<!-- Flip In 3D -->
<app-animate-on-scroll
  animation="flip-in"
  perspective="1000"
  rotate-x="90"
>
  <div class="card">Flip In</div>
</app-animate-on-scroll>

<!-- Rotate In 3D -->
<app-animate-on-scroll
  animation="rotate-3d"
  perspective="1500"
  rotate-y="180"
>
  <div class="card">Rotate In</div>
</app-animate-on-scroll>`;

  scrollTriggeringCode = `<!-- Trigger animation on another element -->
<app-animate-on-scroll
  animation="shake"
  trigger="#trigger-zone"
>
  <div class="sidebar">I shake when trigger is scrolled!</div>
</app-animate-on-scroll>

<div id="trigger-zone">
  Trigger Zone
</div>`;

  scrollScrubbingCode = `<!-- Bind animation to scroll progress -->
<app-animate-on-scroll
  animation="scrub"
  scrub="true"
  rotate-z="360"
  scale="1.5"
>
  <div class="scrub-element">Scroll to rotate and zoom!</div>
</app-animate-on-scroll>`;

  textRevealCode = `<!-- Character-by-character animation -->
<app-animate-on-scroll
  animation="text-reveal"
  text-mode="char"
  stagger="50"
>
  <h2>Start Building</h2>
</app-animate-on-scroll>

<!-- Word-by-word animation -->
<app-animate-on-scroll
  animation="text-reveal"
  text-mode="word"
  stagger="100"
>
  <p>Create amazing experiences</p>
</app-animate-on-scroll>`;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
