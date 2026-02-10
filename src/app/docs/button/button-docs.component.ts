import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Example {
  id: string;
  title: string;
  description: string;
  code: string;
  hidePreview?: boolean;
}

interface PropItem {
  name: string;
  type: string;
  default: string;
  description: string;
}

@Component({
  selector: 'app-button-docs',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button-docs.component.html',
  styleUrl: './button-docs.component.scss',
})
export class ButtonDocsComponent {
  activeSection = signal<string>('usage');

  sections = [
    { id: 'usage', label: 'Usage' },
    { id: 'variants', label: 'Variants' },
    { id: 'sizes', label: 'Sizes' },
    { id: 'states', label: 'States' },
    { id: 'composition', label: 'Composition' },
    { id: 'props', label: 'Props' },
    { id: 'accessibility', label: 'Accessibility' },
  ];

  importExample = `import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <ui-button>Click me</ui-button>
  \`
})
export class MyComponent {}`;

  usageExamples: Example[] = [
    {
      id: 'basic',
      title: 'Basic Usage',
      description: 'The Button component is used to trigger an action or event.',
      code: `<ui-button>Button</ui-button>`,
    },
    {
      id: 'with-icon',
      title: 'Button with Icon',
      description: 'You can add left and right icons to the Button component.',
      code: `<!-- Icon on the left -->
<ui-button>
  <span slot="icon-left">📧</span>
  Email
</ui-button>

<!-- Icon on the right -->
<ui-button>
  Download
  <span slot="icon-right">⬇️</span>
</ui-button>`,
    },
  ];

  variantExamples: Example[] = [
    {
      id: 'variants',
      title: 'Button Variants',
      description: 'Use the variant prop to change the visual style of the Button.',
      code: `<ui-button variant="primary">Primary</ui-button>
<ui-button variant="secondary">Secondary</ui-button>
<ui-button variant="outline">Outline</ui-button>
<ui-button variant="ghost">Ghost</ui-button>
<ui-button variant="link">Link</ui-button>`,
    },
  ];

  sizeExamples: Example[] = [
    {
      id: 'sizes',
      title: 'Button Sizes',
      description: 'Use the size prop to change the size of the button.',
      code: `<ui-button size="sm">Small</ui-button>
<ui-button size="md">Medium</ui-button>
<ui-button size="lg">Large</ui-button>`,
    },
  ];

  stateExamples: Example[] = [
    {
      id: 'loading',
      title: 'Loading State',
      description: 'Pass the loading prop to show a loading spinner.',
      code: `<ui-button loading>Loading</ui-button>
<ui-button loading variant="outline">Loading</ui-button>`,
    },
    {
      id: 'disabled',
      title: 'Disabled State',
      description: 'Pass the disabled prop to disable the button.',
      code: `<ui-button disabled>Disabled</ui-button>
<ui-button disabled variant="outline">Disabled</ui-button>`,
    },
  ];

  compositionExamples: Example[] = [
    {
      id: 'button-group',
      title: 'Button Group',
      description: 'Group related buttons together.',
      code: `<div style="display: flex; gap: 8px;">
  <ui-button variant="outline">Left</ui-button>
  <ui-button variant="outline">Middle</ui-button>
  <ui-button variant="outline">Right</ui-button>
</div>`,
    },
    {
      id: 'full-width',
      title: 'Full Width Button',
      description: 'Make the button take the full width of its container.',
      code: `<ui-button full-width>Full Width Button</ui-button>`,
    },
  ];

  props: PropItem[] = [
    {
      name: 'variant',
      type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'link'",
      default: "'primary'",
      description: 'The visual style variant of the button.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'The size of the button.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'If true, the button will be disabled.',
    },
    {
      name: 'loading',
      type: 'boolean',
      default: 'false',
      description: 'If true, the button will show a loading spinner.',
    },
    {
      name: 'full-width',
      type: 'boolean',
      default: 'false',
      description: 'If true, the button will take the full width of its container.',
    },
  ];

  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    this.activeSection.set(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openPlayground() {
    this.router.navigate(['/playground', 'button']);
  }
}
