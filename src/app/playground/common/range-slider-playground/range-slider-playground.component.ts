import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-range-slider-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './range-slider-playground.component.html',
  styleUrl: './range-slider-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmRangeSliderPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visuals & Labels', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'zap', iconLibrary: 'lucide' },
  ];

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
      value: 50,
      startValue: 20,
      endValue: 80,
      range: false,
      disabled: false,
      showTooltip: true,
      tooltipAlwaysVisible: false,
      color: '#3b82f6',
      trackColor: '#e5e7eb',
      size: 'md',
      startIcon: '',
      endIcon: '',
      showMarks: false,
      vertical: false,
      showValue: true,
      displayFormat: '{value}',
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.demoElement, 'ui-range-slider');
  }

  onSliderChange(event: any) {
    const detail = event.detail;
    if (this.pgConfig.range) {
      if (detail && typeof detail === 'object') {
        this.pgConfig.startValue = detail.start;
        this.pgConfig.endValue = detail.end;
      }
    } else {
      this.pgConfig.value = typeof detail === 'number' ? detail : (detail?.value ?? detail);
    }
    this.logEvent(`Value changed: ${JSON.stringify(detail)}`);
    this.updateConfig();
  }
}
