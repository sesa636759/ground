import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from './components/app-playground/playground.constants';

export interface PlaygroundControl {
  name: string;
  label: string;
  type: 'boolean' | 'text' | 'number' | 'select' | 'color' | 'range';
  defaultValue: any;
  options?: { label: string; value: any }[];
  min?: number;
  max?: number;
  step?: number;
}

export interface PlaygroundConfig {
  title: string;
  description: string;
  controls: PlaygroundControl[];
}

@Component({
  selector: 'app-playground-controls',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './playground-controls.component.html',
  styleUrl: './playground-controls.component.scss',
})
export class PlaygroundControlsComponent {
  @Input() config!: PlaygroundConfig;
  @Output() valuesChange = new EventEmitter<Record<string, any>>();

  values: Record<string, any> = {};

  ngOnInit() {
    this.resetValues();
  }

  onValueChange(name: string, value: any) {
    this.values[name] = value;
    this.valuesChange.emit({ ...this.values });
  }

  resetValues() {
    this.values = {};
    this.config.controls.forEach((control) => {
      this.values[control.name] = control.defaultValue;
    });
    this.valuesChange.emit({ ...this.values });
  }
}
