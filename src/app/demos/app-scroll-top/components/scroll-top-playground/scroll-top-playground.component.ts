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
  selector: 'app-scroll-top-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scroll-top-playground.component.html',
  styleUrl: './scroll-top-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ScrollTopPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'behavior', title: 'Behavior', icon: '⚙️' },
    { id: 'visuals', title: 'Visuals', icon: '🎨' },
  ]);

  defaultOpen = JSON.stringify(['behavior']);

  shapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      threshold: 200,
      icon: '??',
      shape: 'circle',
      speed: 400,
    };
  }

  updateConfig() {
    let code = '<ui-scroll-top\n';
    code += `  target="#scroll-container"\n`;
    code += `  threshold="${this.pgConfig.threshold}"\n`;
    code += `  icon="${this.pgConfig.icon}"\n`;
    code += `  shape="${this.pgConfig.shape}"\n`;
    code += '></ui-scroll-top>';

    this.generatedCode.set(code);
    this.refreshCode();
  }
}
