import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-breadcrumb-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './breadcrumb-docs.component.html',
  styleUrls: ['./breadcrumb-docs.component.scss'],
})
export class BreadcrumbDocsComponent {
  breadcrumbConfig = COMPONENT_CONFIGS['breadcrumb'];

  basicItems = JSON.stringify([
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Electronics', active: true },
  ]);

  arrowItems = JSON.stringify([
    { label: 'Settings', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Passwords', active: true },
  ]);

  customItems = JSON.stringify([
    { id: 'home', label: 'Home', icon: '🏠', href: '#' },
    { id: 'music', label: 'Music', icon: '🎵', href: '#' },
    { id: 'rock', label: 'Rock', active: true },
  ]);

  layoutItems = JSON.stringify([
    { label: 'Workspace', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Angular Ground', active: true },
  ]);
}
