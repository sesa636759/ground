import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { CodeBlockComponent } from '../../../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-progress-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    CodeBlockComponent,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './progress-playground.component.html',
  styleUrl: './progress-playground.component.scss',
})
export class ProgressPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    percent: 50,
    type: 'line',
    status: 'normal',
    strokeWidth: 6,
    width: 120, // For circle/dashboard
    strokeLinecap: 'round',
    showInfo: true,
    steps: 0,

    // Dashboard specifics
    gapDegree: 75,
    gapPosition: 'bottom',

    // New features
    indeterminate: false,
    liquid: false,
    glass: false,
    glow: false,

    strokeColor: '#3DCD58',
    trailColor: '#f5f5f5',
  };

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-progress\n`;
    code += `  [percent]="${this.pgConfig.percent}"\n`;
    if (this.pgConfig.type !== 'line') code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.status !== 'normal') code += `  status="${this.pgConfig.status}"\n`;
    if (this.pgConfig.strokeWidth !== 6) code += `  [strokeWidth]="${this.pgConfig.strokeWidth}"\n`;

    if (this.pgConfig.type !== 'line' && this.pgConfig.width !== 120) {
      code += `  [width]="${this.pgConfig.width}"\n`;
    }

    if (this.pgConfig.strokeLinecap !== 'round')
      code += `  stroke-linecap="${this.pgConfig.strokeLinecap}"\n`;
    if (!this.pgConfig.showInfo) code += `  [showInfo]="false"\n`;
    if (this.pgConfig.steps > 0) code += `  [steps]="${this.pgConfig.steps}"\n`;

    if (this.pgConfig.type === 'dashboard') {
      if (this.pgConfig.gapDegree !== 75) code += `  [gapDegree]="${this.pgConfig.gapDegree}"\n`;
      if (this.pgConfig.gapPosition !== 'bottom')
        code += `  gap-position="${this.pgConfig.gapPosition}"\n`;
    }

    if (this.pgConfig.indeterminate) code += `  [indeterminate]="true"\n`;
    if (this.pgConfig.liquid) code += `  [liquid]="true"\n`;
    if (this.pgConfig.glass) code += `  [glass]="true"\n`;
    if (this.pgConfig.glow) code += `  [glow]="true"\n`;

    if (this.pgConfig.strokeColor !== '#3DCD58')
      code += `  stroke-color="${this.pgConfig.strokeColor}"\n`;
    if (this.pgConfig.trailColor !== '#f5f5f5')
      code += `  trail-color="${this.pgConfig.trailColor}"\n`;

    code += `></app-progress>`;

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
