import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleSectionComponent } from '../../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'app-card-examples',
  standalone: true,
  imports: [CommonModule, ExampleSectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-examples.component.html',
  styleUrl: './card-examples.component.scss',
})
export class CardExamplesComponent {
  variants = [
    { id: 'playground-hero', name: 'Premium Showcase', icon: '✨' },
    { id: 'basic', name: 'Core Structure', icon: '📋' },
    { id: 'media', name: 'Media Enhancements', icon: '🖼️' },
    { id: 'interactions', name: 'Rich Interactions', icon: '⚡' },
    { id: 'variants-showcase', name: 'Design Variants', icon: '🎨' },
    { id: 'responsive', name: 'Adaptive Layouts', icon: '📱' },
    { id: 'states', name: 'Functional States', icon: '⏳' },
    { id: 'advanced', name: 'Advanced Patterns', icon: '🚀' },
  ];

  anchorLinks = JSON.stringify(
    this.variants.map((v: any) => ({
      id: v.id,
      label: v.name,
      target: v.id,
      icon: v.icon,
    })),
  );

  basicCode = `<ui-card variant="elevated">
  <div slot="header">
    <div class="header-content">
      <span class="category">Product Design</span>
      <h3>Design System Evolution</h3>
    </div>
  </div>
  <div slot="content">
    <p>A comprehensive guide on transitioning from monolithic styles to a token-based design system.</p>
  </div>
  <div slot="footer">
    <ui-button variant="ghost" label="Read Article" icon="fas fa-arrow-right" icon-library="fontawesome"></ui-button>
  </div>
</ui-card>`;

  mediaCode = `<ui-card hoverable>
  <div slot="cover">
    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Project" />
    <div class="overlay-badge">In Progress</div>
  </div>
  <div slot="header">
    <h3>Enterprise Dashboard V2</h3>
  </div>
  <div slot="content">
    <div class="stats-row">
      <div class="stat"><span class="label">Users</span> 12.4k</div>
      <div class="stat"><span class="label">Growth</span> +18%</div>
    </div>
  </div>
</ui-card>`;

  interactionCode = `<!-- Flippable Interaction -->
<ui-card flippable flip-trigger="click">
  <div slot="content">
    <div class="back-preview">
      <i class="fas fa-sync"></i>
      <p>Click to Reveal Stats</p>
    </div>
  </div>
  <div slot="back-content">
    <h3>Performance Metrics</h3>
    <ul class="stats-list">
      <li>Latency: 45ms</li>
      <li>Uptime: 99.99%</li>
    </ul>
  </div>
</ui-card>`;

  variantsCode = `<div class="card-grid">
  <ui-card variant="elevated">Elevated</ui-card>
  <ui-card variant="outlined">Outlined</ui-card>
  <ui-card variant="filled">Filled</ui-card>
  <ui-card variant="default">Default</ui-card>
</div>`;

  responsiveCode = `<ui-card layout="horizontal" width="100%">
  <div slot="cover" style="width: 200px">
    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" />
  </div>
  <div slot="header"><h3>Horizontal Layout</h3></div>
  <div slot="content">Perfect for list items and article previews.</div>
</ui-card>`;

  statesCode = `<ui-card loading></ui-card>
<ui-card disabled>Disabled State</ui-card>`;

  advancedCode = `<ui-card glass="true" ribbon="FEATURED">
  <div slot="header"><h3>Premium Glass Card</h3></div>
  <div slot="content">Utilizing glassmorphism for modern interfaces.</div>
</ui-card>`;
}
