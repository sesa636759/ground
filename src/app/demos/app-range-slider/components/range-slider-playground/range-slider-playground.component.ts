import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-range-slider-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './range-slider-playground.component.html',
  styleUrl: './range-slider-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class RangeSliderPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['global'];

  currentValue: any = [20, 80];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      min: 0,
      max: 100,
      step: 1,
      orientation: 'horizontal',
      range: true,
      showValue: true,
    };
  }

  updateConfig() {
    let code = '<ui-range-slider\n';
    code += `  [min]="${this.pgConfig.min}"\n`;
    code += `  [max]="${this.pgConfig.max}"\n`;
    code += `  [step]="${this.pgConfig.step}"\n`;
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.range) code += `  range\n`;
    code += `  [value]="${JSON.stringify(this.currentValue)}"\n`;
    code += '></ui-range-slider>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onValueChange(event: any) {
    this.currentValue = event.detail.value;
    this.updateConfig();
    this.logEvent(`Value changed: ${JSON.stringify(this.currentValue)}`);
  }

  override resetConfig() {
    super.resetConfig();
    this.currentValue = [20, 80];
  }
}
