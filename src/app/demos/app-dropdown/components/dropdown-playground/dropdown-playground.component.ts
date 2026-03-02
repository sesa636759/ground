import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-dropdown-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dropdown-playground.component.html',

  styleUrl: './dropdown-playground.component.scss',
})
export class DropdownPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = JSON.stringify([
    { id: 'config', title: 'Configuration', icon: '⚙️' },
    { id: 'features', title: 'Features', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['config', 'features']);
  showCode = true;

  pgConfig = {
    placeholder: 'Select technology...',
    size: 'md',
    appearance: 'dropdown',
    multiSelect: false,
    searchable: true,
    clearable: true,
    cascading: false,
  };

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  appearanceOptions = [
    { label: 'Dropdown', value: 'dropdown' },
    { label: 'Button-like', value: 'button' },
  ];

  options = [
    { label: 'Angular', value: 'ng', icon: '🅰️' },
    { label: 'React', value: 'react', icon: '⚛️' },
    { label: 'Vue.js', value: 'vue', icon: '🖖' },
    { label: 'Svelte', value: 'svelte', icon: '🔥' },
    { label: 'Stencil', value: 'stencil', icon: '⚡' },
    { label: 'Solid', value: 'solid', icon: '🧊' },
  ];

  cascadingOptions = [
    {
      label: 'Frontend',
      value: 'fe',
      children: [
        { label: 'Angular', value: 'ng' },
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
      ],
    },
    {
      label: 'Backend',
      value: 'be',
      children: [
        { label: 'Node.js', value: 'node' },
        { label: 'NestJS', value: 'nest' },
        { label: 'Go', value: 'go' },
      ],
    },
  ];

  optionsJson = JSON.stringify(this.options);
  cascadingOptionsJson = JSON.stringify(this.cascadingOptions);

  currentValue = '';
  generatedCodeSignal = signal('');

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateConfig();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormattedDom());
      this.refreshCode();
    }, 50);
  }

  getCleanFormattedDom(): string {
    let code = '<ui-dropdown\n';
    code += `  placeholder="${this.pgConfig.placeholder}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.appearance !== 'dropdown')
      code += `  appearance="${this.pgConfig.appearance}"\n`;
    if (this.pgConfig.multiSelect) code += `  multi-select\n`;
    if (this.pgConfig.searchable) code += `  searchable\n`;
    if (this.pgConfig.clearable) code += `  clearable\n`;
    if (this.pgConfig.cascading) code += `  cascading\n`;
    code += `  [options]="dropdownOptions"\n`;
    code += '></ui-dropdown>';
    return code;
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormattedDom());
      this.refreshCode();
    }, 50);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail.value;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      placeholder: 'Select technology...',
      size: 'md',
      appearance: 'dropdown',
      multiSelect: false,
      searchable: true,
      clearable: true,
      cascading: false,
    };
    this.updateConfig();
  }
}
