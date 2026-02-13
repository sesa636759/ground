import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardPlaygroundComponent } from './components/card-playground/card-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-card-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-card-demo.component.html',
  styleUrl: './set-card-demo.component.scss',
})
export class SetCardDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'basic-cards', title: 'Basic Cards', icon: '📋' },
    { id: 'media-covers', title: 'Media & Covers', icon: '🖼️' },
    { id: 'flippable-cards', title: 'Flippable Cards', icon: '🔄' },
    { id: 'premium-features', title: 'Premium Layouts', icon: '🏆' },
    { id: 'states-interaction', title: 'States & Interaction', icon: '🔄' },
  ];

  isLoading = false;

  playgroundCode = `<app-card
  variant="elevated"
  [hoverable]="true"
>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</app-card>`;

  basicCardsCode = `<app-card card-title="Project Alpha">
  <p>Standard card content with automatic padding.</p>
</app-card>

<app-card
  card-title="Settings"
  extra="<a href='#'>Edit</a>"
>
  <p>Header with extra HTML content.</p>
</app-card>

<app-card>
  <p>Simple card without a header.</p>
</app-card>`;

  mediaCoversCode = `<app-card
  card-title="Nature Peaks"
  cover="https://example.com/image.jpg"
  hoverable="true"
>
  <p>Card with cover image and hover effect.</p>
</app-card>

<app-card
  card-title="User Profile"
  avatar="https://example.com/avatar.jpg"
  extra="Developer"
>
  <p>Card with avatar and extra text.</p>
</app-card>

<app-card
  card-title="Featured Item"
  ribbon="FEATURED"
  ribbon-color="#f5222d"
>
  <p>Card with a corner ribbon.</p>
</app-card>`;

  flippableCardsCode = `<app-card
  card-title="Click to Flip"
  flippable="true"
  flip-trigger="click"
>
  <p>Front content...</p>
  <div slot="back">
    <p>Back content revealed on click.</p>
  </div>
</app-card>

<app-card
  card-title="Hover to Flip"
  flippable="true"
  flip-trigger="hover"
>
  <p>Hover over this card to flip it.</p>
  <div slot="back">
    <p>Back content revealed on hover.</p>
  </div>
</app-card>`;

  premiumLayoutsCode = `<app-card
  layout="horizontal"
  card-title="Horizontal Card"
  cover="image.jpg"
  actions="Read More"
>
  <p>Horizontal layout with side-by-side image and content.</p>
</app-card>

<app-card
  glass="true"
  card-title="Glass Effect"
  bordered="false"
>
  <p>Frosted glass effect using backdrop-filter.</p>
</app-card>`;

  statesInteractionCode = `<app-card
  [loading]="isLoading"
  card-title="Loading State"
>
  <p>Content is hidden while loading.</p>
</app-card>

<app-card
  card-title="Collapsible Card"
  collapsible="true"
>
  <p>Content can be expanded or collapsed.</p>
</app-card>

<app-card
  card-title="Selectable Card"
  selectable="true"
>
  <p>Click to toggle selection state.</p>
</app-card>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
