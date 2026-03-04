import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-stack-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stack-playground.component.html',
  styleUrl: './stack-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class StackPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('stack') stack!: ElementRef;
  numBoxes = 5;
  get boxes() {
    return Array.from({ length: this.numBoxes }, (_, i) => i + 1);
  }

  pgConfig = {
    direction: 'horizontal',
    spacing: '16px',
    align: 'center',
    justify: 'center',
    max: 0,
    overlap: false,
    showDividers: false,
  };

  pgAccordionItems = JSON.stringify([
    { id: 'layout', title: 'Layout Settings', icon: '📏' },
    { id: 'behavior', title: 'Behavior', icon: '⚡' },
    { id: 'content', title: 'Content', icon: '📦' },
  ]);

  accordionDefaultOpen = JSON.stringify(['layout']);

  directionOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  alignOptions = [
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Stretch', value: 'stretch' },
  ];

  justifyOptions = [
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Space Between', value: 'space-between' },
  ];

  constructor() {
    super();
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.stack) return;
      const itemsContent = Array.from(
        { length: Math.min(this.numBoxes, 3) },
        (_, i) => `  <div>Item ${i + 1}</div>`,
      ).join('\n');
      const suffix = this.numBoxes > 3 ? `  <!-- ${this.numBoxes - 3} more items... -->\n` : '';

      const code = generatePlaygroundCode(
        this.stack.nativeElement as Element,
        'ui-stack',
        `${itemsContent}\n${suffix}`,
      );
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  override resetConfig() {
    this.pgConfig = {
      direction: 'horizontal',
      spacing: '16px',
      align: 'center',
      justify: 'center',
      max: 0,
      overlap: false,
      showDividers: false,
    };
    this.numBoxes = 5;
    this.updateConfig();
    this.eventLog.set([]);
  }
}
