import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

interface DemoSection {
  id: string;
  title: string;
  description: string;
  code: string;
  preview?: boolean;
}

@Component({
  selector: 'app-card-demo',
  standalone: true,
  imports: [CommonModule, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-demo.component.html',
  styleUrl: './card-demo.component.scss',
})
export class CardDemoComponent implements AfterViewInit {
  componentName = 'Card';
  componentDescription =
    'Versatile card component with multiple variants, states, and interactive features.';

  demos: DemoSection[] = [
    {
      id: 'basic',
      title: 'Basic Card',
      description: 'A basic card with title and content.',
      code: `<ui-card>
  <div slot="header">
    <h3>Card Title</h3>
  </div>
  <div slot="content">
    <p>Card content goes here. You can add any content inside the card body.</p>
    <p>Multiple paragraphs are supported.</p>
  </div>
</ui-card>`,
      preview: true,
    },
    {
      id: 'with-cover',
      title: 'Card with Cover Image',
      description: 'Card with a cover image at the top.',
      code: `<ui-card>
  <img slot="cover" src="https://picsum.photos/400/200" alt="Cover" />
  <div slot="header">
    <h3>Card Title</h3>
  </div>
  <div slot="content">
    <p>Beautiful landscape cover image with detailed content below.</p>
  </div>
</ui-card>`,
      preview: true,
    },
    {
      id: 'with-footer',
      title: 'Card with Footer',
      description: 'Card with header, content, and footer sections.',
      code: `<ui-card>
  <div slot="header">
    <h3>Card with Footer</h3>
  </div>
  <div slot="content">
    <p>This card has a footer with action buttons.</p>
  </div>
  <div slot="footer">
    <ui-button variant="primary" size="sm">Action</ui-button>
    <ui-button variant="outline" size="sm">Cancel</ui-button>
  </div>
</ui-card>`,
      preview: true,
    },
    {
      id: 'variants',
      title: 'Card Variants',
      description: 'Different card style variants.',
      code: `<!-- Default Variant -->
<ui-card variant="default">
  <div slot="content">Default Card</div>
</ui-card>

<!-- Elevated Variant -->
<ui-card variant="elevated">
  <div slot="content">Elevated Card</div>
</ui-card>

<!-- Outlined Variant -->
<ui-card variant="outlined">
  <div slot="content">Outlined Card</div>
</ui-card>`,
      preview: true,
    },
    {
      id: 'interactive',
      title: 'Interactive Card',
      description: 'Clickable card with hover effects.',
      code: `<ui-card hoverable clickable>
  <div slot="header">
    <h3>Interactive Card</h3>
  </div>
  <div slot="content">
    <p>This card is clickable and has hover effects.</p>
  </div>
</ui-card>`,
      preview: true,
    },
    {
      id: 'loading',
      title: 'Loading State',
      description: 'Card with loading skeleton.',
      code: `<ui-card loading>
  <div slot="header">
    <h3>Loading Card</h3>
  </div>
  <div slot="content">
    <p>Content is loading...</p>
  </div>
</ui-card>`,
      preview: true,
    },
  ];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Initialize any demo-specific logic here
  }

  openPlayground() {
    this.router.navigate(['/playground', 'card']);
  }

  openDocumentation() {
    this.router.navigate(['/documentation'], { queryParams: { component: 'card' } });
  }

  scrollToDemo(demoId: string) {
    const element = document.getElementById(demoId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
