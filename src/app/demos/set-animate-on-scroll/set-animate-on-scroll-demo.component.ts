import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollPlaygroundComponent } from './components/animate-on-scroll-playground/animate-on-scroll-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-animate-on-scroll-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AnimateOnScrollPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-animate-on-scroll-demo.component.html',
  styleUrl: './set-animate-on-scroll-demo.component.scss',
})
export class SetAnimateOnScrollDemoComponent {
  exampleVariants = [
    // Basic Animations
    { id: 'fade-in-basic', title: 'Fade In', icon: '🌅' },
    { id: 'fade-out-basic', title: 'Fade Out', icon: '🌇' },
    { id: 'slide-up', title: 'Slide Up', icon: '⬆️' },
    { id: 'slide-down', title: 'Slide Down', icon: '⬇️' },
    { id: 'slide-left', title: 'Slide Left', icon: '⬅️' },
    { id: 'slide-right', title: 'Slide Right', icon: '➡️' },
    { id: 'zoom-in', title: 'Zoom In', icon: '🔍' },
    { id: 'zoom-out', title: 'Zoom Out', icon: '🔎' },
    { id: 'bounce', title: 'Bounce', icon: '⚡' },
    { id: 'flip', title: 'Flip', icon: '🔄' },
    
    // Cinematic Effects
    { id: 'blur-entrance', title: 'Blur Entrance', icon: '🌫️' },
    { id: 'glassmorphic-blur', title: 'Glassmorphic Blur', icon: '🎬' },
    { id: 'elastic-easing', title: 'Elastic Easing', icon: '🎪' },
    
    // 3D Transforms
    { id: 'flip-in-3d', title: 'Flip In 3D', icon: '🎲' },
    { id: 'rotate-3d', title: 'Rotate 3D', icon: '🌀' },
    { id: 'perspective-depth', title: 'Perspective Depth', icon: '🏔️' },
    
    // Stagger Effects
    { id: 'stagger-children', title: 'Stagger Children', icon: '🎵' },
    { id: 'stagger-fast', title: 'Stagger Fast', icon: '⚡' },
    { id: 'stagger-slow', title: 'Stagger Slow', icon: '🐌' },
    
    // Scroll Interactions
    { id: 'scroll-trigger', title: 'Scroll Trigger', icon: '🎯' },
    { id: 'scroll-scrubbing', title: 'Scroll Scrubbing', icon: '🎛️' },
    { id: 'scrub-rotate', title: 'Scrub Rotate', icon: '🔄' },
    { id: 'scrub-scale', title: 'Scrub Scale', icon: '📏' },
    
    // Text Animations
    { id: 'text-char', title: 'Text Character', icon: '🔤' },
    { id: 'text-word', title: 'Text Word', icon: '📝' },
    { id: 'text-stagger', title: 'Text Stagger', icon: '✍️' },
    
    // Advanced Features
    { id: 'shake-animation', title: 'Shake', icon: '📳' },
    { id: 'repeat-animation', title: 'Repeat Animation', icon: '🔁' },
    { id: 'mirror-effect', title: 'Mirror Effect', icon: '🪞' },
    { id: 'custom-threshold', title: 'Custom Threshold', icon: '📊' },
    { id: 'delay-timing', title: 'Delay Timing', icon: '⏱️' },
    { id: 'duration-control', title: 'Duration Control', icon: '⏳' },
    { id: 'combined-effects', title: 'Combined Effects', icon: '🎨' },
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Basic Animations
  fadeInBasicCode = signal(`<app-animate-on-scroll
  animation="fade-in"
  duration="600"
>
  <div class="content-box">
    <h3>Fade In</h3>
    <p>Smooth fade entrance</p>
  </div>
</app-animate-on-scroll>`);

  fadeOutBasicCode = signal(`<app-animate-on-scroll
  animation="fade-out"
  duration="600"
>
  <div class="content-box">
    <h3>Fade Out</h3>
    <p>Fade out on scroll</p>
  </div>
</app-animate-on-scroll>`);

  slideUpCode = signal(`<app-animate-on-scroll
  animation="slide-up"
  duration="800"
  offset="100"
>
  <div class="content-box">
    <h3>Slide Up</h3>
    <p>Slide up from bottom</p>
  </div>
</app-animate-on-scroll>`);

  slideDownCode = signal(`<app-animate-on-scroll
  animation="slide-down"
  duration="800"
>
  <div class="content-box">
    <h3>Slide Down</h3>
    <p>Slide down from top</p>
  </div>
</app-animate-on-scroll>`);

  slideLeftCode = signal(`<app-animate-on-scroll
  animation="slide-left"
  duration="800"
>
  <div class="content-box">
    <h3>Slide Left</h3>
    <p>Slide from right to left</p>
  </div>
</app-animate-on-scroll>`);

  slideRightCode = signal(`<app-animate-on-scroll
  animation="slide-right"
  duration="800"
>
  <div class="content-box">
    <h3>Slide Right</h3>
    <p>Slide from left to right</p>
  </div>
</app-animate-on-scroll>`);

  zoomInCode = signal(`<app-animate-on-scroll
  animation="zoom-in"
  duration="700"
  scale="0.5"
>
  <div class="content-box">
    <h3>Zoom In</h3>
    <p>Scale up entrance</p>
  </div>
</app-animate-on-scroll>`);

  zoomOutCode = signal(`<app-animate-on-scroll
  animation="zoom-out"
  duration="700"
  scale="1.5"
>
  <div class="content-box">
    <h3>Zoom Out</h3>
    <p>Scale down entrance</p>
  </div>
</app-animate-on-scroll>`);

  bounceCode = signal(`<app-animate-on-scroll
  animation="bounce"
  duration="1000"
>
  <div class="content-box">
    <h3>Bounce</h3>
    <p>Bouncy entrance effect</p>
  </div>
</app-animate-on-scroll>`);

  flipCode = signal(`<app-animate-on-scroll
  animation="flip"
  duration="900"
>
  <div class="content-box">
    <h3>Flip</h3>
    <p>Flip animation</p>
  </div>
</app-animate-on-scroll>`);

  // Cinematic Effects
  blurEntranceCode = signal(`<app-animate-on-scroll
  animation="fade-in"
  blur-amount="10"
  duration="1000"
  easing="ease-out"
>
  <div class="glass-card">
    <h3>Blur Entrance</h3>
    <p>Starts blurry, becomes sharp</p>
  </div>
</app-animate-on-scroll>`);

  glassmorphicBlurCode = signal(`<app-animate-on-scroll
  animation="fade-in"
  blur-amount="20"
  easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  duration="1200"
>
  <div class="glass-card premium">
    <h3>Premium Content</h3>
    <p>Glassmorphic blur with elastic easing</p>
  </div>
</app-animate-on-scroll>`);

  elasticEasingCode = signal(`<app-animate-on-scroll
  animation="slide-up"
  easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  duration="1000"
>
  <div class="content-box">
    <h3>Elastic Easing</h3>
    <p>Bouncy, playful animation curve</p>
  </div>
</app-animate-on-scroll>`);

  // 3D Transforms
  flipIn3dCode = signal(`<app-animate-on-scroll
  animation="flip-in"
  perspective="1000"
  rotate-x="90"
  duration="800"
>
  <div class="card-3d">
    <h3>Flip In 3D</h3>
    <p>Rotates along X-axis with perspective</p>
  </div>
</app-animate-on-scroll>`);

  rotate3dCode = signal(`<app-animate-on-scroll
  animation="rotate-3d"
  perspective="1500"
  rotate-y="180"
  duration="1000"
>
  <div class="card-3d">
    <h3>Rotate 3D</h3>
    <p>Complex 3D rotation from center</p>
  </div>
</app-animate-on-scroll>`);

  perspectiveDepthCode = signal(`<app-animate-on-scroll
  animation="zoom-in"
  perspective="2000"
  rotate-x="45"
  rotate-y="45"
  duration="1200"
>
  <div class="card-3d">
    <h3>Perspective Depth</h3>
    <p>Deep 3D perspective with multiple axes</p>
  </div>
</app-animate-on-scroll>`);

  // Stagger Effects
  staggerChildrenCode = signal(`<app-animate-on-scroll
  animation="fade-in"
  stagger="100"
>
  <div class="stagger-item">Analytics</div>
  <div class="stagger-item">Security</div>
  <div class="stagger-item">Speed</div>
  <div class="stagger-item">Cloud</div>
</app-animate-on-scroll>`);

  staggerFastCode = signal(`<app-animate-on-scroll
  animation="slide-up"
  stagger="50"
>
  <div class="stagger-item">Item 1</div>
  <div class="stagger-item">Item 2</div>
  <div class="stagger-item">Item 3</div>
  <div class="stagger-item">Item 4</div>
  <div class="stagger-item">Item 5</div>
</app-animate-on-scroll>`);

  staggerSlowCode = signal(`<app-animate-on-scroll
  animation="fade-in"
  stagger="200"
>
  <div class="stagger-item">Step 1</div>
  <div class="stagger-item">Step 2</div>
  <div class="stagger-item">Step 3</div>
</app-animate-on-scroll>`);

  // Scroll Interactions
  scrollTriggerCode = signal(`<!-- Element to animate -->
<app-animate-on-scroll
  animation="shake"
  trigger="#trigger-zone"
>
  <div class="sidebar">
    I shake when you scroll to the trigger!
  </div>
</app-animate-on-scroll>

<!-- Trigger element -->
<div id="trigger-zone" class="trigger-area">
  Trigger Zone - Scroll here
</div>`);

  scrollScrubbingCode = signal(`<app-animate-on-scroll
  animation="scrub"
  scrub="true"
  rotate-z="360"
  scale="1.5"
>
  <div class="scrub-element">
    Scroll to rotate and zoom!
  </div>
</app-animate-on-scroll>`);

  scrubRotateCode = signal(`<app-animate-on-scroll
  animation="scrub"
  scrub="true"
  rotate-z="720"
>
  <div class="scrub-element">
    Double rotation on scroll
  </div>
</app-animate-on-scroll>`);

  scrubScaleCode = signal(`<app-animate-on-scroll
  animation="scrub"
  scrub="true"
  scale="2"
>
  <div class="scrub-element">
    Scale 2x on scroll
  </div>
</app-animate-on-scroll>`);

  // Text Animations
  textCharCode = signal(`<app-animate-on-scroll
  animation="text-reveal"
  text-mode="char"
  stagger="50"
>
  <h2>Start Building</h2>
</app-animate-on-scroll>`);

  textWordCode = signal(`<app-animate-on-scroll
  animation="text-reveal"
  text-mode="word"
  stagger="100"
>
  <p>Create amazing scroll experiences today</p>
</app-animate-on-scroll>`);

  textStaggerCode = signal(`<app-animate-on-scroll
  animation="text-reveal"
  text-mode="char"
  stagger="30"
  duration="50"
>
  <h1>Fast Character Reveal</h1>
</app-animate-on-scroll>`);

  // Advanced Features
  shakeAnimationCode = signal(`<app-animate-on-scroll
  animation="shake"
  duration="500"
>
  <div class="content-box">
    <h3>Shake</h3>
    <p>Attention-grabbing shake effect</p>
  </div>
</app-animate-on-scroll>`);

  repeatAnimationCode = signal(`<app-animate-on-scroll
  animation="bounce"
  repeat="true"
  duration="1000"
>
  <div class="content-box">
    <h3>Repeat</h3>
    <p>Animation repeats on every scroll</p>
  </div>
</app-animate-on-scroll>`);

  mirrorEffectCode = signal(`<app-animate-on-scroll
  animation="slide-up"
  mirror="true"
  duration="800"
>
  <div class="content-box">
    <h3>Mirror</h3>
    <p>Reverses when scrolling up</p>
  </div>
</app-animate-on-scroll>`);

  customThresholdCode = signal(`<app-animate-on-scroll
  animation="fade-in"
  threshold="0.5"
  duration="600"
>
  <div class="content-box">
    <h3>Custom Threshold</h3>
    <p>Triggers at 50% visibility</p>
  </div>
</app-animate-on-scroll>`);

  delayTimingCode = signal(`<app-animate-on-scroll
  animation="fade-in"
  delay="500"
  duration="800"
>
  <div class="content-box">
    <h3>Delayed</h3>
    <p>500ms delay before animation</p>
  </div>
</app-animate-on-scroll>`);

  durationControlCode = signal(`<app-animate-on-scroll
  animation="slide-up"
  duration="2000"
>
  <div class="content-box">
    <h3>Slow Motion</h3>
    <p>2 second duration for dramatic effect</p>
  </div>
</app-animate-on-scroll>`);

  combinedEffectsCode = signal(`<app-animate-on-scroll
  animation="fade-in"
  blur-amount="15"
  perspective="1000"
  rotate-x="30"
  scale="0.8"
  duration="1200"
  easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
>
  <div class="card-3d premium">
    <h3>Combined Effects</h3>
    <p>Blur + 3D + Scale + Elastic Easing</p>
  </div>
</app-animate-on-scroll>`);
}
