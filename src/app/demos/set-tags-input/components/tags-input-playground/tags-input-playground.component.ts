import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-tags-input-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tags-input-playground.component.html',
  styleUrl: './tags-input-playground.component.scss',
})
export class TagsInputPlaygroundComponent implements OnInit {
  pgConfig = {
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

  suggestions = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Rust'];
  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
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
  }

  onTagsChange(event: any) {
    const tags = event.detail.value;
    this.logEvent(`Tags changed: ${tags.join(', ')}`);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
