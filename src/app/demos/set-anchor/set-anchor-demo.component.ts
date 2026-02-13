import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnchorPlaygroundComponent } from './components/anchor-playground/anchor-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-anchor-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AnchorPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-anchor-demo.component.html',
  styleUrl: './set-anchor-demo.component.scss',
})
export class SetAnchorDemoComponent {
  exampleVariants = [
    // Basic Layouts
    { id: 'vertical-left', title: 'Vertical Navigation (Left)', icon: '◀️' },
    { id: 'vertical-right', title: 'Vertical Navigation (Right)', icon: '▶️' },
    { id: 'horizontal-top', title: 'Horizontal Navigation (Top)', icon: '🔼' },
    { id: 'horizontal-bottom', title: 'Horizontal Navigation (Bottom)', icon: '🔽' },
    // Features
    { id: 'with-badges', title: 'Anchor with Badges', icon: '🔔' },
    { id: 'with-events', title: 'Horizontal with Events', icon: '⚡' },
    // Sizes
    { id: 'size-small', title: 'Small Size', icon: '🔸' },
    { id: 'size-medium', title: 'Medium Size (Default)', icon: '🔶' },
    { id: 'size-large', title: 'Large Size', icon: '🟠' },
    // Themes
    { id: 'theme-light', title: 'Light Theme', icon: '☀️' },
    { id: 'theme-dark', title: 'Dark Theme', icon: '🌙' },
    { id: 'theme-custom', title: 'Custom Theme', icon: '🎨' },
    // Number Styles
    { id: 'number-numeric', title: 'Numeric Style (1, 2, 3)', icon: '1️⃣' },
    { id: 'number-decimal', title: 'Decimal Style (01, 02, 03)', icon: '🔢' },
    { id: 'number-alpha', title: 'Alphabetic Style (a, b, c)', icon: '🔤' },
    { id: 'number-roman', title: 'Roman Style (i, ii, iii)', icon: 'ⅰ' },
    // Alignment
    { id: 'align-left', title: 'Horizontal Left Aligned', icon: '⬅️' },
    { id: 'align-center', title: 'Horizontal Center Aligned', icon: '↔️' },
    { id: 'align-right', title: 'Horizontal Right Aligned', icon: '➡️' },
    // Advanced
    { id: 'affix-behavior', title: 'Affix Behavior', icon: '📌' },
    { id: 'progress-indicator', title: 'Progress Indicator', icon: '📊' },
    { id: 'hash-sync', title: 'Hash/URL Synchronization', icon: '🔗' },
    { id: 'keyboard-nav', title: 'Keyboard Navigation', icon: '⌨️' },
    { id: 'nested-items', title: 'Nested & Collapsible Items', icon: '🌲' },
  ];

  // Sample data for anchor items
  verticalLeftItems = JSON.stringify([
    { id: 'intro', label: 'Introduction' },
    { id: 'features', label: 'Features' },
    { id: 'api', label: 'API Reference' },
  ]);

  verticalRightItems = JSON.stringify([
    { id: 'r-intro', label: 'Introduction' },
    { id: 'r-features', label: 'Features' },
    { id: 'r-api', label: 'API Reference' },
  ]);

  horizontalTopItems = JSON.stringify([
    { id: 't-home', label: 'Home' },
    { id: 't-about', label: 'About' },
    { id: 't-contact', label: 'Contact' },
  ]);

  horizontalBottomItems = JSON.stringify([
    { id: 'b-home', label: 'Home' },
    { id: 'b-about', label: 'About' },
    { id: 'b-contact', label: 'Contact' },
  ]);

  badgeItems = JSON.stringify([
    { id: 'intro-badge', label: 'Introduction', badge: '' },
    { id: 'content-badge', label: 'Main Content', badge: '5' },
    { id: 'conclusion-badge', label: 'Conclusion', badge: '' },
  ]);

  smallItems = JSON.stringify([
    { id: 's-1', label: 'Section 1' },
    { id: 's-2', label: 'Section 2' },
    { id: 's-3', label: 'Section 3' },
  ]);

  mediumItems = JSON.stringify([
    { id: 'm-1', label: 'Section 1' },
    { id: 'm-2', label: 'Section 2' },
    { id: 'm-3', label: 'Section 3' },
  ]);

  largeItems = JSON.stringify([
    { id: 'l-1', label: 'Section 1' },
    { id: 'l-2', label: 'Section 2' },
    { id: 'l-3', label: 'Section 3' },
  ]);

  numericItems = JSON.stringify([
    { id: 'num-1', label: 'Introduction' },
    { id: 'num-2', label: 'Features' },
    { id: 'num-3', label: 'Installation' },
  ]);

  decimalItems = JSON.stringify([
    { id: 'dec-1', label: 'Introduction' },
    { id: 'dec-2', label: 'Features' },
    { id: 'dec-3', label: 'Installation' },
  ]);

  alphaItems = JSON.stringify([
    { id: 'alpha-1', label: 'Introduction' },
    { id: 'alpha-2', label: 'Features' },
    { id: 'alpha-3', label: 'Installation' },
  ]);

  romanItems = JSON.stringify([
    { id: 'roman-1', label: 'Introduction' },
    { id: 'roman-2', label: 'Features' },
    { id: 'roman-3', label: 'Installation' },
  ]);

  affixItems = JSON.stringify([
    { id: 'aff-1', label: 'Section 1' },
    { id: 'aff-2', label: 'Section 2' },
    { id: 'aff-3', label: 'Section 3' },
    { id: 'aff-4', label: 'Section 4' },
  ]);

  progressItems = JSON.stringify([
    { id: 'ch-1', label: 'Chapter 1' },
    { id: 'ch-2', label: 'Chapter 2' },
    { id: 'ch-3', label: 'Chapter 3' },
  ]);

  hashItems = JSON.stringify([
    { id: 'hash-intro', label: '01. Introduction' },
    { id: 'hash-features', label: '02. Features' },
    { id: 'hash-examples', label: '03. Examples' },
    { id: 'hash-api', label: '04. API Reference' },
  ]);

  keyboardItems = JSON.stringify([
    { id: 'kb-1', label: '1. Setup' },
    { id: 'kb-2', label: '2. Configure' },
    { id: 'kb-3', label: '3. Build' },
    { id: 'kb-4', label: '4. Deploy' },
  ]);

  nestedItems = JSON.stringify([
    { id: 'n-1', label: '1. Getting Started', children: [
      { id: 'n-1-1', label: '1.1 Installation' },
      { id: 'n-1-2', label: '1.2 Setup' },
    ]},
    { id: 'n-2', label: '2. Components', children: [
      { id: 'n-2-1', label: '2.1 Basics', children: [
        { id: 'n-2-1-1', label: '2.1.1 Button' },
        { id: 'n-2-1-2', label: '2.1.2 Input' },
      ]},
      { id: 'n-2-2', label: '2.2 Advanced' },
    ]},
    { id: 'n-3', label: '3. Conclusion' },
  ]);

  // Code examples
  verticalLeftCode = signal(`<app-anchor
  mode="vertical"
  position="left"
  sticky="true"
  smooth-scroll="true"
  [items]="items"
></app-anchor>`);

  verticalRightCode = signal(`<app-anchor
  mode="vertical"
  position="right"
  sticky="true"
  smooth-scroll="true"
  [items]="items"
></app-anchor>`);

  horizontalTopCode = signal(`<app-anchor
  mode="horizontal"
  position="top"
  sticky="true"
  smooth-scroll="true"
  [items]="items"
></app-anchor>`);

  horizontalBottomCode = signal(`<app-anchor
  mode="horizontal"
  position="bottom"
  sticky="true"
  smooth-scroll="true"
  [items]="items"
></app-anchor>`);

  badgeCode = signal(`<app-anchor
  mode="vertical"
  position="left"
  show-badge="true"
  [items]="items"
></app-anchor>`);

  sizeSmallCode = signal(`<app-anchor
  mode="vertical"
  size="small"
  [items]="items"
></app-anchor>`);

  sizeMediumCode = signal(`<app-anchor
  mode="vertical"
  size="medium"
  [items]="items"
></app-anchor>`);

  sizeLargeCode = signal(`<app-anchor
  mode="vertical"
  size="large"
  [items]="items"
></app-anchor>`);

  numericCode = signal(`<app-anchor
  mode="vertical"
  show-numbers="true"
  number-style="numeric"
  [items]="items"
></app-anchor>`);

  decimalCode = signal(`<app-anchor
  mode="vertical"
  show-numbers="true"
  number-style="decimal"
  [items]="items"
></app-anchor>`);

  alphaCode = signal(`<app-anchor
  mode="vertical"
  show-numbers="true"
  number-style="alpha"
  [items]="items"
></app-anchor>`);

  romanCode = signal(`<app-anchor
  mode="vertical"
  show-numbers="true"
  number-style="roman"
  [items]="items"
></app-anchor>`);

  affixCode = signal(`<app-anchor
  mode="vertical"
  affix
  affix-offset="50"
  [items]="items"
></app-anchor>`);

  progressCode = signal(`<app-anchor
  mode="vertical"
  show-progress="true"
  [items]="items"
></app-anchor>`);

  hashCode = signal(`<app-anchor
  mode="vertical"
  update-hash="true"
  smooth-scroll="true"
  [items]="items"
></app-anchor>`);

  keyboardCode = signal(`<app-anchor
  mode="vertical"
  arrow-navigation="true"
  [items]="items"
></app-anchor>`);

  nestedCode = signal(`<app-anchor
  mode="vertical"
  collapsible="true"
  [items]="items"
></app-anchor>`);

  // Theme variants
  lightThemeCode = signal(`<app-anchor
  mode="vertical"
  theme="light"
  [items]="items"
></app-anchor>`);

  darkThemeCode = signal(`<app-anchor
  mode="vertical"
  theme="dark"
  [items]="items"
></app-anchor>`);

  customThemeCode = signal(`<app-anchor
  mode="vertical"
  theme="custom"
  [items]="items"
></app-anchor>`);

  // Event handling
  eventsCode = signal(`<app-anchor
  mode="horizontal"
  position="top"
  (change)="onActiveChange($event)"
  [items]="items"
></app-anchor>`);

  // Alignment options
  alignLeftCode = signal(`<app-anchor
  mode="horizontal"
  align="left"
  [items]="items"
></app-anchor>`);

  alignCenterCode = signal(`<app-anchor
  mode="horizontal"
  align="center"
  [items]="items"
></app-anchor>`);

  alignRightCode = signal(`<app-anchor
  mode="horizontal"
  align="right"
  [items]="items"
></app-anchor>`);

  playgroundCode = signal(`<app-anchor
  [mode]="mode"
  [position]="position"
  [sticky]="sticky"
  [smooth-scroll]="smoothScroll"
  [offset-top]="offsetTop"
  [show-numbers]="showNumbers"
  [items]="items"
></app-anchor>`);

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

