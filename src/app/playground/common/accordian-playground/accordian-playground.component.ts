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
  selector: 'dm-accordion-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './accordian-playground.component.html',
  styleUrl: './accordian-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmAccordianPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'visual', title: 'Visual Styles', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavioral Settings', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'animation', title: 'Animation Details', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Advanced & Kinetic', icon: 'zap', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['visual'];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Splitted', value: 'splitted' },
    { label: 'Light', value: 'light' },
    { label: 'Shadow', value: 'shadow' },
    { label: 'Card', value: 'card' },
    { label: 'Card List', value: 'card-list' },
  ];

  iconPositionOptions = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];

  iconLibraryOptions = [
    { label: 'Lucide', value: 'lucide' },
    { label: 'FontAwesome', value: 'fontawesome' },
    { label: 'Emoji', value: 'emoji' },
    { label: 'None', value: '' },
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

  physicsOptions = [
    { label: 'Stiff', value: 'stiff' },
    { label: 'Bouncy', value: 'bouncy' },
    { label: 'Liquid', value: 'liquid' },
  ];

  themeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Glass', value: 'glass' },
    { label: 'Radiant', value: 'radiant' },
  ];

  columnsOptions = [
    { label: '1 Column', value: 1 },
    { label: '2 Columns', value: 2 },
    { label: '3 Columns', value: 3 },
    { label: '4 Columns', value: 4 },
  ];

  playgroundItems = [
    {
      id: 'p1',
      title: 'First Panel',
      icon: 'info',
      badge: 2,
      content:
        '<p>This is the content of the first panel. It demonstrates the accordion functionality with customizable settings.</p>',
    },
    {
      id: 'p2',
      title: 'Second Panel',
      icon: 'layers',
      subtitle: 'Contains nested items when enabled',
      content: '<p>The second panel shows nested items when "Enable Nested" is on.</p>',
      children: [
        {
          id: 'p2-1',
          title: 'Nested Item 1',
          icon: 'file',
          content: '<p>This is nested item content.</p>',
        },
        {
          id: 'p2-2',
          title: 'Nested Item 2',
          icon: 'file',
          content: '<p>Another nested item.</p>',
        },
      ],
      actions: [
        { id: 'edit', label: 'Edit', icon: 'pencil' },
        { id: 'delete', label: 'Delete', icon: 'trash-2' },
      ],
    },
    {
      id: 'p3',
      title: 'Third Panel',
      icon: 'settings',
      subtitle: 'Adjust the controls above',
      content:
        "<p>This is the third panel. Adjust the settings above to see how they affect the accordion's appearance and behavior.</p>",
    },
  ];

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
      iconLibrary: 'lucide',
      selectedHeaderColor: '#3b82f6',
      hideArrow: false,
      showNumbers: false,
      rtl: false,
      dense: false,
      disabled: false,
      enableSearch: false,
      searchPlaceholder: 'Search...',
      enableExpandCollapseAll: false,
      enableDragDrop: false,
      enableNested: false,
      enablePersistence: false,
      persistenceKey: 'playground-accordion-v1',
      loading: false,
      animationDuration: 300,
      animationTiming: 'ease',
      lazy: false,
      headerLevel: 3,
      defaultOpen: 'p1',
      // Advanced & Kinetic
      autoScroll: true,
      stickyHeaders: false,
      physics: 'stiff',
      columns: 1,
      theme: 'default',
      printExpandAll: false,
      arrowIconCollapsed: '',
      arrowIconExpanded: '',
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

  getParsedDefaultOpen() {
    return this.pgConfig.defaultOpen
      ? this.pgConfig.defaultOpen.split(',').map((id) => id.trim())
      : [];
  }

  onAccordionChange(event: any) {
    this.logEvent(`Accordion items changed/expanded`);
  }
}
