import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmEmptyStatePlaygroundComponent } from '../../../playground/sets/empty-state-playground/empty-state-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-empty-state-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmEmptyStatePlaygroundComponent,
    DemoTabsComponent,

    ExampleSectionComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './empty-state-demo.component.html',
  styleUrl: './empty-state-demo.component.scss',
})
export class DmEmptyStateDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'all-types', title: 'All Types', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Size Options', icon: 'scaling', iconLibrary: 'lucide' },
    { id: 'alignment', title: 'Alignment Options', icon: 'align-center', iconLibrary: 'lucide' },
    { id: 'showcase', title: 'Premium Showcase', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'suggestions', title: 'Suggestion Items', icon: 'lightbulb', iconLibrary: 'lucide' },
    { id: 'actions', title: 'Multiple Actions', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'images', title: 'Custom Images', icon: 'image', iconLibrary: 'lucide' },
    { id: 'features', title: 'Special Features', icon: 'star', iconLibrary: 'lucide' },
    { id: 'premium', title: 'Premium Features', icon: 'award', iconLibrary: 'lucide' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  typesCode =
    signal(`<app-empty-state type="no-data" title="No Data Available" message="There is no data to display at the moment." primary-action="Add Data"></app-empty-state>

<app-empty-state type="no-results" title="No Results Found" message="We couldn't find any results matching your search." primary-action="Clear Filters"></app-empty-state>

<app-empty-state type="error" title="Something Went Wrong" message="An error occurred while loading the data." primary-action="Try Again"></app-empty-state>

<app-empty-state type="404" title="Page Not Found" message="The page you are looking for doesn't exist." primary-action="Go Home" show-back-button></app-empty-state>

<app-empty-state type="coming-soon" title="Coming Soon" message="This feature is under development." secondary-action="Notify Me"></app-empty-state>`);

  variantsCode =
    signal(`<app-empty-state variant="default" label="No Data Available" message="There is no data to display."></app-empty-state>

<app-empty-state variant="outlined" label="No Data Available" message="There is no data to display."></app-empty-state>

<app-empty-state variant="filled" label="No Data Available" message="There is no data to display."></app-empty-state>

<app-empty-state variant="minimal" label="No Data Available" message="There is no data to display."></app-empty-state>

<app-empty-state variant="glass" label="No Data Available" message="There is no data to display."></app-empty-state>

<app-empty-state variant="minimalistic" label="No Data Available" message="There is no data to display."></app-empty-state>`);

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
  label="Beta Access"
  message="Join the waitlist for exclusive features."
  animated
  variant="glass"
  primary-action="Join Waitlist"
></app-empty-state>

<app-empty-state 
  label="Success!"
  message="Your action was completed successfully."
  animated
  primary-action="Continue"
  confetti
></app-empty-state>`);

  showcaseCode = signal(`<!-- Glassmorphism -->
<div class="glass-container">
  <app-empty-state variant="glass" heading="Glassmorphism" ...></app-empty-state>
</div>

<!-- Compact Mode -->
<app-empty-state compact size="small" variant="minimal" ...></app-empty-state>`);

  suggestionItems = [
    { icon: 'fas fa-search', label: 'Check your spelling', value: 'spelling' },
    { icon: 'fas fa-filter', label: 'Try different filters', value: 'filters' },
    { icon: 'fas fa-sync', label: 'Refresh the page', value: 'refresh' },
    { icon: 'fas fa-question-circle', label: 'Contact support', value: 'support' },
  ];

  customActions = [
    { label: 'Create New Project', value: 'create', variant: 'primary', icon: 'fas fa-plus' },
    { label: 'Import Project', value: 'import', variant: 'secondary', icon: 'fas fa-file-import' },
    { label: 'Browse Templates', value: 'templates', variant: 'text', icon: 'fas fa-th' },
  ];

  isJoining = false;
  celebrationActive = false;

  onJoinWaitlist() {
    if (this.isJoining) return;
    this.isJoining = true;
    setTimeout(() => {
      this.isJoining = false;
      this.celebrationActive = true;
      setTimeout(() => {
        this.celebrationActive = false;
      }, 3000);
    }, 2000);
  }

  onItemClick(event: any) {
    console.log('Item clicked:', event.detail.item);
    alert(`Item clicked: ${event.detail.item.label}`);
  }

  handleAction(event: any) {
    console.log('Action triggered:', event.detail.action);
    alert(`Action: ${event.detail.action.label}`);
  }

  ngOnInit() {
    console.log('empty-state-demo.component.ts');
  }
}
