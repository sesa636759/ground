import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-breadcrumb-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './breadcrumb-docs.component.html',
  styleUrls: ['./breadcrumb-docs.component.scss'],
})
export class BreadcrumbDocsComponent {
  breadcrumbConfig = COMPONENT_CONFIGS['breadcrumb'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'variants';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    variants: `<ui-breadcrumb [attr.items]="basicItems"></ui-breadcrumb>
<ui-breadcrumb [attr.items]="basicItems" variant="pills"></ui-breadcrumb>
<ui-breadcrumb [attr.items]="basicItems" variant="glass" separator="›"></ui-breadcrumb>`,
    collapsible: `<ui-breadcrumb [attr.items]="longItems" max-items="3"></ui-breadcrumb>`,
    media: `<ui-breadcrumb [attr.items]="iconItems" show-home="true"></ui-breadcrumb>`,
    customization: `<ui-breadcrumb [attr.items]="basicItems" separator="→" size="lg"></ui-breadcrumb>`,
  };

  basicItems = JSON.stringify([
    { label: 'Home', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Data', active: true },
  ]);

  longItems = JSON.stringify([
    { label: 'Level 1', href: '#' },
    { label: 'Level 2', href: '#' },
    { label: 'Level 3', href: '#' },
    { label: 'Level 4', href: '#' },
    { label: 'Level 5', active: true },
  ]);

  iconItems = JSON.stringify([
    { label: 'Home', icon: '🏠', href: '#' },
    { label: 'Library', icon: '📁', href: '#', badge: '12', badgeVariant: 'primary' },
    { label: 'Advanced', icon: '⚙️', href: '#', badge: 'NEW', badgeVariant: 'success' },
    { label: 'Settings', active: true },
  ]);

  setTab(tab: 'examples' | 'playground' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
    this.isCodeVisible = false;
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }
}
