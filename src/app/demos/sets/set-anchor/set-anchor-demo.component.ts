import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DmAnchorPlaygroundComponent } from '../../../playground/sets/set-anchor-playground/anchor-playground.component';

@Component({
  selector: 'dm-set-anchor-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmAnchorPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-anchor-demo.component.html',
  styleUrl: './set-anchor-demo.component.scss',
})
export class DmSetAnchorDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    // Basic Layouts
    { id: 'vertical-left', title: 'Vertical Navigation (Left)', icon: 'â—€ï¸', color: '#3b82f6' },
    { id: 'vertical-right', title: 'Vertical Navigation (Right)', icon: 'â–¶ï¸', color: '#3b82f6' },
    { id: 'horizontal-top', title: 'Horizontal Navigation (Top)', icon: 'ðŸ”¼', color: '#3b82f6' },
    {
      id: 'horizontal-bottom',
      title: 'Horizontal Navigation (Bottom)',
      icon: 'ðŸ”½',
      color: '#3b82f6',
    },
    // Features
    { id: 'with-badges', title: 'Anchor with Badges', icon: 'ðŸ””', color: '#f59e0b' },
    { id: 'with-events', title: 'Horizontal with Events', icon: 'âš¡', color: '#f59e0b' },
    // Sizes
    { id: 'size-small', title: 'Small Size', icon: 'ðŸ”¸', color: '#10b981' },
    { id: 'size-medium', title: 'Medium Size (Default)', icon: 'ðŸ”¶', color: '#10b981' },
    { id: 'size-large', title: 'Large Size', icon: 'ðŸŸ ', color: '#10b981' },
    // Themes
    { id: 'theme-light', title: 'Light Theme', icon: 'â˜€ï¸', color: '#ef4444' },
    { id: 'theme-dark', title: 'Dark Theme', icon: 'ðŸŒ™', color: '#ef4444' },
    { id: 'theme-custom', title: 'Custom Theme', icon: 'ðŸŽ¨', color: '#ef4444' },
    // Number Styles
    { id: 'number-numeric', title: 'Numeric Style (1, 2, 3)', icon: '1ï¸âƒ£', color: '#8b5cf6' },
    { id: 'number-decimal', title: 'Decimal Style (01, 02, 03)', icon: 'ðŸ”¢', color: '#8b5cf6' },
    { id: 'number-alpha', title: 'Alphabetic Style (a, b, c)', icon: 'ðŸ”¤', color: '#8b5cf6' },
    { id: 'number-roman', title: 'Roman Style (i, ii, iii)', icon: 'â…°', color: '#8b5cf6' },
    // Alignment
    { id: 'align-left', title: 'Horizontal Left Aligned', icon: 'â¬…ï¸', color: '#ec4899' },
    { id: 'align-center', title: 'Horizontal Center Aligned', icon: 'â†”ï¸', color: '#ec4899' },
    { id: 'align-right', title: 'Horizontal Right Aligned', icon: 'âž¡ï¸', color: '#ec4899' },
    // Advanced
    { id: 'affix-behavior', title: 'Affix Behavior', icon: 'ðŸ“Œ', color: '#06b6d4' },
    { id: 'progress-indicator', title: 'Progress Indicator', icon: 'ðŸ“Š', color: '#06b6d4' },
    { id: 'hash-sync', title: 'Hash/URL Synchronization', icon: 'ðŸ”—', color: '#06b6d4' },
    { id: 'keyboard-nav', title: 'Keyboard Navigation', icon: 'âŒ¨ï¸', color: '#06b6d4' },
    { id: 'nested-items', title: 'Nested & Collapsible Items', icon: 'ðŸŒ²', color: '#06b6d4' },
  ];

  // Sample data for anchor items
  verticalLeftItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'features', label: 'Features' },
    { id: 'api', label: 'API Reference' },
  ];

  verticalRightItems = [
    { id: 'r-intro', label: 'Introduction' },
    { id: 'r-features', label: 'Features' },
    { id: 'r-api', label: 'API Reference' },
  ];

  horizontalTopItems = [
    { id: 't-home', label: 'Home' },
    { id: 't-about', label: 'About' },
    { id: 't-contact', label: 'Contact' },
  ];

  horizontalBottomItems = [
    { id: 'b-home', label: 'Home' },
    { id: 'b-about', label: 'About' },
    { id: 'b-contact', label: 'Contact' },
  ];

  badgeItems = [
    { id: 'intro-badge', label: 'Introduction', badge: '' },
    { id: 'content-badge', label: 'Main Content', badge: '5' },
    { id: 'conclusion-badge', label: 'Conclusion', badge: '' },
  ];

  smallItems = [
    { id: 's-1', label: 'Section 1' },
    { id: 's-2', label: 'Section 2' },
    { id: 's-3', label: 'Section 3' },
  ];

  mediumItems = [
    { id: 'm-1', label: 'Section 1' },
    { id: 'm-2', label: 'Section 2' },
    { id: 'm-3', label: 'Section 3' },
  ];

  largeItems = [
    { id: 'l-1', label: 'Section 1' },
    { id: 'l-2', label: 'Section 2' },
    { id: 'l-3', label: 'Section 3' },
  ];

  numericItems = [
    { id: 'num-1', label: 'Introduction' },
    { id: 'num-2', label: 'Features' },
    { id: 'num-3', label: 'Installation' },
  ];

  decimalItems = [
    { id: 'dec-1', label: 'Introduction' },
    { id: 'dec-2', label: 'Features' },
    { id: 'dec-3', label: 'Installation' },
  ];

  alphaItems = [
    { id: 'alpha-1', label: 'Introduction' },
    { id: 'alpha-2', label: 'Features' },
    { id: 'alpha-3', label: 'Installation' },
  ];

  romanItems = [
    { id: 'roman-1', label: 'Introduction' },
    { id: 'roman-2', label: 'Features' },
    { id: 'roman-3', label: 'Installation' },
  ];

  affixItems = [
    { id: 'aff-1', label: 'Section 1' },
    { id: 'aff-2', label: 'Section 2' },
    { id: 'aff-3', label: 'Section 3' },
    { id: 'aff-4', label: 'Section 4' },
  ];

  progressItems = [
    { id: 'ch-1', label: 'Chapter 1' },
    { id: 'ch-2', label: 'Chapter 2' },
    { id: 'ch-3', label: 'Chapter 3' },
  ];

  hashItems = [
    { id: 'hash-intro', label: '01. Introduction' },
    { id: 'hash-features', label: '02. Features' },
    { id: 'hash-examples', label: '03. Examples' },
    { id: 'hash-api', label: '04. API Reference' },
  ];

  keyboardItems = [
    { id: 'kb-1', label: '1. Setup' },
    { id: 'kb-2', label: '2. Configure' },
    { id: 'kb-3', label: '3. Build' },
    { id: 'kb-4', label: '4. Deploy' },
  ];

  nestedItems = [
    {
      id: 'n-1',
      label: '1. Getting Started',
      children: [
        { id: 'n-1-1', label: '1.1 Installation' },
        { id: 'n-1-2', label: '1.2 Setup' },
      ],
    },
    {
      id: 'n-2',
      label: '2. Components',
      children: [
        {
          id: 'n-2-1',
          label: '2.1 Basics',
          children: [
            { id: 'n-2-1-1', label: '2.1.1 Button' },
            { id: 'n-2-1-2', label: '2.1.2 Input' },
          ],
        },
        { id: 'n-2-2', label: '2.2 Advanced' },
      ],
    },
    { id: 'n-3', label: '3. Conclusion' },
  ];

  // Code examples
  verticalLeftCode = signal(`<ui-anchor
  mode="vertical"
  position="left"
  sticky="true"
  smooth-scroll="true"
  [links]="items"
></ui-anchor>`);

  verticalRightCode = signal(`<ui-anchor
  mode="vertical"
  position="right"
  sticky="true"
  smooth-scroll="true"
  [links]="items"
></ui-anchor>`);

  horizontalTopCode = signal(`<ui-anchor
  mode="horizontal"
  position="top"
  sticky="true"
  smooth-scroll="true"
  [links]="items"
></ui-anchor>`);

  horizontalBottomCode = signal(`<ui-anchor
  mode="horizontal"
  position="bottom"
  sticky="true"
  smooth-scroll="true"
  [links]="items"
></ui-anchor>`);

  badgeCode = signal(`<ui-anchor
  mode="vertical"
  position="left"
  show-badge="true"
  [links]="items"
></ui-anchor>`);

  sizeSmallCode = signal(`<ui-anchor
  mode="vertical"
  size="small"
  [links]="items"
></ui-anchor>`);

  sizeMediumCode = signal(`<ui-anchor
  mode="vertical"
  size="medium"
  [links]="items"
></ui-anchor>`);

  sizeLargeCode = signal(`<ui-anchor
  mode="vertical"
  size="large"
  [links]="items"
></ui-anchor>`);

  numericCode = signal(`<ui-anchor
  mode="vertical"
  show-numbers="true"
  number-style="numeric"
  [links]="items"
></ui-anchor>`);

  decimalCode = signal(`<ui-anchor
  mode="vertical"
  show-numbers="true"
  number-style="decimal"
  [links]="items"
></ui-anchor>`);

  alphaCode = signal(`<ui-anchor
  mode="vertical"
  show-numbers="true"
  number-style="alpha"
  [links]="items"
></ui-anchor>`);

  romanCode = signal(`<ui-anchor
  mode="vertical"
  show-numbers="true"
  number-style="roman"
  [links]="items"
></ui-anchor>`);

  affixCode = signal(`<ui-anchor
  mode="vertical"
  affix
  affix-offset="50"
  [links]="items"
></ui-anchor>`);

  progressCode = signal(`<ui-anchor
  mode="vertical"
  show-progress="true"
  [links]="items"
></ui-anchor>`);

  hashCode = signal(`<ui-anchor
  mode="vertical"
  update-hash="true"
  smooth-scroll="true"
  [links]="items"
></ui-anchor>`);

  keyboardCode = signal(`<ui-anchor
  mode="vertical"
  arrow-navigation="true"
  [links]="items"
></ui-anchor>`);

  nestedCode = signal(`<ui-anchor
  mode="vertical"
  collapsible="true"
  [links]="items"
></ui-anchor>`);

  // Theme variants
  lightThemeCode = signal(`<ui-anchor
  mode="vertical"
  theme="light"
  [links]="items"
></ui-anchor>`);

  darkThemeCode = signal(`<ui-anchor
  mode="vertical"
  theme="dark"
  [links]="items"
></ui-anchor>`);

  customThemeCode = signal(`<ui-anchor
  mode="vertical"
  theme="custom"
  [links]="items"
></ui-anchor>`);

  // Event handling
  eventsCode = signal(`<ui-anchor
  mode="horizontal"
  position="top"
  (change)="onActiveChange($event)"
  [links]="items"
></ui-anchor>`);

  // Alignment options
  alignLeftCode = signal(`<ui-anchor
  mode="horizontal"
  align="left"
  [links]="items"
></ui-anchor>`);

  alignCenterCode = signal(`<ui-anchor
  mode="horizontal"
  align="center"
  [links]="items"
></ui-anchor>`);

  alignRightCode = signal(`<ui-anchor
  mode="horizontal"
  align="right"
  [links]="items"
></ui-anchor>`);

  playgroundCode = signal(`<ui-anchor
  [mode]="mode"
  [position]="position"
  [sticky]="sticky"
  [smooth-scroll]="smoothScroll"
  [offset-top]="offsetTop"
  [show-numbers]="showNumbers"
  [links]="items"
></ui-anchor>`);
}
