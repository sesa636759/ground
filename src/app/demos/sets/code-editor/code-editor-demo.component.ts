import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmCodeEditorPlaygroundComponent } from '../../../playground/sets/code-editor-playground/code-editor-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-code-editor-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmCodeEditorPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './code-editor-demo.component.html',
  styleUrl: './code-editor-demo.component.scss',
})
export class DmCodeEditorDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'language-support', title: 'Language Support', icon: 'code-2', iconLibrary: 'lucide' },
    { id: 'features', title: 'Features', icon: 'zap', iconLibrary: 'lucide' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  playgroundCode = `<dui-code-editor
  language="typescript"
  theme="vs-dark"
  [value]="code"
  [options]="editorOptions"
></dui-code-editor>`;

  ngOnInit() {}
}
