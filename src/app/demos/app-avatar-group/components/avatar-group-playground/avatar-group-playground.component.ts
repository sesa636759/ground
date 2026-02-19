import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { CodeBlockComponent } from '../../../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-avatar-group-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockComponent,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Layout</h3>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (change)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Max Display</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.max"
                (change)="updateConfig()"
                min="1"
                max="10"
              />
            </div>
          </div>

          <div class="control-section">
            <h3>Style</h3>
            <div class="control-group">
              <label>Shape</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.shape"
                (change)="updateConfig()"
                [options]="shapeOptions"
              ></ui-dropdown>
            </div>
          </div>
        </div>

        <div class="code-output">
          <app-code-block
            [code]="generatedCode()"
            title="Generated Code"
            language="html"
          ></app-code-block>
        </div>

        <div class="action-buttons">
          <ui-button class="btn-secondary" variant="secondary" (click)="resetConfig()"
            >Reset</ui-button
          >
        </div>
      </div>

      <div class="playground-preview">
        <ui-avatar-group
          [attr.size]="pgConfig.size"
          [attr.max]="pgConfig.max"
          [attr.shape]="pgConfig.shape"
        >
          <ui-avatar
            label="JD"
            [attr.size]="pgConfig.size"
            [attr.shape]="pgConfig.shape"
          ></ui-avatar>
          <ui-avatar
            label="AB"
            [attr.size]="pgConfig.size"
            [attr.shape]="pgConfig.shape"
          ></ui-avatar>
          <ui-avatar
            label="CD"
            [attr.size]="pgConfig.size"
            [attr.shape]="pgConfig.shape"
          ></ui-avatar>
          <ui-avatar
            label="EF"
            [attr.size]="pgConfig.size"
            [attr.shape]="pgConfig.shape"
          ></ui-avatar>
          <ui-avatar
            label="GH"
            [attr.size]="pgConfig.size"
            [attr.shape]="pgConfig.shape"
          ></ui-avatar>
        </ui-avatar-group>
      </div>
    </div>
  `,
  styleUrl: './avatar-group-playground.component.scss',
})
export class AvatarGroupPlaygroundComponent {
  pgConfig = {
    size: 'medium',
    max: 3,
    shape: 'circle',
  };

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  shapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code =
      '<ui-avatar-group size="' + this.pgConfig.size + '" [max]="' + this.pgConfig.max + '">\n';
    code += '  <ui-avatar label="JD"></ui-avatar>\n';
    code += '  <ui-avatar label="AB"></ui-avatar>\n';
    code += '  <ui-avatar label="CD"></ui-avatar>\n';
    code += '</ui-avatar-group>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      size: 'medium',
      max: 3,
      shape: 'circle',
    };
    this.updateConfig();
  }
}
