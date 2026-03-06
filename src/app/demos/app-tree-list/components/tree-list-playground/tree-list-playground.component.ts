import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-tree-list-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tree-list-playground.component.html',
  styleUrl: './tree-list-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TreeListPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'features', title: 'Features', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior', icon: 'settings', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['features'];

  model = [
    {
      label: 'Documents',
      icon: '📁',
      expanded: true,
      children: [
        {
          label: 'Work',
          icon: '💼',
          children: [
            { label: 'Project A.docx', icon: '📄' },
            { label: 'Project B.xlsx', icon: '📊' },
          ],
        },
        { label: 'Personal', icon: '🏠', children: [{ label: 'Resume.pdf', icon: '📄' }] },
      ],
    },
    {
      label: 'Pictures',
      icon: '🖼️',
      children: [
        { label: 'Vacation.jpg', icon: '🏖️' },
        { label: 'Family.png', icon: '👨‍👩‍👧‍👦' },
      ],
    },
    {
      label: 'Downloads',
      icon: '⬇️',
      children: [],
    },
  ];

  modelJson = JSON.stringify(this.model);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      selectable: true,
      showIcons: true,
      expandAll: false,
    };
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.demoElement) return;
      let code = this.getCleanFormattedDom(this.demoElement, 'ui-tree-list');
      // Add model prop to code manually inside the bracket if needed, actually it should be captured by DOM if bound as attr, but it's bound as property.
      code = code.replace('></ui-tree-list>', '\n  [model]="treeData"\n></ui-tree-list>');
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  onTreeSelection(event: any) {
    this.logEvent(
      `Tree selection changed. Selected item(s): ${event.detail?.length ? event.detail.length : 0}`,
    );
  }
}
