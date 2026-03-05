import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-stack-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stack-playground.component.html',
  styleUrl: './stack-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class StackPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('stack') stack!: ElementRef;
  numBoxes = 5;
  get boxes() {
    return Array.from({ length: this.numBoxes }, (_, i) => i + 1);
  }

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout Settings', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'content', title: 'Content', icon: 'settings', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['layout'];

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

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      direction: 'horizontal',
      spacing: '16px',
      align: 'center',
      justify: 'center',
      max: 0,
      overlap: false,
      showDividers: false,
    };
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.stack) return;
      let code = this.getCleanFormattedDom(this.stack, 'ui-stack');
      const itemsContent = Array.from(
        { length: Math.min(this.numBoxes, 3) },
        (_, i) => `  <div>Item ${i + 1}</div>`,
      ).join('\n');
      const suffix = this.numBoxes > 3 ? `  <!-- ${this.numBoxes - 3} more items... -->\n` : '';
      code = code.replace('></ui-stack>', `>\n${itemsContent}\n${suffix}</ui-stack>`);

      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  override resetConfig() {
    super.resetConfig();
    this.numBoxes = 5;
  }
}
