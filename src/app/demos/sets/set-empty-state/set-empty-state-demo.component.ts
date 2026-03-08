import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmEmptyStatePlaygroundComponent } from '../../../playground/sets/set-empty-state-playground/empty-state-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-set-empty-state-demo',
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
  templateUrl: './set-empty-state-demo.component.html',
  styleUrl: './set-empty-state-demo.component.scss',
})
export class DmSetEmptyStateDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'all-types', title: 'All Types', icon: '📋', color: '#3b82f6' },
    { id: 'variants', title: 'Visual Variants', icon: '🎨', color: '#10b981' },
    { id: 'sizes', title: 'Size Options', icon: '📏', color: '#f59e0b' },
    { id: 'alignment', title: 'Alignment Options', icon: '↔️', color: '#ef4444' },
    { id: 'showcase', title: 'Premium Showcase', icon: '✨', color: '#3b82f6' },
    { id: 'suggestions', title: 'Suggestion Items', icon: '📝', color: '#ec4899' },
    { id: 'actions', title: 'Multiple Actions', icon: '🎯', color: '#06b6d4' },
    { id: 'images', title: 'Custom Images', icon: '🖼️', color: '#8b5cf6' },
    { id: 'features', title: 'Special Features', icon: '✨', color: '#64748b' },
    { id: 'premium', title: 'Premium Features', icon: '💎', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  typesCode =
    signal(`<ui-empty-state type="no-data" title="No Data Available" message="There is no data to display at the moment." primary-action="Add Data"></ui-empty-state>

<ui-empty-state type="no-results" title="No Results Found" message="We couldn't find any results matching your search." primary-action="Clear Filters"></ui-empty-state>

<ui-empty-state type="error" title="Something Went Wrong" message="An error occurred while loading the data." primary-action="Try Again"></ui-empty-state>

<ui-empty-state type="404" title="Page Not Found" message="The page you are looking for doesn't exist." primary-action="Go Home" show-back-button></ui-empty-state>

<ui-empty-state type="coming-soon" title="Coming Soon" message="This feature is under development." secondary-action="Notify Me"></ui-empty-state>`);

  variantsCode =
    signal(`<ui-empty-state variant="default" label="No Data Available" message="There is no data to display."></ui-empty-state>

<ui-empty-state variant="outlined" label="No Data Available" message="There is no data to display."></ui-empty-state>

<ui-empty-state variant="filled" label="No Data Available" message="There is no data to display."></ui-empty-state>

<ui-empty-state variant="minimal" label="No Data Available" message="There is no data to display."></ui-empty-state>

<ui-empty-state variant="glass" label="No Data Available" message="There is no data to display."></ui-empty-state>

<ui-empty-state variant="minimalistic" label="No Data Available" message="There is no data to display."></ui-empty-state>`);

  sizesCode =
    signal(`<ui-empty-state size="small" title="Nothing Here Yet" message="Get started by adding your first item."></ui-empty-state>

<ui-empty-state size="medium" title="Nothing Here Yet" message="Get started by adding your first item."></ui-empty-state>

<ui-empty-state size="large" title="Nothing Here Yet" message="Get started by adding your first item."></ui-empty-state>`);

  alignmentCode = signal(`<ui-empty-state align="left" title="Left Aligned"></ui-empty-state>

<ui-empty-state align="center" title="Center Aligned"></ui-empty-state>

<ui-empty-state align="right" title="Right Aligned"></ui-empty-state>`);

  imagesCode = signal(`<ui-empty-state 
  title="Under Construction" 
  message="We're working hard to bring you this feature."
  image-src="/assets/illustrations/coming-soon.png"
  primary-action="Subscribe to Updates"
></ui-empty-state>

<ui-empty-state 
  title="Data Syncing" 
  message="Please wait while we sync your assets across all devices."
  image-src="/assets/illustrations/syncing.png"
  animated
></ui-empty-state>`);

  suggestionsCode = signal(`<ui-empty-state 
  type="no-results" 
  title="No Results Found" 
  message="We couldn't find any results matching your search."
></ui-empty-state>`);

  actionsCode = signal(`<ui-empty-state 
  type="no-projects" 
  title="No Projects Found" 
  message="You don't have any projects yet."
  primary-action="Create New Project"
  primary-action-icon="fas fa-plus"
  secondary-action="Import Project"
  secondary-action-icon="fas fa-file-import"
></ui-empty-state>`);

  featuresCode = signal(`<ui-empty-state 
  title="Page Not Found"
  rounded
  elevated
  show-back-button
></ui-empty-state>

<ui-empty-state 
  title="No Activity"
  message="New activities will appear here."
  compact
  primary-action="Refresh"
></ui-empty-state>

<ui-empty-state 
  title="Custom Empty State"
  custom-content
>
  <div slot="custom">
    <p>You can add any custom HTML content here!</p>
  </div>
</ui-empty-state>`);

  premiumCode = signal(`<ui-empty-state 
  label="Beta Access"
  message="Join the waitlist for exclusive features."
  animated
  variant="glass"
  primary-action="Join Waitlist"
></ui-empty-state>

<ui-empty-state 
  label="Success!"
  message="Your action was completed successfully."
  animated
  primary-action="Continue"
  confetti
></ui-empty-state>`);

  showcaseCode = signal(`<!-- Glassmorphism -->
<div class="glass-container">
  <ui-empty-state variant="glass" heading="Glassmorphism" ...></ui-empty-state>
</div>

<!-- Compact Mode -->
<ui-empty-state compact size="small" variant="minimal" ...></ui-empty-state>`);

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
    console.log('set-empty-state-demo.component.ts');
  }
}
