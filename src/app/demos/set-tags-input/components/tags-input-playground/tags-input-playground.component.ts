import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-tags-input-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tags-input-playground.component.html',
  styleUrl: './tags-input-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TagsInputPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  suggestions = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Rust'];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      label: 'Tags',
      placeholder: 'Add a tag...',
      size: 'medium',
      color: 'primary',
      variant: 'default',
      maxTags: 10,
      disabled: false,
      readonly: false,
      required: false,
      invalid: false,
      enableAutocomplete: false,
      allowDuplicates: false,
      caseSensitive: false,
    };
  }

  updateConfig() {
    let code = `<app-tags-input\n`;
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  placeholder="${this.pgConfig.placeholder}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  max-tags="${this.pgConfig.maxTags}"\n`;

    if (this.pgConfig.disabled) code += `  disabled="true"\n`;
    if (this.pgConfig.readonly) code += `  readonly="true"\n`;
    if (this.pgConfig.required) code += `  required="true"\n`;
    if (this.pgConfig.invalid) code += `  invalid="true"\n`;
    if (this.pgConfig.enableAutocomplete) code += `  enable-autocomplete="true"\n`;
    if (this.pgConfig.allowDuplicates) code += `  allow-duplicates="true"\n`;
    if (this.pgConfig.caseSensitive) code += `  case-sensitive="true"\n`;

    code += `></app-tags-input>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onTagsChange(event: any) {
    const tags = event.detail.value;
    this.logEvent(`Tags changed: ${tags.join(', ')}`);
  }
}
