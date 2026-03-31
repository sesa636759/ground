import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-button-toggle-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button-toggle-playground.component.html',
  styleUrl: './button-toggle-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmButtonTogglePlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  // Options Data (Core sets)
  playgroundOptions = [
    { value: 'list', label: 'List View', icon: 'fas fa-list' },
    { value: 'grid', label: 'Grid View', icon: 'fas fa-th' },
    { value: 'compact', label: 'Compact', icon: 'fas fa-compress' },
    { value: 'cards', label: 'Cards View', icon: 'fas fa-id-card' },
  ];

  pgAccordionItems = [
    { id: 'global', title: 'Global Settings', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance & Style', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior & States', icon: 'activity', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Advanced Features', icon: 'zap', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['global'];

  modeOptions = [
    { label: 'Segmented', value: 'segmented' },
    { label: 'Dropdown', value: 'dropdown' },
  ];

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  variantOptions = [
    { label: 'Filled', value: 'filled' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Text', value: 'text' },
    { label: 'Soft', value: 'soft' },
    { label: 'Classic', value: 'classic' },
    { label: 'Solid', value: 'solid' },
    { label: 'Surface', value: 'surface' },
  ];

  shapeOptions = [
    { label: 'Rectangle', value: 'rectangle' },
    { label: 'Round', value: 'round' },
    { label: 'Pill', value: 'pill' },
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
  ];

  iconPositionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Both', value: 'both' },
  ];

  displayModeOptions = [
    { label: 'Icon + Label', value: 'icon-label' },
    { label: 'Label Only', value: 'label-only' },
    { label: 'Icon Only', value: 'icon-only' },
    { label: 'Both Sides', value: 'both-sides' },
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      mode: 'segmented',
      orientation: 'horizontal',
      size: 'medium',
      color: 'primary',
      variant: 'soft',
      shape: 'rectangle',
      iconPosition: 'left',
      displayMode: 'icon-label',
      label: 'Select View Mode',
      helperText: 'Choose how you want to view content',
      errorMessage: '',
      name: 'view-mode',
      value: 'list',
      fullWidth: false,
      keepButtonLabel: false,
      buttonActionLabel: 'Action',
      customContent: false,
      disabled: false,
      readonly: false,
      loading: false,
      required: true,
      invalid: false,
      multiSelect: false,
      batchActions: false,
      searchEnabled: false,
      exportEnabled: false,
      importEnabled: false,
      analyticsEnabled: false,
      advancedTheme: '',
    };
  }

  updateConfig() {
    let code = `<ui-button-toggle-group\n`;
    if (this.pgConfig.mode !== 'segmented') code += `  mode="${this.pgConfig.mode}"\n`;
    if (this.pgConfig.orientation !== 'horizontal')
      code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.color !== 'primary') code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.variant !== 'filled') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.label) code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.iconPosition !== 'left')
      code += `  icon-position="${this.pgConfig.iconPosition}"\n`;
    if (this.pgConfig.displayMode !== 'icon-label')
      code += `  display-mode="${this.pgConfig.displayMode}"\n`;
    if (this.pgConfig.shape !== 'rectangle') code += `  shape="${this.pgConfig.shape}"\n`;
    if (this.pgConfig.name) code += `  name="${this.pgConfig.name}"\n`;
    if (this.pgConfig.fullWidth) code += `  full-width\n`;
    if (this.pgConfig.keepButtonLabel) code += `  keep-button-label\n`;
    if (this.pgConfig.buttonActionLabel !== 'Action')
      code += `  button-action-label="${this.pgConfig.buttonActionLabel}"\n`;
    if (this.pgConfig.customContent) code += `  custom-content\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.required) code += `  required\n`;
    if (this.pgConfig.multiSelect) code += `  multi-select\n`;
    if (this.pgConfig.batchActions) code += `  batch-actions\n`;
    if (this.pgConfig.searchEnabled) code += `  search-enabled\n`;
    if (this.pgConfig.exportEnabled) code += `  export-enabled\n`;
    if (this.pgConfig.importEnabled) code += `  import-enabled\n`;
    if (this.pgConfig.analyticsEnabled) code += `  analytics-enabled\n`;
    if (this.pgConfig.advancedTheme) code += `  advanced-theme="${this.pgConfig.advancedTheme}"\n`;
    if (this.pgConfig.invalid) {
      code += `  invalid\n`;
      code += `  error-message="${this.pgConfig.errorMessage || 'Invalid selection'}"\n`;
    }
    code += `  value="${this.pgConfig.value}"\n`;
    code += `>\n`;
    if (this.pgConfig.customContent) {
      code += `  <div slot="dropdown-content">\n`;
      code += `    <p>Custom Playground Content</p>\n`;
      code += `  </div>\n`;
    }
    code += `</ui-button-toggle-group>`;
    this.generatedCode.set(code);
    this.refreshCode();
  }

  onPlaygroundChange(event: any) {
    this.logEvent(`Selection changed to: ${event.detail.value}`);
    this.updateConfig();
  }

  onPlaygroundAction(event: any) {
    this.logEvent(`Button action clicked! Current value: "${event.detail.value}"`);
  }
}
