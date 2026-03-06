import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeDiagramPlaygroundComponent } from './components/tree-diagram-playground/tree-diagram-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'app-tree-diagram-demo',
  standalone: true,
  imports: [
    CommonModule,
    TreeDiagramPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tree-diagram-demo.component.html',
  styleUrl: './tree-diagram-demo.component.scss',
})
export class TreeDiagramDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'org', title: 'Org Chart', icon: '🏢', color: '#6366f1' },
    { id: 'filesystem', title: 'File System', icon: '📁', color: '#10b981' },
  ];

  orgCode = `<!-- Org Chart Tree (SVG + layout algorithm) -->
<svg width="640" height="420">
  <!-- Root node -->
  <circle cx="320" cy="40" r="28" fill="#6366f1"/>
  <text x="320" y="44" text-anchor="middle" fill="white" font-size="11" font-weight="700">CEO</text>
  <!-- Edge to child -->
  <path d="M320,68 C320,100 200,100 200,130" fill="none" stroke="#9ca3af" stroke-width="1.5"/>
  <!-- Child node -->
  <circle cx="200" cy="158" r="24" fill="#0ea5e9"/>
  <text x="200" y="162" text-anchor="middle" fill="white" font-size="10" font-weight="600">CTO</text>
</svg>`;

  filesystemCode = `<!-- File System Tree (top-down) -->
<svg width="640" height="480">
  <!-- Root directory -->
  <rect x="280" y="20" width="80" height="36" rx="6" fill="#6366f1"/>
  <text x="320" y="43" text-anchor="middle" fill="white" font-size="11">src/</text>
  <!-- Curved edges -->
  <path d="M320,56 C320,80 160,80 160,100" fill="none" stroke="#9ca3af" stroke-width="1.5"/>
</svg>`;
}
