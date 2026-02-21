import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeEditorPlaygroundComponent } from './components/code-editor-playground/code-editor-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';

@Component({
  selector: 'app-set-code-editor-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeEditorPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoSidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-code-editor-demo.component.html',
  styleUrl: './set-code-editor-demo.component.scss',
})
export class SetCodeEditorDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'language-support', title: 'Language Support', icon: '✨', color: '#3b82f6' },
    { id: 'features', title: 'Features', icon: '🛠', color: '#10b981' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  anchorLinks = JSON.stringify(
    this.variants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  playgroundCode = `<app-code-editor
  language="typescript"
  theme="vs-dark"
  [value]="code"
  [options]="editorOptions"
></app-code-editor>`;

  ngOnInit() {}
}
