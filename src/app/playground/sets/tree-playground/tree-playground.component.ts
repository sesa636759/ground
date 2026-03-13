import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-tree-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tree-playground.component.html',
  styleUrl: './tree-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmTreePlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('treeElement') treeElement!: ElementRef;

  // Playground State
  pgConfig = this.getDefaultConfig();

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      layout: 'tree',
      variant: 'default',
      size: 'medium',
      theme: 'light',
      orientation: 'vertical',
      indent: 24,
      connectorWidth: 2,
      connectorColor: '#3DCD58',
      connectorOpacity: 1,
      showLines: true,
      showIcons: true,
      expandable: true,
      selectable: true,
      multiSelect: false,
      checkboxes: false,
      searchable: true,
      animated: true,
      showGlow: false,
      enableDrag: false,
    };
  }

  demoData = [
    {
      id: 'root',
      label: 'Ground Project',
      icon: 'fas fa-project-diagram',
      expanded: true,
      children: [
        {
          id: 'src',
          label: 'src',
          icon: 'fas fa-folder-open',
          expanded: true,
          children: [
            {
              id: 'app',
              label: 'app',
              icon: 'fas fa-folder',
              children: [
                { id: 'comp1', label: 'component1.ts', icon: 'fab fa-js' },
                { id: 'comp2', label: 'component2.ts', icon: 'fab fa-js' },
              ],
            },
            { id: 'assets', label: 'assets', icon: 'fas fa-images' },
            { id: 'styles', label: 'styles.scss', icon: 'fab fa-sass' },
          ],
        },
        {
          id: 'config',
          label: 'Configuration',
          icon: 'fas fa-cog',
          children: [
            { id: 'ts', label: 'tsconfig.json', icon: 'fas fa-file-code' },
            { id: 'pkg', label: 'package.json', icon: 'fas fa-file-code' },
          ],
        },
      ],
    },
  ];

  updateConfig() {
    let code = `<app-tree\n`;
    code += `  layout="${this.pgConfig.layout}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.theme !== 'light') code += `  theme="${this.pgConfig.theme}"\n`;
    if (this.pgConfig.orientation !== 'vertical')
      code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.indent !== 24) code += `  [indent]="${this.pgConfig.indent}"\n`;
    if (this.pgConfig.connectorWidth !== 2)
      code += `  [connector-width]="${this.pgConfig.connectorWidth}"\n`;
    if (this.pgConfig.connectorOpacity !== 1)
      code += `  [connector-opacity]="${this.pgConfig.connectorOpacity}"\n`;
    if (!this.pgConfig.showLines) code += `  show-lines="false"\n`;
    if (!this.pgConfig.showIcons) code += `  show-icons="false"\n`;
    if (!this.pgConfig.expandable) code += `  expandable="false"\n`;
    if (this.pgConfig.selectable) code += `  selectable="true"\n`;
    if (this.pgConfig.multiSelect) code += `  multi-select="true"\n`;
    if (this.pgConfig.checkboxes) code += `  checkboxes="true"\n`;
    if (this.pgConfig.searchable) code += `  searchable="true"\n`;
    if (!this.pgConfig.animated) code += `  animated="false"\n`;
    if (this.pgConfig.showGlow) code += `  show-glow="true"\n`;
    if (this.pgConfig.enableDrag) code += `  enable-drag="true"\n`;
    code += `  [data]="treeData"\n`;
    code += `></app-tree>`;
    this.generatedCode.set(code);
    this.refreshCode();
  }

  onNodeToggle(event: any) {
    this.logEvent(`Node ${event.detail.id} ${event.detail.expanded ? 'expanded' : 'collapsed'}`);
  }

  onNodeSelect(event: any) {
    this.logEvent(`Node(s) selected: ${JSON.stringify(event.detail.selectedIds)}`);
  }

  onCheckChange(event: any) {
    this.logEvent(`Checked nodes: ${JSON.stringify(event.detail.checkedIds)}`);
  }

  expandAll() {
    const tree = this.treeElement.nativeElement as any;
    if (tree && typeof tree.expandAll === 'function') {
      tree.expandAll();
      this.logEvent('Expanded all nodes');
    }
  }

  collapseAll() {
    const tree = this.treeElement.nativeElement as any;
    if (tree && typeof tree.collapseAll === 'function') {
      tree.collapseAll();
      this.logEvent('Collapsed all nodes');
    }
  }
}
