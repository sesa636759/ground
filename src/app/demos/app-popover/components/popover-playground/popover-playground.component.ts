import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-popover-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './popover-playground.component.html',
  styleUrl: './popover-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PopoverPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('popover') popover!: ElementRef;

  pgConfig = {
    heading: 'Popover Title',
    content: 'This is the <b>popover</b> content. You can use <i>HTML</i> here!',
    trigger: 'click',
    placement: 'top',
    variant: 'light',
    width: '280px',
    showArrow: true,
    showCloseButton: true,
    backdrop: false,
  };

  pgAccordionItems = JSON.stringify([
    { id: 'content', title: 'Content Settings', icon: '📝' },
    { id: 'behavior', title: 'Behavior Settings', icon: '⚡' },
    { id: 'appearance', title: 'Appearance', icon: '🎨' },
  ]);

  accordionDefaultOpen = JSON.stringify(['content']);

  triggerOptions = [
    { label: 'Click', value: 'click' },
    { label: 'Hover', value: 'hover' },
    { label: 'Focus', value: 'focus' },
  ];

  placementOptions = [
    { label: 'Top', value: 'top' },
    { label: 'Top Start', value: 'top-start' },
    { label: 'Top End', value: 'top-end' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom Start', value: 'bottom-start' },
    { label: 'Bottom End', value: 'bottom-end' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  variantOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  constructor() {
    super();
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.popover) return;
      const code = this.getCleanFormattedDom(this.popover, 'ui-popover');
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  override resetConfig() {
    this.pgConfig = {
      heading: 'Popover Title',
      content: 'This is the <b>popover</b> content. You can use <i>HTML</i> here!',
      trigger: 'click',
      placement: 'top',
      variant: 'light',
      width: '280px',
      showArrow: true,
      showCloseButton: true,
      backdrop: false,
    };
    this.updateConfig();
    this.eventLog.set([]);
  }
}
