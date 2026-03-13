import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmTagsInputPlaygroundComponent } from '../../../playground/sets/tags-input-playground/tags-input-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-tags-input-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTagsInputPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tags-input-demo.component.html',
  styleUrl: './tags-input-demo.component.scss',
})
export class DmTagsInputDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Usage', icon: 'tag', iconLibrary: 'lucide' },
    { id: 'colors', title: 'Color Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Size Variants', icon: 'scaling', iconLibrary: 'lucide' },
    { id: 'premium', title: 'Premium Features', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'states', title: 'Component States', icon: 'toggle-left', iconLibrary: 'lucide' },
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
