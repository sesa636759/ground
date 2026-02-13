import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { TogglePlaygroundComponent } from './components/toggle-playground/toggle-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-toggle-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TogglePlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-toggle-demo.component.html',
  styleUrl: './set-toggle-demo.component.scss',
})
export class SetToggleDemoComponent {
  exampleVariants = [
    // Basic Layouts (5)
    { id: 'default-toggle', title: 'Default Single Toggle', icon: '�' },
    { id: 'horizontal-layout', title: 'Horizontal Layout', icon: '↔️' },
    { id: 'vertical-layout', title: 'Vertical Layout', icon: '↕️' },
    { id: 'grid-layout', title: 'Grid Layout', icon: '⊞' },
    { id: 'unchecked-checked', title: 'Default States', icon: '⚫' },

    // Variants & Styles (12)
    { id: 'default-variant', title: 'Default Style', icon: '⚪' },
    { id: 'rounded-variant', title: 'Rounded Style', icon: '◯' },
    { id: 'outlined-variant', title: 'Outlined Style', icon: '⭕' },
    { id: 'glass-variant', title: 'Glassmorphism', icon: '💎' },
    { id: 'small-size', title: 'Small Size', icon: '🔸' },
    { id: 'medium-size', title: 'Medium Size', icon: '🔶' },
    { id: 'large-size', title: 'Large Size', icon: '🟠' },
    { id: 'primary-color', title: 'Primary Color', icon: '🔵' },
    { id: 'success-color', title: 'Success Color', icon: '🟢' },
    { id: 'warning-color', title: 'Warning Color', icon: '🟡' },
    { id: 'danger-color', title: 'Danger Color', icon: '🔴' },
    { id: 'info-color', title: 'Info Color', icon: '🔷' },

    // Features & Advanced (14)
    { id: 'icon-toggle', title: 'With Check Icon', icon: '✅' },
    { id: 'sun-moon-icon', title: 'Sun/Moon Icons', icon: '🌙' },
    { id: 'volume-icon', title: 'Volume Icons', icon: '🔊' },
    { id: 'icon-group-multiple', title: 'Icon Group (Multiple)', icon: '⭐' },
    { id: 'icon-group-single', title: 'Icon Group (Single)', icon: '❤️' },
    { id: 'icon-only-small', title: 'Icons Only Small', icon: '🔖' },
    { id: 'text-formatting', title: 'Text Formatting', icon: '📝' },
    { id: 'disabled-state', title: 'Disabled State', icon: '🚫' },
    { id: 'readonly-state', title: 'Readonly State', icon: '🔒' },
    { id: 'elevation', title: 'Elevation Levels', icon: '📦' },
    { id: 'thumb-shape', title: 'Thumb Shapes', icon: '⬜' },
    { id: 'label-position', title: 'Label Position', icon: '🏷️' },
    { id: 'form-example', title: 'Form Example', icon: '📋' },
    { id: 'skeleton', title: 'Skeleton States', icon: '💀' },
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

  dangerColorCode = signal(`<app-toggle
  color="danger"
  label="Danger Color"
  checked>
</app-toggle>`);

  infoColorCode = signal(`<app-toggle
  color="info"
  label="Info Color"
  checked>
</app-toggle>`);

  uncheckedCheckedCode = signal(`<app-toggle
  label="Unchecked">
</app-toggle>
<app-toggle
  label="Checked"
  checked>
</app-toggle>`);

  volumeIconCode = signal(`<app-toggle
  icon="volume"
  label="Sound"
  checked>
</app-toggle>`);

  iconGroupMultipleCode = signal(`<app-toggle-group
  layout="horizontal"
  selection-mode="multiple"
  label="Select multiple items"
  [options]="[
    { value: 'star', label: 'Star', icon: 'star' },
    { value: 'heart', label: 'Heart', icon: 'heart' },
    { value: 'bookmark', label: 'Bookmark', icon: 'bookmark' }
  ]">
</app-toggle-group>`);

  iconGroupSingleCode = signal(`<app-toggle-group
  layout="horizontal"
  selection-mode="single"
  label="Choose only one option"
  [options]="[
    { value: 'star', label: 'Star', icon: 'star' },
    { value: 'heart', label: 'Heart', icon: 'heart' },
    { value: 'bookmark', label: 'Bookmark', icon: 'bookmark' }
  ]">
</app-toggle-group>`);

  iconOnlySmallCode = signal(`<app-toggle-group
  layout="horizontal"
  icon-only
  size="small"
  [options]="[
    { value: 'star', icon: 'star' },
    { value: 'heart', icon: 'heart' },
    { value: 'bookmark', icon: 'bookmark' }
  ]">
</app-toggle-group>`);

  textFormattingCode = signal(`<app-toggle-group
  layout="horizontal"
  icon-only
  label="Text Formatting"
  [options]="[
    { value: 'bold', icon: 'bold' },
    { value: 'italic', icon: 'italic' },
    { value: 'underline', icon: 'underline' }
  ]">
</app-toggle-group>`);

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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
