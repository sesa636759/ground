import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../../directives/ui-dropdown-value-accessor.directive';

interface TreeNode { id: string; label: string; icon?: string; color?: string; children?: TreeNode[]; x?: number; y?: number; }

@Component({
  selector: 'app-tree-diagram-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective, UiDropdownValueAccessorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion items='[{"id":"cfg","title":"Configuration","icon":"⚙️"}]' defaultOpen='["cfg"]' multiple>
          <div slot="content-cfg">
            <div class="control-grid">
              <div class="control-section">
                <h3>📐 Layout</h3>
                <div class="control-group">
                  <label>Orientation</label>
                  <ui-dropdown [(ngModel)]="cfg.orientation" (ngModelChange)="update()" [options]="orientOpts"></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Dataset</label>
                  <ui-dropdown [(ngModel)]="cfg.dataset" (ngModelChange)="onDataset()" [options]="datasetOpts"></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Node Radius</label>
                  <input type="range" min="16" max="36" step="2" [(ngModel)]="cfg.nodeR" (ngModelChange)="update()"/>
                  <span style="font-size:0.8rem;color:var(--text-secondary)">{{ cfg.nodeR }}px</span>
                </div>
              </div>
              <div class="control-section">
                <h3>✨ Features</h3>
                <div class="checkbox-group">
                  <app-checkbox id="showLines" [(ngModel)]="cfg.showLines" (ngModelChange)="update()" label="Show Lines"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="curved" [(ngModel)]="cfg.curved" (ngModelChange)="update()" label="Curved Lines"></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox id="icons" [(ngModel)]="cfg.showIcons" (ngModelChange)="update()" label="Show Icons"></app-checkbox>
                </div>
              </div>
            </div>
            <div class="action-buttons">
              <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
              <ui-button variant="secondary" (click)="reset()" label="Reset"></ui-button>
            </div>
          </div>
        </ui-accordion>
      </div>
      <div class="playground-preview">
        <div class="chart-preview-wrapper">
          <div style="width:100%;overflow:auto;">
            <svg [attr.width]="svgW" [attr.height]="svgH" style="display:block;margin:0 auto;font-family:inherit;">
              <!-- Lines -->
              <g *ngIf="cfg.showLines">
                <g *ngFor="let edge of edges">
                  <path *ngIf="cfg.curved" [attr.d]="getCurvedPath(edge)" fill="none" stroke="#d1d5db" stroke-width="2"/>
                  <line *ngIf="!cfg.curved" [attr.x1]="edge.x1" [attr.y1]="edge.y1" [attr.x2]="edge.x2" [attr.y2]="edge.y2" stroke="#d1d5db" stroke-width="2"/>
                </g>
              </g>
              <!-- Nodes -->
              <g *ngFor="let node of flatNodes">
                <circle [attr.cx]="$any(node).x" [attr.cy]="$any(node).y" [attr.r]="cfg.nodeR" [attr.fill]="node.color || '#6366f1'" opacity="0.9"/>
                <text *ngIf="cfg.showIcons && node.icon" [attr.x]="$any(node).x" [attr.y]="$any(node).y+5" text-anchor="middle" font-size="14">{{ node.icon }}</text>
                <text [attr.x]="$any(node).x" [attr.y]="$any(node).y + cfg.nodeR + 14" text-anchor="middle" font-size="11" fill="#374151" font-weight="500">{{ node.label }}</text>
              </g>
            </svg>
          </div>
        </div>
        <div class="code-output">
          <ui-code-preview *ngIf="showCode" [htmlCode]="code()" label="Generated Code" activeLang="html" expanded="true"></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './tree-diagram-playground.component.scss',
})
export class TreeDiagramPlaygroundComponent {
  cfg = { orientation: 'horizontal', dataset: 'org', nodeR: 24, showLines: true, curved: true, showIcons: true };

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
    id: 'ceo', label: 'CEO', icon: '👔', color: '#6366f1', children: [
      { id: 'cto', label: 'CTO', icon: '💻', color: '#0ea5e9', children: [
        { id: 'fe',  label: 'Frontend', icon: '🎨', color: '#8b5cf6' },
        { id: 'be',  label: 'Backend',  icon: '⚙️', color: '#10b981' },
        { id: 'qa',  label: 'QA',       icon: '🧪', color: '#f59e0b' },
      ]},
      { id: 'cmo', label: 'CMO', icon: '📣', color: '#0ea5e9', children: [
        { id: 'seo', label: 'SEO', icon: '🔍', color: '#f43f5e' },
        { id: 'ads', label: 'Ads', icon: '📢', color: '#fb923c' },
      ]},
      { id: 'cfo', label: 'CFO', icon: '💰', color: '#0ea5e9', children: [
        { id: 'acc', label: 'Accounting', icon: '📊', color: '#6366f1' },
      ]},
    ],
  };

  fsTree: TreeNode = {
    id: 'root', label: '/', icon: '📁', color: '#6366f1', children: [
      { id: 'src', label: 'src', icon: '📂', color: '#0ea5e9', children: [
        { id: 'app', label: 'app', icon: '📄', color: '#10b981' },
        { id: 'styles', label: 'styles', icon: '🎨', color: '#f59e0b' },
      ]},
      { id: 'public', label: 'public', icon: '🌐', color: '#0ea5e9', children: [
        { id: 'assets', label: 'assets', icon: '🖼️', color: '#f43f5e' },
      ]},
      { id: 'config', label: 'config', icon: '⚙️', color: '#0ea5e9', children: [
        { id: 'pkg', label: 'package.json', icon: '📦', color: '#8b5cf6' },
      ]},
    ],
  };

  techTree: TreeNode = {
    id: 'app', label: 'App', icon: '🚀', color: '#6366f1', children: [
      { id: 'fe', label: 'Frontend', icon: '🎨', color: '#0ea5e9', children: [
        { id: 'ng',  label: 'Angular', icon: '🅰️', color: '#f43f5e' },
        { id: 'scss', label: 'SCSS', icon: '💅', color: '#8b5cf6' },
      ]},
      { id: 'be', label: 'Backend', icon: '⚙️', color: '#0ea5e9', children: [
        { id: 'node', label: 'Node.js', icon: '🟢', color: '#10b981' },
        { id: 'db',   label: 'PostgreSQL', icon: '🐘', color: '#0ea5e9' },
      ]},
    ],
  };

  activeTree = this.orgTree;
  svgW = 680; svgH = 380;
  levelH = 100; levelW = 140;
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
        node.children.forEach(c => {
          edges.push({ x1: node.x!, y1: node.y!, x2: c.x!, y2: c.y! });
          traverse(c);
        });
      }
    };
    traverse(this.activeTree);
    return edges;
  }

  getCurvedPath(e: { x1: number; y1: number; x2: number; y2: number }): string {
    const mx = (e.x1 + e.x2) / 2;
    const my = (e.y1 + e.y2) / 2;
    if (this.cfg.orientation === 'horizontal') {
      return `M${e.x1},${e.y1} C${e.x1+40},${e.y1} ${e.x2-40},${e.y2} ${e.x2},${e.y2}`;
    }
    return `M${e.x1},${e.y1} C${e.x1},${my} ${e.x2},${my} ${e.x2},${e.y2}`;
  }

  maxDepth(node: TreeNode): number {
    if (!node.children || node.children.length === 0) return 0;
    return 1 + Math.max(...node.children.map(c => this.maxDepth(c)));
  }

  constructor(private cd: ChangeDetectorRef) { this.update(); }

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
    setTimeout(() => { this.showCode = false; this.cd.detectChanges(); this.showCode = true; this.cd.detectChanges(); }, 0);
  }

  copyCode() { navigator.clipboard.writeText(this.code()); }

  reset() {
    this.cfg = { orientation: 'horizontal', dataset: 'org', nodeR: 24, showLines: true, curved: true, showIcons: true };
    this.activeTree = this.orgTree;
    this.update();
  }
}
