import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmAnimateOnScrollSetPlaygroundComponent } from '../../../playground/sets/animate-on-scroll-playground/animate-on-scroll-playground.component';

import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'dm-animate-on-scroll-set-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmAnimateOnScrollSetPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ExampleSectionComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './animate-on-scroll-demo.component.html',
  styleUrl: './animate-on-scroll-demo.component.scss',
})
export class DmAnimateOnScrollDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    // Basic Animations
    { id: 'fade-in-basic', title: 'Fade In', icon: 'sunrise', iconLibrary: 'lucide' },
    { id: 'fade-out-basic', title: 'Fade Out', icon: 'sunset', iconLibrary: 'lucide' },
    { id: 'slide-up', title: 'Slide Up', icon: 'arrow-up', iconLibrary: 'lucide' },
    { id: 'slide-down', title: 'Slide Down', icon: 'arrow-down', iconLibrary: 'lucide' },
    { id: 'slide-left', title: 'Slide Left', icon: 'arrow-left', iconLibrary: 'lucide' },
    { id: 'slide-right', title: 'Slide Right', icon: 'arrow-right', iconLibrary: 'lucide' },
    { id: 'zoom-in', title: 'Zoom In', icon: 'zoom-in', iconLibrary: 'lucide' },
    { id: 'zoom-out', title: 'Zoom Out', icon: 'zoom-out', iconLibrary: 'lucide' },
    { id: 'bounce', title: 'Bounce', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'flip', title: 'Flip', icon: 'refresh-cw', iconLibrary: 'lucide' },

    // Cinematic Effects
    { id: 'blur-entrance', title: 'Blur Entrance', icon: 'sparkles', iconLibrary: 'lucide' },
    {
      id: 'glassmorphic-blur',
      title: 'Glassmorphic Blur',
      icon: 'clapperboard',
      iconLibrary: 'lucide',
    },
    { id: 'elastic-easing', title: 'Elastic Easing', icon: 'activity', iconLibrary: 'lucide' },

    // 3D Transforms
    { id: 'flip-in-3d', title: 'Flip In 3D', icon: 'dice-3', iconLibrary: 'lucide' },
    { id: 'rotate-3d', title: 'Rotate 3D', icon: 'rotate-3d', iconLibrary: 'lucide' },
    {
      id: 'perspective-depth',
      title: 'Perspective Depth',
      icon: 'mountain',
      iconLibrary: 'lucide',
    },

    // Stagger Effects
    { id: 'stagger-children', title: 'Stagger Children', icon: 'music', iconLibrary: 'lucide' },
    { id: 'stagger-fast', title: 'Stagger Fast', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'stagger-slow', title: 'Stagger Slow', icon: 'turtle', iconLibrary: 'lucide' },

    // Scroll Interactions
    { id: 'scroll-trigger', title: 'Scroll Trigger', icon: 'target', iconLibrary: 'lucide' },
    { id: 'scroll-scrubbing', title: 'Scroll Scrubbing', icon: 'sliders', iconLibrary: 'lucide' },
    { id: 'scrub-rotate', title: 'Scrub Rotate', icon: 'refresh-cw', iconLibrary: 'lucide' },
    { id: 'scrub-scale', title: 'Scrub Scale', icon: 'ruler', iconLibrary: 'lucide' },

    // Text Animations
    { id: 'text-char', title: 'Text Character', icon: 'case-sensitive', iconLibrary: 'lucide' },
    { id: 'text-word', title: 'Text Word', icon: 'file-text', iconLibrary: 'lucide' },
    { id: 'text-stagger', title: 'Text Stagger', icon: 'pen-line', iconLibrary: 'lucide' },

    // Advanced Features
    { id: 'shake-animation', title: 'Shake', icon: 'waves', iconLibrary: 'lucide' },
    { id: 'repeat-animation', title: 'Repeat Animation', icon: 'repeat', iconLibrary: 'lucide' },
    { id: 'mirror-effect', title: 'Mirror Effect', icon: 'flip-horizontal', iconLibrary: 'lucide' },
    {
      id: 'custom-threshold',
      title: 'Custom Threshold',
      icon: 'bar-chart-2',
      iconLibrary: 'lucide',
    },
    { id: 'delay-timing', title: 'Delay Timing', icon: 'timer', iconLibrary: 'lucide' },
    { id: 'duration-control', title: 'Duration Control', icon: 'hourglass', iconLibrary: 'lucide' },
    { id: 'combined-effects', title: 'Combined Effects', icon: 'palette', iconLibrary: 'lucide' },
  ];

  // Basic Animations
  fadeInBasicCode = signal(`<ui-animate-on-scroll
  animation="fade-in"
  duration="600"
>
  <div class="content-box">
    <h3>Fade In</h3>
    <p>Smooth fade entrance</p>
  </div>
</ui-animate-on-scroll>`);

  fadeOutBasicCode = signal(`<ui-animate-on-scroll
  animation="fade-out"
  duration="600"
>
  <div class="content-box">
    <h3>Fade Out</h3>
    <p>Fade out on scroll</p>
  </div>
</ui-animate-on-scroll>`);

  slideUpCode = signal(`<ui-animate-on-scroll
  animation="slide-up"
  duration="800"
  offset="100"
>
  <div class="content-box">
    <h3>Slide Up</h3>
    <p>Slide up from bottom</p>
  </div>
</ui-animate-on-scroll>`);

  slideDownCode = signal(`<ui-animate-on-scroll
  animation="slide-down"
  duration="800"
>
  <div class="content-box">
    <h3>Slide Down</h3>
    <p>Slide down from top</p>
  </div>
</ui-animate-on-scroll>`);

  slideLeftCode = signal(`<ui-animate-on-scroll
  animation="slide-left"
  duration="800"
>
  <div class="content-box">
    <h3>Slide Left</h3>
    <p>Slide from right to left</p>
  </div>
</ui-animate-on-scroll>`);

  slideRightCode = signal(`<ui-animate-on-scroll
  animation="slide-right"
  duration="800"
>
  <div class="content-box">
    <h3>Slide Right</h3>
    <p>Slide from left to right</p>
  </div>
</ui-animate-on-scroll>`);

  zoomInCode = signal(`<ui-animate-on-scroll
  animation="zoom-in"
  duration="700"
  scale="0.5"
>
  <div class="content-box">
    <h3>Zoom In</h3>
    <p>Scale up entrance</p>
  </div>
</ui-animate-on-scroll>`);

  zoomOutCode = signal(`<ui-animate-on-scroll
  animation="zoom-out"
  duration="700"
  scale="1.5"
>
  <div class="content-box">
    <h3>Zoom Out</h3>
    <p>Scale down entrance</p>
  </div>
</ui-animate-on-scroll>`);

  bounceCode = signal(`<ui-animate-on-scroll
  animation="bounce"
  duration="1000"
>
  <div class="content-box">
    <h3>Bounce</h3>
    <p>Bouncy entrance effect</p>
  </div>
</ui-animate-on-scroll>`);

  flipCode = signal(`<ui-animate-on-scroll
  animation="flip"
  duration="900"
>
  <div class="content-box">
    <h3>Flip</h3>
    <p>Flip animation</p>
  </div>
</ui-animate-on-scroll>`);

  // Cinematic Effects
  blurEntranceCode = signal(`<ui-animate-on-scroll
  animation="fade-in"
  blur-amount="10"
  duration="1000"
  easing="ease-out"
>
  <div class="glass-card">
    <h3>Blur Entrance</h3>
    <p>Starts blurry, becomes sharp</p>
  </div>
</ui-animate-on-scroll>`);

  glassmorphicBlurCode = signal(`<ui-animate-on-scroll
  animation="fade-in"
  blur-amount="20"
  easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  duration="1200"
>
  <div class="glass-card premium">
    <h3>Premium Content</h3>
    <p>Glassmorphic blur with elastic easing</p>
  </div>
</ui-animate-on-scroll>`);

  elasticEasingCode = signal(`<ui-animate-on-scroll
  animation="slide-up"
  easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  duration="1000"
>
  <div class="content-box">
    <h3>Elastic Easing</h3>
    <p>Bouncy, playful animation curve</p>
  </div>
</ui-animate-on-scroll>`);

  // 3D Transforms
  flipIn3dCode = signal(`<ui-animate-on-scroll
  animation="flip-in"
  perspective="1000"
  rotate-x="90"
  duration="800"
>
  <div class="card-3d">
    <h3>Flip In 3D</h3>
    <p>Rotates along X-axis with perspective</p>
  </div>
</ui-animate-on-scroll>`);

  rotate3dCode = signal(`<ui-animate-on-scroll
  animation="rotate-3d"
  perspective="1500"
  rotate-y="180"
  duration="1000"
>
  <div class="card-3d">
    <h3>Rotate 3D</h3>
    <p>Complex 3D rotation from center</p>
  </div>
</ui-animate-on-scroll>`);

  perspectiveDepthCode = signal(`<ui-animate-on-scroll
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
</ui-animate-on-scroll>`);

  // Stagger Effects
  staggerChildrenCode = signal(`<ui-animate-on-scroll
  animation="fade-in"
  stagger="100"
>
  <div class="stagger-item">Analytics</div>
  <div class="stagger-item">Security</div>
  <div class="stagger-item">Speed</div>
  <div class="stagger-item">Cloud</div>
</ui-animate-on-scroll>`);

  staggerFastCode = signal(`<ui-animate-on-scroll
  animation="slide-up"
  stagger="50"
>
  <div class="stagger-item">Item 1</div>
  <div class="stagger-item">Item 2</div>
  <div class="stagger-item">Item 3</div>
  <div class="stagger-item">Item 4</div>
  <div class="stagger-item">Item 5</div>
</ui-animate-on-scroll>`);

  staggerSlowCode = signal(`<ui-animate-on-scroll
  animation="fade-in"
  stagger="200"
>
  <div class="stagger-item">Step 1</div>
  <div class="stagger-item">Step 2</div>
  <div class="stagger-item">Step 3</div>
</ui-animate-on-scroll>`);

  // Scroll Interactions
  scrollTriggerCode = signal(`<!-- Element to animate -->
<ui-animate-on-scroll
  animation="shake"
  trigger="#trigger-zone"
>
  <div class="sidebar">
    I shake when you scroll to the trigger!
  </div>
</ui-animate-on-scroll>

<!-- Trigger element -->
<div id="trigger-zone" class="trigger-area">
  Trigger Zone - Scroll here
</div>`);

  scrollScrubbingCode = signal(`<ui-animate-on-scroll
  animation="scrub"
  scrub="true"
  rotate-z="360"
  scale="1.5"
>
  <div class="scrub-element">
    Scroll to rotate and zoom!
  </div>
</ui-animate-on-scroll>`);

  scrubRotateCode = signal(`<ui-animate-on-scroll
  animation="scrub"
  scrub="true"
  rotate-z="720"
>
  <div class="scrub-element">
    Double rotation on scroll
  </div>
</ui-animate-on-scroll>`);

  scrubScaleCode = signal(`<ui-animate-on-scroll
  animation="scrub"
  scrub="true"
  scale="2"
>
  <div class="scrub-element">
    Scale 2x on scroll
  </div>
</ui-animate-on-scroll>`);

  // Text Animations
  textCharCode = signal(`<ui-animate-on-scroll
  animation="text-reveal"
  text-mode="char"
  stagger="50"
>
  <h2>Start Building</h2>
</ui-animate-on-scroll>`);

  textWordCode = signal(`<ui-animate-on-scroll
  animation="text-reveal"
  text-mode="word"
  stagger="100"
>
  <p>Create amazing scroll experiences today</p>
</ui-animate-on-scroll>`);

  textStaggerCode = signal(`<ui-animate-on-scroll
  animation="text-reveal"
  text-mode="char"
  stagger="30"
  duration="50"
>
  <h1>Fast Character Reveal</h1>
</ui-animate-on-scroll>`);

  // Advanced Features
  shakeAnimationCode = signal(`<ui-animate-on-scroll
  animation="shake"
  duration="500"
>
  <div class="content-box">
    <h3>Shake</h3>
    <p>Attention-grabbing shake effect</p>
  </div>
</ui-animate-on-scroll>`);

  repeatAnimationCode = signal(`<ui-animate-on-scroll
  animation="bounce"
  repeat="true"
  duration="1000"
>
  <div class="content-box">
    <h3>Repeat</h3>
    <p>Animation repeats on every scroll</p>
  </div>
</ui-animate-on-scroll>`);

  mirrorEffectCode = signal(`<ui-animate-on-scroll
  animation="slide-up"
  mirror="true"
  duration="800"
>
  <div class="content-box">
    <h3>Mirror</h3>
    <p>Reverses when scrolling up</p>
  </div>
</ui-animate-on-scroll>`);

  customThresholdCode = signal(`<ui-animate-on-scroll
  animation="fade-in"
  threshold="0.5"
  duration="600"
>
  <div class="content-box">
    <h3>Custom Threshold</h3>
    <p>Triggers at 50% visibility</p>
  </div>
</ui-animate-on-scroll>`);

  delayTimingCode = signal(`<ui-animate-on-scroll
  animation="fade-in"
  delay="500"
  duration="800"
>
  <div class="content-box">
    <h3>Delayed</h3>
    <p>500ms delay before animation</p>
  </div>
</ui-animate-on-scroll>`);

  durationControlCode = signal(`<ui-animate-on-scroll
  animation="slide-up"
  duration="2000"
>
  <div class="content-box">
    <h3>Slow Motion</h3>
    <p>2 second duration for dramatic effect</p>
  </div>
</ui-animate-on-scroll>`);

  combinedEffectsCode = signal(`<ui-animate-on-scroll
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
</ui-animate-on-scroll>`);
}
