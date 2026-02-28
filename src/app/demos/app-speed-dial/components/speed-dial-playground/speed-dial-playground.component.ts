import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-speed-dial-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppInputValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speed-dial-playground.component.html',
  styleUrl: './speed-dial-playground.component.scss',
})
export class SpeedDialPlaygroundComponent {
  pgConfig = {
    direction: 'up',
    type: 'linear',
    radius: 80,
    ripple: true,
    mask: false,
  };

  directionOptions = [
    { label: 'Up', value: 'up' },
    { label: 'Down', value: 'down' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  typeOptions = [
    { label: 'Linear', value: 'linear' },
    { label: 'Quarter Circle', value: 'quarter-circle' },
    { label: 'Half Circle', value: 'half-circle' },
    { label: 'Circle', value: 'circle' },
  ];

  model = [
    { label: 'Add', icon: '➕' },
    { label: 'Edit', icon: '✏️' },
    { label: 'Delete', icon: '🗑️' },
    { label: 'Share', icon: '🔗' },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCodeSignal = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
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
    let code = '<ui-speed-dial\n';
    code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.type !== 'linear') code += `  [radius]="${this.pgConfig.radius}"\n`;
    if (this.pgConfig.mask) code += `  mask\n`;
    code += `  [model]="items"\n`;
    code += '></ui-speed-dial>';

    this.generatedCodeSignal.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      direction: 'up',
      type: 'linear',
      radius: 80,
      ripple: true,
      mask: false,
    };
    this.updateConfig();
  }
}
