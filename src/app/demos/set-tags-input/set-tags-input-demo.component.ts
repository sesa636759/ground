import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { TagsInputPlaygroundComponent } from './components/tags-input-playground/tags-input-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-set-tags-input-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    TagsInputPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tags-input-demo.component.html',
  styleUrl: './set-tags-input-demo.component.scss',
})
export class DmSetTagsInputDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®' },
    { id: 'basic', title: 'Basic Usage', icon: 'ðŸ“' },
    { id: 'colors', title: 'Color Variants', icon: 'ðŸŽ¨' },
    { id: 'sizes', title: 'Size Variants', icon: 'ðŸ“' },
    { id: 'premium', title: 'Premium Features', icon: 'ðŸ’Ž' },
    { id: 'states', title: 'Component States', icon: 'ðŸ”„' },
  ];

  defaultTags = ['Angular', 'TypeScript', 'Stencil'];
  skillTags = ['JavaScript', 'CSS', 'HTML', 'React', 'Vue'];
  categoryTags = ['Frontend', 'Backend', 'DevOps'];

  playgroundCode = `<app-tags-input
  [(ngModel)]="tags"
  placeholder="Add tags"
  [max]="10"
></app-tags-input>`;
}


