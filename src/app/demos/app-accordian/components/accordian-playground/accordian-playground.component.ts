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
  selector: 'app-accordion-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './accordian-playground.component.html',
  styleUrl: './accordian-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AccordianPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'visual', title: 'Visual Styles', icon: '🎨' },
    { id: 'behavior', title: 'Behavioral Settings', icon: '⚙️' },
    { id: 'animation', title: 'Animation Details', icon: '✨' },
  ]);

  defaultOpen = JSON.stringify(['visual']);

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Splitted', value: 'splitted' },
    { label: 'Light', value: 'light' },
    { label: 'Shadow', value: 'shadow' },
    { label: 'Card', value: 'card' },
    { label: 'Card List', value: 'card-list' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  iconPositionOptions = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];

  expansionModeOptions = [
    { label: 'Single', value: false },
    { label: 'Multiple', value: true },
  ];

  timingOptions = [
    { label: 'Ease', value: 'ease' },
    { label: 'Linear', value: 'linear' },
    { label: 'Ease In', value: 'ease-in' },
    { label: 'Ease Out', value: 'ease-out' },
    { label: 'Ease In Out', value: 'ease-in-out' },
  ];

  playgroundItems = [
    {
      id: 'p1',
      title: 'First Panel',
      content:
        '<p>This is the content of the first panel. It demonstrates the accordion functionality with customizable settings.</p>',
    },
    {
      id: 'p2',
      title: 'Second Panel (Nested Example)',
      content: '<p>The second panel contains nested items if "Enable Nested" is checked.</p>',
      children: [
        {
          id: 'p2-1',
          title: 'Nested Item 1',
          content: '<p>This is a nested item content.</p>',
        },
        {
          id: 'p2-2',
          title: 'Nested Item 2',
          content: '<p>Another nested item.</p>',
        },
      ],
    },
    {
      id: 'p3',
      title: 'Third Panel',
      content:
        "<p>This is the third panel. Adjust the settings above to see how they affect the accordion's appearance and behavior.</p>",
    },
  ];

  itemsJson = JSON.stringify(this.playgroundItems);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      multiple: false,
      variant: 'card',
      size: 'md',
      iconPosition: 'end',
      selectedHeaderColor: '#3b82f6',
      hideArrow: false,
      showNumbers: false,
      rtl: false,
      dense: false,
      disabled: false,
      enableSearch: false,
      enableExpandCollapseAll: false,
      enableDragDrop: false,
      enableNested: false,
      loading: false,
      animationDuration: 300,
      animationTiming: 'ease',
      lazy: false,
      headerLevel: 3,
    };
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.demoElement) return;
      let code = this.getCleanFormattedDom(this.demoElement, 'ui-accordion');
      code = code.replace('></ui-accordion>', '\n  [items]="items"\n></ui-accordion>');
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  onAccordionChange(event: any) {
    this.logEvent(`Accordion items changed/expanded`);
  }

  override resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.updateConfig();
    this.eventLog.set([]);
  }
}
