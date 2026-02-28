import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-tree-list-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppPlaygroundComponent, AppCheckboxValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tree-list-playground.component.html',
  styleUrl: './tree-list-playground.component.scss',
})
export class TreeListPlaygroundComponent implements AfterViewInit {
  @ViewChild('treeElement') treeElement!: ElementRef;
  generatedCodeSignal = signal<string>('');

  pgConfig = {
    selectable: true,
    showIcons: true,
    expandAll: false,
  };

  pgAccordionItems = JSON.stringify([
    { id: 'features', title: 'Features', icon: '✨' },
    { id: 'behavior', title: 'Behavior', icon: '⚙️' },
  ]);

  accordionDefaultOpen = JSON.stringify(['features']);

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
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  getCleanFormatedDom(): string {
    if (!this.treeElement) return '';
    let code = generatePlaygroundCode(this.treeElement.nativeElement as Element, 'ui-tree-list');
    // Add model prop to code manually
    code = code.replace('></ui-tree-list>', '\n  [model]="treeData"\n></ui-tree-list>');
    return code;
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      selectable: true,
      showIcons: true,
      expandAll: false,
    };
    this.updateConfig();
  }
}
