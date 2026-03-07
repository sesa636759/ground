import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BaseDemoComponent } from 'src/app/shared/base-demo.component';
import { ExampleSectionComponent } from 'src/app/shared/components/example-section/example-section.component';

@Component({
  selector: 'app-set-card-examples',
  standalone: true,
  imports: [CommonModule, ExampleSectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-examples.component.html',
  styleUrl: './card-examples.component.scss',
})
export class SetCardExamplesComponent extends BaseDemoComponent {
  variants = [
    { id: 'basic-cards', name: 'Basic Cards', icon: 'ðŸ“‹' },
    { id: 'media-covers', name: 'Media & Covers', icon: 'ðŸ–¼ï¸' },
    { id: 'flippable-cards', name: 'Flippable Cards', icon: 'ðŸ”„' },
    { id: 'premium-features', name: 'Premium Layouts', icon: 'ðŸ†' },
    { id: 'states-interaction', name: 'States & Interaction', icon: 'ðŸ”„' },
  ];

  get exampleVariants() {
    return this.variants.map((v) => ({
      id: v.id,
      title: v.name,
      icon: v.icon,
    }));
  }

  isLoading = false;

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  basicCardsCode = `<app-card card-title="Project Alpha">
  <p>Standard card content with automatic padding.</p>
</app-card>

<app-card
  card-title="Settings"
  extra="<a href='#' style='color: var(--primary)'>Edit</a>"
>
  <p>Header can include extra HTML content like links or icons.</p>
</app-card>

<app-card>
  <p>Simple card without a header for minimal layouts.</p>
</app-card>`;

  mediaCoversCode = `<app-card
  card-title="Nature Peaks"
  cover="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
  hoverable="true"
>
  <p>Discover the beauty of high altitudes with our latest travel guides.</p>
</app-card>
<app-card
  card-title="User Profile"
  avatar="https://i.pravatar.cc/150?img=1"
  extra="Developer"
>
  <p>Full-stack developer passionate about building beautiful interfaces.</p>
</app-card>
<app-card
  card-title="Tokyo Night"
  cover="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=200&fit=crop"
  ribbon="FEATURED"
  ribbon-color="#f5222d"
>
  <p>Modern architecture meets vibrant nightlife in this stunning city view.</p>
</app-card>`;

  flippableCardsCode = `<app-card
  card-title="Click to Flip"
  flippable="true"
  flip-trigger="click"
  hoverable="true"
>
  <div class="quiz-front">
    <p>What is the capital of France?</p>
    <p class="helper-text">(Click to reveal)</p>
  </div>
  <div slot="back" class="quiz-back">
    <h3>Paris</h3>
    <p>Commonly known as the 'City of Light'.</p>
  </div>
</app-card>
<app-card card-title="Quick Tip" flippable="true" flip-trigger="hover" hoverable="true">
  <p>Hover over this card to see a useful development tip.</p>
  <div slot="back" class="quiz-back">
    <h3>Pro Tip</h3>
    <p>Always use early returns for cleaner code!</p>
  </div>
</app-card>`;

  premiumLayoutsCode = `<h4 class="demo-sub-title">Horizontal Media Card</h4>
<app-card
  layout="horizontal"
  card-title="New Office Opening"
  cover="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
  actions="Read More"
  hoverable="true"
>
  <p>
    We are thrilled to announce the opening of our new headquarters featuring sustainable
    design.
  </p>
</app-card>

<h4 class="demo-sub-title" style="margin-top: 32px">Glassmorphism Effect</h4>
<div class="demo-grid col-2">
  <app-card glass="true" card-title="Glass Card" extra="Premium" bordered="false">
    <p>Stunning frosted glass effect using backdrop-filter.</p>
  </app-card>
  <app-card glass="true" card-title="System Monitor" bordered="false" variant="info">
    <div class="monitor-display">
      <div class="value">98%</div>
      <div class="label">System Health</div>
    </div>
  </app-card>
</div>`;

  statesInteractionCode = `<div class="state-demo-card">
  <app-card [loading]="isLoading" card-title="Dynamic Content">
    <p>Content is loaded and ready!</p>
  </app-card>
  <ui-button
    (click)="toggleLoading()"
    label="Toggle Loading"
    style="margin-top: 12px; display: block"
  ></ui-button>
</div>
<app-card card-title="Project Details" collapsible="true" bordered="true">
  <p>This content can be hidden to save vertical space.</p>
</app-card>
<app-card card-title="Plan Choice" selectable="true" bordered="true" hoverable="true">
  <p>Click this card to select this option.</p>
</app-card>`;
}
