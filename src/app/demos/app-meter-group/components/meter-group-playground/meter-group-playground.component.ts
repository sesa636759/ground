import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-meter-group-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './meter-group-playground.component.html',
  styleUrl: './meter-group-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MeterGroupPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'layout', title: 'Layout', icon: '📏' },
    { id: 'visuals', title: 'Visuals', icon: '🎨' },
  ]);

  defaultOpen = JSON.stringify(['layout']);

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  labelOrientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  labelPositionOptions = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];

  values = [
    { label: 'Apps', value: 40, color: '#3b82f6', icon: '📱' },
    { label: 'System', value: 25, color: '#ef4444', icon: '⚙️' },
    { label: 'Media', value: 15, color: '#10b981', icon: '🎬' },
    { label: 'Free', value: 20, color: '#e2e8f0', icon: '☁️' },
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

  override resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.updateConfig();
    this.eventLog.set([]);
  }
}
