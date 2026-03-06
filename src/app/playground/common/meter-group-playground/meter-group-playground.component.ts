import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-meter-group-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './meter-group-playground.component.html',
  styleUrl: './meter-group-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmMeterGroupPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visuals', icon: 'palette', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['layout'];

  labelOrientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  labelPositionOptions = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];

  values = [
    { label: 'Apps', value: 40, color: '#3b82f6', icon: 'ðŸ“±' },
    { label: 'System', value: 25, color: '#ef4444', icon: 'âš™ï¸' },
    { label: 'Media', value: 15, color: '#10b981', icon: 'ðŸŽ¬' },
    { label: 'Free', value: 20, color: '#e2e8f0', icon: 'â˜ï¸' },
  ];

  valuesJson = JSON.stringify(this.values);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      orientation: 'horizontal',
      labelOrientation: 'horizontal',
      labelPosition: 'end',
      meterHeight: '12px',
      showLabels: true,
      showMarkers: true,
    };
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.demoElement) return;
      let code = this.getCleanFormattedDom(this.demoElement, 'ui-meter-group');
      code = code.replace('></ui-meter-group>', '\n  [values]="meterValues"\n></ui-meter-group>');
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }
}
