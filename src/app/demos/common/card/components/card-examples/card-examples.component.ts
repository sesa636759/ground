import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDemoComponent } from '../../../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../../../shared/components/example-section/example-section.component';
import { PLAYGROUND_IMPORTS } from '../../../../../shared/components/demo-playground/playground.constants';

@Component({
  selector: 'app-card-examples',
  standalone: true,
  imports: [CommonModule, ExampleSectionComponent, ...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-examples.component.html',
  styleUrl: './card-examples.component.scss',
})
export class CardExamplesComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground-hero', title: 'Premium Showcase', icon: '✨' },
    { id: 'basic', title: 'Core Structure', icon: '📋' },
    { id: 'interactions', title: 'Rich Interactions', icon: '⚡' },
    { id: 'patterns', title: 'Hierarchy & Patterns', icon: '🏗️' },
    { id: 'media', title: 'Media Enhancements', icon: '🖼️' },
    { id: 'specialized', title: 'Specialized Behaviors', icon: '🛠️' },
    { id: 'advanced-slots', title: 'Advanced Slots', icon: '🚀' },
    { id: 'variants-showcase', title: 'Design Variants', icon: '🎨' },
    { id: 'responsive', title: 'Adaptive Layouts', icon: '📱' },
    { id: 'states', title: 'Functional States', icon: '⏳' },
  ];

  patternsCode = `<div class="card-grid">
  <!-- Emphasized Importance -->
  <dui-card importance="emphasized" card-title="Emphasized Card" description="Used for high-priority items."></dui-card>
  
  <!-- Product Pattern -->
  <dui-card pattern="product" card-title="Smart Watch Pro" tag="Sale -20%" cover="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"></dui-card>
  
  <!-- Shortcut Pattern -->
  <dui-card pattern="shortcut" card-title="Quick Settings" avatar-icon="fas fa-cog"></dui-card>
</div>`;

  specializedCode = `<div class="card-grid">
  <!-- Collapsible Card -->
  <dui-card collapsible card-title="Collapsible Details">
    <div slot="content">Detailed performance logs and system status information that can be hidden.</div>
  </dui-card>

  <!-- Auto-Scrolling Card -->
  <dui-card auto-scroll height="200px" card-title="Real-time Logs">
    <div slot="content">
      <p style="margin: 4px 0;">[10:00:01] System boot started...</p>
      <p style="margin: 4px 0;">[10:00:05] Kernel loaded.</p>
      <p style="margin: 4px 0;">[10:00:10] Services initializing...</p>
      <p style="margin: 4px 0;">[10:00:15] Network interface active.</p>
      <p style="margin: 4px 0;">[10:00:20] Database connection established.</p>
      <p style="margin: 4px 0;">[10:00:25] API Gateway ready.</p>
      <p style="margin: 4px 0;">[10:00:30] System operational.</p>
    </div>
  </dui-card>
  
  <!-- Inner Type for Nesting -->
  <dui-card card-title="Project Management">
    <div slot="content">
      <p>Main project overview content.</p>
      <dui-card type="inner" card-title="Sub-task A" description="Due in 2 days" variant="outlined"></dui-card>
      <dui-card type="inner" card-title="Sub-task B" description="Completed" variant="outlined" style="margin-top: 8px;"></dui-card>
    </div>
  </dui-card>
</div>`;

  advancedSlotsCode = `<dui-card>
  <div slot="tabs">
    <dui-tabs>
      <dui-tab-panel label="Details">Technical specifications of the product...</dui-tab-panel>
      <dui-tab-panel label="Reviews">User feedback and ratings...</dui-tab-panel>
    </dui-tabs>
  </div>
  <div slot="content">Main product description goes here. This area is visible below the tabs.</div>
</dui-card>

<dui-card>
  <div slot="grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #eee;">
    <div style="background: white; padding: 20px; text-align: center;">Feature 1</div>
    <div style="background: white; padding: 20px; text-align: center;">Feature 2</div>
    <div style="background: white; padding: 20px; text-align: center;">Feature 3</div>
  </div>
</dui-card>`;

  premiumHeroCode = `<div class="card-grid">
  <!-- Dashboard Card -->
  <dui-card variant="elevated" hoverable width="380px" ribbon="NEW" ribbon-color="indigo">
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
      <dui-button variant="primary" label="Open Dashboard" size="md"></dui-button>
      <dui-button
        size="md"
        variant="primary"
        label="Export"
        icon="download"
        icon-library="lucide"
        icon-position="left"
      ></dui-button>
    </div>
  </dui-card>

  <!-- Profile Card -->
  <dui-card variant="elevated" hoverable width="320px" type="inner">
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
      <dui-button label="Connect" width="100%"></dui-button>
    </div>
  </dui-card>
</div>`;

  basicCode = `<dui-card variant="elevated" card-title="Basic Card" description="This is a basic card using properties instead of slots for simple content."></dui-card>`;

  mediaCode = `<dui-card hoverable>
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
</dui-card>`;

  interactionCode = `<!-- Flippable Interaction -->
<dui-card flippable flip-trigger="click">
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
</dui-card>`;

  variantsCode = `<div class="card-grid">
  <dui-card variant="elevated">Elevated</dui-card>
  <dui-card variant="outlined">Outlined</dui-card>
  <dui-card variant="filled">Filled</dui-card>
  <dui-card variant="primary">Primary</dui-card>
  <dui-card variant="success">Success</dui-card>
</div>`;

  responsiveCode = `<dui-card layout="horizontal" width="100%">
  <div slot="cover" style="width: 200px">
    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" />
  </div>
  <div slot="header"><h3>Horizontal Layout</h3></div>
  <div slot="content">Perfect for list items and article previews. content should wrap nicely.</div>
</dui-card>`;

  statesCode = `<dui-card loading></dui-card>
<dui-card disabled>Disabled State content</dui-card>`;

  advancedCode = `<dui-card glass="true" ribbon="FEATURED">
  <div slot="header"><h3>Premium Glass Card</h3></div>
  <div slot="content">Utilizing glassmorphism for modern interfaces.</div>
</dui-card>`;
}
