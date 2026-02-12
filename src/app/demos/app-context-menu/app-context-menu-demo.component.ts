import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContextMenuPlaygroundComponent } from './components/context-menu-playground/context-menu-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-context-menu-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, ContextMenuPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-context-menu-demo.component.html',
  styleUrl: './app-context-menu-demo.component.scss',
})
export class AppContextMenuDemoComponent extends BaseDemoComponent {
  exampleVariants = [{ id: 'targets', title: 'Multiple Targets', icon: '🎯' }];

  anchorLinks = JSON.stringify([
    { id: 'targets', label: 'Multiple Targets', target: 'targets', icon: '🎯' },
  ]);

  fileItems = JSON.stringify([
    { label: 'Open', icon: '📂' },
    { label: 'Download', icon: '⬇️' },
    { separator: true },
    { label: 'Rename', icon: '📝' },
    { label: 'Delete', icon: '🗑️' },
  ]);

  playgroundCode = `<div #trigger> Right Click Me </div>
<ui-context-menu [model]="items" [target]="trigger"></ui-context-menu>`;

  targetsCode = `<!-- Global Menu -->
<ui-context-menu [model]="items" global></ui-context-menu>

<!-- Specific Target -->
<img #img src="..." />
<ui-context-menu [model]="imgItems" [target]="img"></ui-context-menu>`;
}
