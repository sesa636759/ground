import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeEditorPlaygroundComponent } from './components/code-editor-playground/code-editor-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-code-editor-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeEditorPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-code-editor-demo.component.html',
  styleUrl: './set-code-editor-demo.component.scss',
})
export class SetCodeEditorDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'language-support', title: 'Language Support', icon: '✨' },
    { id: 'features', title: 'Features', icon: '🛠' },
  ];

  playgroundCode = `<app-code-editor
  language="typescript"
  theme="vs-dark"
  [value]="code"
  [options]="editorOptions"
></app-code-editor>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
