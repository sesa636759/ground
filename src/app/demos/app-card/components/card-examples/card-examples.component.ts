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

  premiumHeroCode = `<div class="card-grid">
  <!-- Dashboard Card -->
  <ui-card variant="elevated" hoverable width="380px" ribbon="NEW" ribbon-color="indigo">
    <div slot="cover" class="premium-cover">
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
        alt="Dashboard"
      />
      <div class="cover-overlay">
        <span class="badge">Live View</span>
      </div>
    </div>
    <div slot="header">
      <div class="header-with-meta">
        <span class="meta-tag">Analytics</span>
        <h3>Performance Overview</h3>
      </div>
    </div>
    <div slot="content">
      <p class="premium-text">
        Real-time tracking of your cloud infrastructure performance and resource utilization.
      </p>
      <div class="stats-row">
        <div class="stat-item">
          <span class="label">Traffic</span>
          <span class="value">12.4k</span>
        </div>
        <div class="stat-item">
          <span class="label">Uptime</span>
          <span class="value">99.9%</span>
        </div>
      </div>
    </div>
    <div slot="footer" class="footer-actions">
      <ui-button variant="primary" label="Open Dashboard" size="md"></ui-button>
      <ui-button
        size="md"
        variant="primary"
        label="Export"
        icon="download"
        icon-library="lucide"
        icon-position="left"
      ></ui-button>
    </div>
  </ui-card>

  <!-- Profile Card -->
  <ui-card variant="elevated" hoverable width="320px" type="inner">
    <div slot="header" class="profile-header">
      <div class="avatar-container">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
          alt="User"
        />
        <div class="status-indicator online"></div>
      </div>
    </div>
    <div slot="content" class="text-center">
      <h3 class="member-name">Marcus Sterling</h3>
      <p class="member-role">Senior Product Architect</p>
      <div class="tag-cloud">
        <span class="mini-tag">Angular</span>
        <span class="mini-tag">Stencil</span>
        <span class="mini-tag">UX</span>
      </div>
    </div>
    <div slot="footer">
      <ui-button label="Connect" width="100%"></ui-button>
    </div>
  </ui-card>
</div>`;

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
    <ui-button variant="ghost" label="Read Article" icon="fas fa-arrow-right"></ui-button>
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
