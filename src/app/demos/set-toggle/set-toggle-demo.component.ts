import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { TogglePlaygroundComponent } from './components/toggle-playground/toggle-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-set-toggle-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TogglePlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-toggle-demo.component.html',
  styleUrl: './set-toggle-demo.component.scss',
})
export class SetToggleDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Layouts', icon: '📐' },
    { id: 'variants', title: 'Variants & Styles', icon: '✨' },
    { id: 'advanced', title: 'Features & Advanced', icon: '🚀' },
  ];

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

  // Basic Layouts Signals
  defaultToggleCode = signal(`<app-toggle-group
  label="Feature Settings"
  helper-text="Select your preferences"
  layout="horizontal"
  selection-mode="single"
  [options]="notificationOptions">
</app-toggle-group>`);

  horizontalLayoutCode = signal(`<app-toggle-group
  layout="horizontal"
  selection-mode="single"
  label="Notification Type"
  [options]="notificationOptions">
</app-toggle-group>`);

  verticalLayoutCode = signal(`<app-toggle-group
  layout="vertical"
  selection-mode="multiple"
  label="Enable Features"
  [options]="featureOptions">
</app-toggle-group>`);

  gridLayoutCode = signal(`<app-toggle-group
  layout="grid"
  [grid-columns]="3"
  selection-mode="multiple"
  label="Privacy Settings"
  [options]="privacyOptions">
</app-toggle-group>`);

  // Variants & Styles Signals
  defaultVariantCode = signal(`<app-toggle
  variant="default"
  label="Default Style"
  checked>
</app-toggle>`);

  roundedVariantCode = signal(`<app-toggle
  variant="rounded"
  label="Rounded Style"
  checked>
</app-toggle>`);

  outlinedVariantCode = signal(`<app-toggle
  variant="outlined"
  label="Outlined Style"
  checked>
</app-toggle>`);

  glassVariantCode = signal(`<app-toggle
  variant="glass"
  label="Glassmorphism"
  checked>
</app-toggle>`);

  smallSizeCode = signal(`<app-toggle
  size="small"
  label="Small Size">
</app-toggle>`);

  mediumSizeCode = signal(`<app-toggle
  size="medium"
  label="Medium Size">
</app-toggle>`);

  largeSizeCode = signal(`<app-toggle
  size="large"
  label="Large Size">
</app-toggle>`);

  primaryColorCode = signal(`<app-toggle
  color="primary"
  label="Primary Color"
  checked>
</app-toggle>`);

  successColorCode = signal(`<app-toggle
  color="success"
  label="Success Color"
  checked>
</app-toggle>`);

  warningColorCode = signal(`<app-toggle
  color="warning"
  label="Warning Color"
  checked>
</app-toggle>`);

  // Features & Advanced Signals
  iconToggleCode = signal(`<app-toggle
  icon="check"
  label="Enable Feature">
</app-toggle>`);

  sunMoonIconCode = signal(`<app-toggle
  icon="moon"
  label="Dark Mode">
</app-toggle>`);

  iconGroupCode = signal(`<app-toggle-group
  layout="horizontal"
  icon-only
  [options]="[
    { value: 'star', label: 'Star', icon: 'star' },
    { value: 'heart', label: 'Heart', icon: 'heart' },
    { value: 'bookmark', label: 'Bookmark', icon: 'bookmark' }
  ]">
</app-toggle-group>`);

  disabledStateCode = signal(`<app-toggle
  label="Disabled Off"
  disabled>
</app-toggle>
<app-toggle
  label="Disabled On"
  disabled
  checked>
</app-toggle>`);

  readonlyStateCode = signal(`<app-toggle
  label="Readonly Off"
  readonly>
</app-toggle>
<app-toggle
  label="Readonly On"
  readonly
  checked>
</app-toggle>`);

  elevationCode = signal(`<app-toggle
  elevation="1"
  label="Elevation 1"
  checked>
</app-toggle>
<app-toggle
  elevation="3"
  label="Elevation 3"
  checked>
</app-toggle>
<app-toggle
  elevation="5"
  label="Elevation 5"
  checked>
</app-toggle>`);

  thumbShapeCode = signal(`<app-toggle
  thumb-shape="circle"
  label="Circle Thumb"
  checked>
</app-toggle>
<app-toggle
  thumb-shape="square"
  label="Square Thumb"
  checked>
</app-toggle>`);

  labelPositionCode = signal(`<app-toggle
  label-position="right"
  label="Label Right"
  checked>
</app-toggle>
<app-toggle
  label-position="left"
  label="Label Left"
  checked>
</app-toggle>`);

  formExampleCode = signal(`<form>
  <div class="form-group">
    <h4>Notification Preferences</h4>
    <app-toggle-group
      label="Email Notifications"
      selection-mode="single"
      [options]="notificationOptions">
    </app-toggle-group>
  </div>
  
  <div class="form-group">
    <h4>Privacy Settings</h4>
    <app-toggle-group
      layout="vertical"
      selection-mode="multiple"
      label="Select your preferences"
      [options]="privacyOptions">
    </app-toggle-group>
  </div>
</form>`);

  skeletonCode = signal(`<div class="skeleton-wrapper">
  <div class="skeleton-toggle"></div>
  <div class="skeleton-toggle"></div>
</div>
<div class="skeleton-toggle-group">
  <div class="skeleton-label"></div>
  <div class="skeleton-toggles">
    <div class="skeleton-toggle"></div>
    <div class="skeleton-toggle"></div>
    <div class="skeleton-toggle"></div>
  </div>
</div>`);
}
