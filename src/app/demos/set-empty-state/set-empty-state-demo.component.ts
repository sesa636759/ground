import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmptyStatePlaygroundComponent } from './components/empty-state-playground/empty-state-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';

@Component({
  selector: 'app-set-empty-state-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    EmptyStatePlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-empty-state-demo.component.html',
  styleUrl: './set-empty-state-demo.component.scss',
})
export class SetEmptyStateDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'types', title: 'Standard Types', icon: '📋', color: '#3b82f6' },
    { id: 'variants', title: 'Visual Variants', icon: '🎨', color: '#10b981' },
    { id: 'sizes', title: 'Size Options', icon: '📏', color: '#f59e0b' },
    { id: 'alignment', title: 'Alignment Options', icon: '↔️', color: '#ef4444' },
    { id: 'images', title: 'Custom Images', icon: '🖼️', color: '#8b5cf6' },
    { id: 'suggestions', title: 'Suggestion Items', icon: '📝', color: '#ec4899' },
    { id: 'actions', title: 'Multiple Actions', icon: '🎯', color: '#06b6d4' },
    { id: 'features', title: 'Special Features', icon: '✨', color: '#64748b' },
    { id: 'premium', title: 'Premium Features', icon: '💎', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  anchorLinks = JSON.stringify(
    this.variants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  typesCode =
    signal(`<app-empty-state type="no-data" title="No Data Available" message="There is no data to display at the moment." primary-action="Add Data"></app-empty-state>

<app-empty-state type="no-results" title="No Results Found" message="We couldn't find any results matching your search." primary-action="Clear Filters"></app-empty-state>

<app-empty-state type="error" title="Something Went Wrong" message="An error occurred while loading the data." primary-action="Try Again"></app-empty-state>

<app-empty-state type="404" title="Page Not Found" message="The page you are looking for doesn't exist." primary-action="Go Home" show-back-button></app-empty-state>

<app-empty-state type="coming-soon" title="Coming Soon" message="This feature is under development." secondary-action="Notify Me"></app-empty-state>`);

  variantsCode = signal(`<app-empty-state variant="default">
  <h3>No Data Available</h3>
</app-empty-state>

<app-empty-state variant="outlined">
  <h3>No Data Available</h3>
</app-empty-state>

<app-empty-state variant="filled">
  <h3>No Data Available</h3>
</app-empty-state>

<app-empty-state variant="minimal">
  <h3>No Data Available</h3>
</app-empty-state>`);

  sizesCode =
    signal(`<app-empty-state size="small" title="Nothing Here Yet" message="Get started by adding your first item."></app-empty-state>

<app-empty-state size="medium" title="Nothing Here Yet" message="Get started by adding your first item."></app-empty-state>

<app-empty-state size="large" title="Nothing Here Yet" message="Get started by adding your first item."></app-empty-state>`);

  alignmentCode = signal(`<app-empty-state align="left" title="Left Aligned"></app-empty-state>

<app-empty-state align="center" title="Center Aligned"></app-empty-state>

<app-empty-state align="right" title="Right Aligned"></app-empty-state>`);

  imagesCode = signal(`<app-empty-state 
  title="Under Construction" 
  message="We're working hard to bring you this feature."
  image-src="/assets/illustrations/coming-soon.png"
  primary-action="Subscribe to Updates"
></app-empty-state>

<app-empty-state 
  title="Data Syncing" 
  message="Please wait while we sync your assets across all devices."
  image-src="/assets/illustrations/syncing.png"
  animated
></app-empty-state>`);

  suggestionsCode = signal(`<app-empty-state 
  type="no-results" 
  title="No Results Found" 
  message="We couldn't find any results matching your search."
></app-empty-state>`);

  actionsCode = signal(`<app-empty-state 
  type="no-projects" 
  title="No Projects Found" 
  message="You don't have any projects yet."
  primary-action="Create New Project"
  primary-action-icon="fas fa-plus"
  secondary-action="Import Project"
  secondary-action-icon="fas fa-file-import"
></app-empty-state>`);

  featuresCode = signal(`<app-empty-state 
  title="Page Not Found"
  rounded
  elevated
  show-back-button
></app-empty-state>

<app-empty-state 
  title="No Activity"
  message="New activities will appear here."
  compact
  primary-action="Refresh"
></app-empty-state>

<app-empty-state 
  title="Custom Empty State"
  custom-content
>
  <div slot="custom">
    <p>You can add any custom HTML content here!</p>
  </div>
</app-empty-state>`);

  premiumCode = signal(`<app-empty-state 
  title="Beta Access"
  message="Join the waitlist for exclusive features."
  animated
  glass-morphism
  primary-action="Join Waitlist"
></app-empty-state>

<app-empty-state 
  type="celebration" 
  title="Success!"
  message="Your action was completed successfully."
  animated
  primary-action="Continue"
></app-empty-state>`);

  ngOnInit() {}
}
