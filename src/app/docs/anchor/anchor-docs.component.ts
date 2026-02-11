import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-anchor-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './anchor-docs.component.html',
  styleUrls: ['./anchor-docs.component.scss'],
})
export class AnchorDocsComponent {
  anchorConfig = COMPONENT_CONFIGS['anchor'] || {
    id: 'anchor',
    tagName: 'ui-anchor',
    label: 'Anchor',
    description: 'A navigation component for scrolling to content sections.',
    props: [
      { name: 'container', type: 'string', defaultValue: 'window' },
      { name: 'offset', type: 'number', defaultValue: 0 },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'vertical-badges';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    'vertical-badges': `<app-anchor mode="vertical" position="left">
  <app-anchor-item label="Introduction" target="intro"></app-anchor-item>
  <app-anchor-item label="Main Content" target="main" badge="5"></app-anchor-item>
  <app-anchor-item label="Conclusion" target="conclusion"></app-anchor-item>
</app-anchor>`,
    'horizontal-events': `<app-anchor mode="horizontal" position="top">
  <app-anchor-item label="Home" target="home"></app-anchor-item>
  <app-anchor-item label="About" target="about" badge="!"></app-anchor-item>
  <app-anchor-item label="Services" target="services"></app-anchor-item>
  <app-anchor-item label="Contact" target="contact"></app-anchor-item>
</app-anchor>`,
    'size-small': `<app-anchor size="small">
  <app-anchor-item label="Section 1" target="s1"></app-anchor-item>
  <app-anchor-item label="Section 2" target="s2"></app-anchor-item>
  <app-anchor-item label="Section 3" target="s3"></app-anchor-item>
</app-anchor>`,
    'size-medium': `<app-anchor size="medium">
  <app-anchor-item label="Section 1" target="s1"></app-anchor-item>
  <app-anchor-item label="Section 2" target="s2"></app-anchor-item>
  <app-anchor-item label="Section 3" target="s3"></app-anchor-item>
</app-anchor>`,
    'size-large': `<app-anchor size="large">
  <app-anchor-item label="Section 1" target="s1"></app-anchor-item>
  <app-anchor-item label="Section 2" target="s2"></app-anchor-item>
  <app-anchor-item label="Section 3" target="s3"></app-anchor-item>
</app-anchor>`,
    'theme-light': `<app-anchor theme="light">
  <app-anchor-item label="Introduction" target="intro"></app-anchor-item>
  <app-anchor-item label="Features" target="features"></app-anchor-item>
</app-anchor>`,
    'theme-dark': `<app-anchor theme="dark">
  <app-anchor-item label="Introduction" target="intro"></app-anchor-item>
  <app-anchor-item label="Features" target="features"></app-anchor-item>
</app-anchor>`,
    'number-numeric': `<app-anchor show-numbers number-style="numeric">
  <app-anchor-item label="Introduction" target="intro"></app-anchor-item>
  <app-anchor-item label="Features" target="features"></app-anchor-item>
  <app-anchor-item label="Installation" target="install"></app-anchor-item>
  <app-anchor-item label="Usage" target="usage"></app-anchor-item>
</app-anchor>`,
    'number-decimal': `<app-anchor show-numbers number-style="decimal">
  <app-anchor-item label="Introduction" target="intro"></app-anchor-item>
  <app-anchor-item label="Features" target="features"></app-anchor-item>
  <app-anchor-item label="Installation" target="install"></app-anchor-item>
</app-anchor>`,
    'number-alpha': `<app-anchor show-numbers number-style="alphabetic">
  <app-anchor-item label="Introduction" target="intro"></app-anchor-item>
  <app-anchor-item label="Features" target="features"></app-anchor-item>
  <app-anchor-item label="Installation" target="install"></app-anchor-item>
</app-anchor>`,
    'number-roman': `<app-anchor show-numbers number-style="roman">
  <app-anchor-item label="Introduction" target="intro"></app-anchor-item>
  <app-anchor-item label="Features" target="features"></app-anchor-item>
  <app-anchor-item label="Installation" target="install"></app-anchor-item>
</app-anchor>`,
    'affix': `<app-anchor affix affix-offset="50">
  <app-anchor-item label="Section 1" target="s1"></app-anchor-item>
  <app-anchor-item label="Section 2" target="s2"></app-anchor-item>
  <app-anchor-item label="Section 3" target="s3"></app-anchor-item>
  <app-anchor-item label="Section 4" target="s4"></app-anchor-item>
</app-anchor>`,
    'progress': `<app-anchor show-progress>
  <app-anchor-item label="Chapter 1" target="ch1"></app-anchor-item>
  <app-anchor-item label="Chapter 2" target="ch2"></app-anchor-item>
  <app-anchor-item label="Chapter 3" target="ch3"></app-anchor-item>
</app-anchor>`,
    'hash-sync': `<app-anchor update-hash>
  <app-anchor-item label="01. Introduction" target="hash-intro"></app-anchor-item>
  <app-anchor-item label="02. Features" target="hash-features"></app-anchor-item>
  <app-anchor-item label="03. Examples" target="hash-examples"></app-anchor-item>
  <app-anchor-item label="04. API Reference" target="hash-api"></app-anchor-item>
</app-anchor>`,
    'keyboard-nav': `<app-anchor arrow-navigation>
  <app-anchor-item label="1. Setup" target="step1"></app-anchor-item>
  <app-anchor-item label="2. Configure" target="step2"></app-anchor-item>
  <app-anchor-item label="3. Build" target="step3"></app-anchor-item>
  <app-anchor-item label="4. Deploy" target="step4"></app-anchor-item>
</app-anchor>`,
    'nested': `<app-anchor collapsible>
  <app-anchor-item label="1. Getting Started" target="start">
    <app-anchor-item label="1.1 Installation" target="install"></app-anchor-item>
    <app-anchor-item label="1.2 Setup" target="setup"></app-anchor-item>
  </app-anchor-item>
  <app-anchor-item label="2. Components" target="components">
    <app-anchor-item label="2.1 Basics" target="basics">
      <app-anchor-item label="2.1.1 Button" target="button"></app-anchor-item>
      <app-anchor-item label="2.1.2 Input" target="input"></app-anchor-item>
    </app-anchor-item>
    <app-anchor-item label="2.2 Advanced" target="advanced">
      <app-anchor-item label="2.2.1 Data Table" target="table"></app-anchor-item>
      <app-anchor-item label="2.2.2 Tree View" target="tree"></app-anchor-item>
    </app-anchor-item>
  </app-anchor-item>
  <app-anchor-item label="3. Conclusion" target="conclusion"></app-anchor-item>
</app-anchor>`,
  };

  getActiveExampleLabel() {
    const labels: Record<string, string> = {
      'vertical-badges': 'Vertical Anchor with Badges',
      'horizontal-events': 'Horizontal Anchor with Events',
      'size-small': 'Size: Small',
      'size-medium': 'Size: Medium',
      'size-large': 'Size: Large',
      'theme-light': 'Theme: Light',
      'theme-dark': 'Theme: Dark',
      'number-numeric': 'Numbers: Numeric (1, 2, 3)',
      'number-decimal': 'Numbers: Decimal (01, 02, 03)',
      'number-alpha': 'Numbers: Alphabetic (a, b, c)',
      'number-roman': 'Numbers: Roman (i, ii, iii)',
      'affix': 'Affix Behavior',
      'progress': 'Progress Indicator',
      'hash-sync': 'Hash/URL Synchronization',
      'keyboard-nav': 'Keyboard Navigation',
      'nested': 'Nested & Collapsible Items',
    };
    return labels[this.activeExample] || this.activeExample;
  }

  setTab(tab: 'examples' | 'playground' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
    this.isCodeVisible = false;
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }
}
