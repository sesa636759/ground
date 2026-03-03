import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../../shared/components/app-playground/app-playground.component';

interface TreeNode {
  id: string;
  label: string;
  icon?: string;
  color?: string;
  children?: TreeNode[];
  x?: number;
  y?: number;
}

@Component({
  selector: 'app-tree-diagram-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tree-diagram-playground.component.html',

  styleUrl: './tree-diagram-playground.component.scss',
})
export class TreeDiagramPlaygroundComponent {
  generatedCode = signal<string>('');

  cfg = {
    orientation: 'horizontal',
    dataset: 'org',
    nodeR: 24,
    showLines: true,
    curved: true,
    showIcons: true,
  };

  orientOpts = [
    { label: 'Top → Down', value: 'horizontal' },
    { label: 'Left → Right', value: 'vertical' },
  ];

  datasetOpts = [
    { label: 'Org Chart', value: 'org' },
    { label: 'File System', value: 'fs' },
    { label: 'Tech Stack', value: 'tech' },
  ];

  orgTree: TreeNode = {
    id: 'ceo',
    label: 'CEO',
    icon: '👔',
    color: '#6366f1',
    children: [
      {
        id: 'cto',
        label: 'CTO',
        icon: '💻',
        color: '#0ea5e9',
        children: [
          { id: 'fe', label: 'Frontend', icon: '🎨', color: '#8b5cf6' },
          { id: 'be', label: 'Backend', icon: '⚙️', color: '#10b981' },
          { id: 'qa', label: 'QA', icon: '🧪', color: '#f59e0b' },
        ],
      },
      {
        id: 'cmo',
        label: 'CMO',
        icon: '📣',
        color: '#0ea5e9',
        children: [
          { id: 'seo', label: 'SEO', icon: '🔍', color: '#f43f5e' },
          { id: 'ads', label: 'Ads', icon: '📢', color: '#fb923c' },
        ],
      },
      {
        id: 'cfo',
        label: 'CFO',
        icon: '💰',
        color: '#0ea5e9',
        children: [{ id: 'acc', label: 'Accounting', icon: '📊', color: '#6366f1' }],
      },
    ],
  };

  fsTree: TreeNode = {
    id: 'root',
    label: '/',
    icon: '📁',
    color: '#6366f1',
    children: [
      {
        id: 'src',
        label: 'src',
        icon: '📂',
        color: '#0ea5e9',
        children: [
          { id: 'app', label: 'app', icon: '📄', color: '#10b981' },
          { id: 'styles', label: 'styles', icon: '🎨', color: '#f59e0b' },
        ],
      },
      {
        id: 'public',
        label: 'public',
        icon: '🌐',
        color: '#0ea5e9',
        children: [{ id: 'assets', label: 'assets', icon: '🖼️', color: '#f43f5e' }],
      },
      {
        id: 'config',
        label: 'config',
        icon: '⚙️',
        color: '#0ea5e9',
        children: [{ id: 'pkg', label: 'package.json', icon: '📦', color: '#8b5cf6' }],
      },
    ],
  };

  techTree: TreeNode = {
    id: 'app',
    label: 'App',
    icon: '🚀',
    color: '#6366f1',
    children: [
      {
        id: 'fe',
        label: 'Frontend',
        icon: '🎨',
        color: '#0ea5e9',
        children: [
          { id: 'ng', label: 'Angular', icon: '🅰️', color: '#f43f5e' },
          { id: 'scss', label: 'SCSS', icon: '💅', color: '#8b5cf6' },
        ],
      },
      {
        id: 'be',
        label: 'Backend',
        icon: '⚙️',
        color: '#0ea5e9',
        children: [
          { id: 'node', label: 'Node.js', icon: '🟢', color: '#10b981' },
          { id: 'db', label: 'PostgreSQL', icon: '🐘', color: '#0ea5e9' },
        ],
      },
    ],
  };

  activeTree = this.orgTree;
  svgW = 680;
  svgH = 380;
  levelH = 100;
  levelW = 140;
  showCode = true;
  code = signal('');

  get flatNodes(): TreeNode[] {
    const nodes: TreeNode[] = [];
    const layout = (node: TreeNode, depth: number, index: number, total: number) => {
      if (this.cfg.orientation === 'horizontal') {
        node.x = 40 + (depth / this.maxDepth(this.activeTree)) * (this.svgW - 80);
        node.y = 40 + (index / Math.max(total - 1, 1)) * (this.svgH - 80);
      } else {
        node.y = 50 + depth * this.levelH;
        node.x = 40 + (index / Math.max(total - 1, 1)) * (this.svgW - 80);
      }
      nodes.push(node);
      if (node.children) {
        node.children.forEach((c, i) => layout(c, depth + 1, i, node.children!.length));
      }
    };
    layout(this.activeTree, 0, 0, 1);
    return nodes;
  }

  get edges(): { x1: number; y1: number; x2: number; x2x?: number; y2: number }[] {
    const edges: any[] = [];
    const traverse = (node: TreeNode) => {
      if (node.children) {
        node.children.forEach((c) => {
          edges.push({ x1: node.x!, y1: node.y!, x2: c.x!, y2: c.y! });
          traverse(c);
        });
      }
    };
    traverse(this.activeTree);
    return edges;
  }

  getCurvedPath(e: { x1: number; y1: number; x2: number; y2: number }): string {
    //const mx = (e.x1 + e.x2) / 2;
    const my = (e.y1 + e.y2) / 2;
    if (this.cfg.orientation === 'horizontal') {
      return `M${e.x1},${e.y1} C${e.x1 + 40},${e.y1} ${e.x2 - 40},${e.y2} ${e.x2},${e.y2}`;
    }
    return `M${e.x1},${e.y1} C${e.x1},${my} ${e.x2},${my} ${e.x2},${e.y2}`;
  }

  maxDepth(node: TreeNode): number {
    if (!node.children || node.children.length === 0) return 0;
    return 1 + Math.max(...node.children.map((c) => this.maxDepth(c)));
  }

  constructor(private cd: ChangeDetectorRef) {
    this.update();
  }

  onDataset() {
    if (this.cfg.dataset === 'fs') this.activeTree = this.fsTree;
    else if (this.cfg.dataset === 'tech') this.activeTree = this.techTree;
    else this.activeTree = this.orgTree;
    this.update();
  }

  update() {
    const c = `<!-- Tree Diagram (SVG) -->
<svg width="${this.svgW}" height="${this.svgH}">
  <!-- dataset: ${this.cfg.dataset} | orientation: ${this.cfg.orientation} -->
  <!-- nodeRadius: ${this.cfg.nodeR}px | curved: ${this.cfg.curved} -->
</svg>`;
    this.code.set(c);
    this.refreshCode();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  copyCode() {
    navigator.clipboard.writeText(this.code());
  }

  reset() {
    this.cfg = {
      orientation: 'horizontal',
      dataset: 'org',
      nodeR: 24,
      showLines: true,
      curved: true,
      showIcons: true,
    };
    this.activeTree = this.orgTree;
    this.update();
  }
}

