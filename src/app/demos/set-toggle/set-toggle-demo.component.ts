import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { TogglePlaygroundComponent } from './components/toggle-playground/toggle-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-toggle-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TogglePlaygroundComponent,
    CodeBlockComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-toggle-demo.component.html',
  styleUrl: './set-toggle-demo.component.scss',
})
export class SetToggleDemoComponent {
  variants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'layouts', title: 'Toggle Group Layouts', icon: '📐' },
    { id: 'variants', title: 'Variants', icon: '🎭' },
    { id: 'sizes', title: 'Sizes', icon: '📏' },
    { id: 'icons', title: 'With Icons', icon: '🎯' },
    { id: 'icon-group', title: 'Icon Toggle Group', icon: '⭐' },
    { id: 'states', title: 'States', icon: '🔄' },
    { id: 'premium-features', title: 'Premium Features', icon: '💎' },
    { id: 'skeleton', title: 'Skeleton States', icon: '🦴' },
    { id: 'form-example', title: 'Form Example', icon: '📋' },
  ];

  get exampleVariants() {
    return this.variants.filter(v => v.id !== 'playground');
  }

  notificationOptions = [
    { value: 'email', label: 'Email' },
    { value: 'sms', label: 'SMS' },
    { value: 'push', label: 'Push' },
  ];

  featureOptions = [
    { value: 'auto-update', label: 'Auto Update' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'cloud-sync', label: 'Cloud Sync' },
  ];

  privacyOptions = [
    { value: 'profile-public', label: 'Public Profile' },
    { value: 'show-email', label: 'Show Email' },
    { value: 'show-activity', label: 'Show Activity' },
    { value: 'allow-messages', label: 'Allow Messages' },
    { value: 'search-indexing', label: 'Search Indexing' },
    { value: 'data-sharing', label: 'Data Sharing' },
  ];

  playgroundCode = `<app-toggle-group
  label="Feature Settings"
  helper-text="Select your preferences"
  layout="horizontal"
  selection-mode="multiple"
  [options]="options"
></app-toggle-group>`;

  layoutsCode = `<app-toggle-group
  layout="horizontal"
  selection-mode="single"
  [options]="options"
></app-toggle-group>`;

  variantsCode = `<app-toggle variant="default" checked></app-toggle>
<app-toggle variant="rounded" checked></app-toggle>
<app-toggle variant="outlined" checked></app-toggle>`;

  sizesCode = `<app-toggle size="small"></app-toggle>
<app-toggle size="medium"></app-toggle>
<app-toggle size="large"></app-toggle>`;

  iconsCode = `<app-toggle icon="check" label="Enable Feature"></app-toggle>
<app-toggle icon="moon" label="Dark Mode"></app-toggle>`;

  iconGroupCode = `<app-toggle-group
  layout="horizontal"
  icon-only
  [options]="iconOptions"
></app-toggle-group>`;

  statesCode = `<app-toggle checked></app-toggle>
<app-toggle disabled></app-toggle>
<app-toggle readonly></app-toggle>`;

  premiumFeaturesCode = `<app-toggle variant="glass" checked></app-toggle>
<app-toggle elevation="3" checked></app-toggle>
<app-toggle thumb-shape="square" checked></app-toggle>`;

  skeletonCode = `<div class="skeleton-toggle"></div>
<div class="skeleton-toggle-group">
  <div class="skeleton-label"></div>
  <div class="skeleton-toggles">
    <div class="skeleton-toggle"></div>
    <div class="skeleton-toggle"></div>
  </div>
</div>`;

  formExampleCode = `<form>
  <h4>Notification Settings</h4>
  <app-toggle label="Email Notifications" checked></app-toggle>
  <app-toggle label="Push Notifications" checked></app-toggle>
  <app-toggle label="SMS Notifications"></app-toggle>
  
  <h4>Privacy Options</h4>
  <app-toggle label="Make Profile Public"></app-toggle>
  <app-toggle label="Show Activity Status" checked></app-toggle>
  <app-toggle label="Allow Friend Requests" checked></app-toggle>
</form>`;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
