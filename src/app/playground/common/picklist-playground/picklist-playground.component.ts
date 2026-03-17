import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-picklist-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './picklist-playground.component.html',
  styleUrl: './picklist-playground.component.scss',
})
export class DmPicklistPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance & Styles', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'data', title: 'Data Options', icon: 'database', iconLibrary: 'lucide' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Ghost', value: 'ghost' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  modeOptions = [
    { label: 'Single', value: 'single' },
    { label: 'Multiple', value: 'multi' },
  ];

  iconLibraryOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Lucide', value: 'lucide' },
    { label: 'Ionicons', value: 'ionicons' },
    { label: 'FontAwesome', value: 'fontawesome' },
  ];

  standardOptions = [
    { value: 'apple', label: 'Apple', icon: 'apple', description: 'Fresh red apple' },
    { value: 'banana', label: 'Banana', icon: 'banana', description: 'Sweet yellow banana' },
    { value: 'cherry', label: 'Cherry', icon: 'cherry', description: 'Small red cherry' },
    {
      value: 'date',
      label: 'Date',
      icon: 'calendar',
      description: 'Sweet brown date',
      disabled: true,
    },
    { value: 'elderberry', label: 'Elderberry', icon: 'grape', description: 'Dark purple berry' },
  ];

  groupedOptions = [
    {
      group: 'Fruits',
      items: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
      ],
    },
    {
      group: 'Vegetables',
      items: [
        { value: 'carrot', label: 'Carrot' },
        { value: 'broccoli', label: 'Broccoli' },
      ],
    },
  ];

  pgConfig = this.getDefaultConfig();

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      options: this.standardOptions as any[],
      value: null,
      mode: 'single',
      size: 'md',
      variant: 'default',
      placeholder: 'Select an option...',
      disabled: false,
      loading: false,
      searchable: false,
      searchPlaceholder: 'Search...',
      clearable: false,
      grouped: false,
      iconLibrary: 'lucide',
      creatable: false,
      showSelectAll: false,
      reorderable: false,
      maxOptions: 100,
    };
  }

  updateConfig() {
    // Sync values between string/array based on mode
    if (this.pgConfig.mode === 'single' && Array.isArray(this.pgConfig.value)) {
      this.pgConfig.value = this.pgConfig.value[0] || null;
    } else if (this.pgConfig.mode === 'multi' && !Array.isArray(this.pgConfig.value)) {
      this.pgConfig.value = this.pgConfig.value ? [this.pgConfig.value] : [];
    }

    // Sync options based on grouped toggle
    this.pgConfig.options = this.pgConfig.grouped ? this.groupedOptions : this.standardOptions;

    let code = `<dui-picklist\n`;
    code += `  [options]="options"\n`;
    if (this.pgConfig.value) code += `  [value]="value"\n`;
    if (this.pgConfig.mode !== 'single') code += `  mode="${this.pgConfig.mode}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.size !== 'md') code += `  size="${this.pgConfig.size}"\n`;
    code += `  placeholder="${this.pgConfig.placeholder}"\n`;

    if (this.pgConfig.searchable) code += `  searchable\n`;
    if (this.pgConfig.searchable && this.pgConfig.searchPlaceholder !== 'Search...') {
      code += `  search-placeholder="${this.pgConfig.searchPlaceholder}"\n`;
    }
    if (this.pgConfig.clearable) code += `  clearable\n`;
    if (this.pgConfig.grouped) code += `  grouped\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.iconLibrary !== 'lucide')
      code += `  icon-library="${this.pgConfig.iconLibrary}"\n`;

    // Premium features
    if (this.pgConfig.creatable) code += `  creatable\n`;
    if (this.pgConfig.showSelectAll) code += `  show-select-all\n`;
    if (this.pgConfig.reorderable) code += `  reorderable\n`;

    code += `  (picklistChange)="onChange($event)"\n`;
    code += `></dui-picklist>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onChange(event: any) {
    this.logEvent(`Selection Changed: ${JSON.stringify(event.detail.value)}`);
    this.pgConfig.value = event.detail.value;
  }
}
