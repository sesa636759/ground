import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-code-editor-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './code-editor-docs.component.html',
  styleUrls: ['./code-editor-docs.component.scss'],
})
export class CodeEditorDocsComponent {
  codeEditorConfig = {
    id: 'code-editor',
    tagName: 'app-code-editor',
    label: 'Code Editor',
    props: [
      { name: 'language', type: 'string' as const, defaultValue: 'javascript', description: 'Programming language for syntax highlighting' },
      { name: 'value', type: 'string' as const, defaultValue: '', description: 'Editor content' },
      { name: 'theme', type: 'string' as const, defaultValue: 'vs-dark', description: 'Editor theme (vs-dark, vs-light, monokai, etc.)' },
      { name: 'readonly', type: 'boolean' as const, defaultValue: 'false', description: 'Read-only mode' },
      { name: 'syntax-highlighting', type: 'boolean' as const, defaultValue: 'true', description: 'Enable syntax highlighting' },
      { name: 'autocomplete', type: 'boolean' as const, defaultValue: 'false', description: 'Enable auto-completion' },
      { name: 'minimap', type: 'boolean' as const, defaultValue: 'false', description: 'Show minimap' },
      { name: 'mode', type: 'string' as const, defaultValue: 'editor', description: 'Editor mode (editor, diff, tabs)' },
    ]
  };
  
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-code-editor
  language="javascript"
  [value]="sampleCode">
</app-code-editor>`,
    syntax: `<app-code-editor
  language="typescript"
  [syntax-highlighting]="true"
  [value]="typescriptCode">
</app-code-editor>`,
    themes: `<app-code-editor
  language="python"
  theme="monokai"
  [value]="pythonCode">
</app-code-editor>`,
    readonly: `<app-code-editor
  language="html"
  [readonly]="true"
  [value]="htmlCode">
</app-code-editor>`,
    autocomplete: `<app-code-editor
  language="javascript"
  [autocomplete]="true"
  [suggestions]="suggestions"
  [value]="sampleCode">
</app-code-editor>`,
    diff: `<app-code-editor
  mode="diff"
  [original]="originalCode"
  [modified]="modifiedCode">
</app-code-editor>`,
    minimap: `<app-code-editor
  language="typescript"
  [minimap]="true"
  [value]="longCode">
</app-code-editor>`,
    multitab: `<app-code-editor
  mode="tabs"
  [files]="multipleFiles">
</app-code-editor>`,
  };

  sampleCode = `function hello() {\n  console.log('Hello World');\n}`;
  typescriptCode = `interface User {\n  name: string;\n  age: number;\n}`;
  pythonCode = `def hello():\n    print("Hello World")`;
  htmlCode = `<div class="container">\n  <h1>Title</h1>\n</div>`;
  originalCode = `const x = 1;`;
  modifiedCode = `const x = 2;`;
  longCode = `// Long code sample\nfunction example() {\n  // ...\n}`;
  
  suggestions = JSON.stringify(['console', 'document', 'window']);
  multipleFiles = JSON.stringify([
    { name: 'app.ts', content: 'import { Component } from "@angular/core";' },
    { name: 'app.html', content: '<div>App</div>' },
  ]);

  getActiveExampleLabel() {
    return this.activeExample.replace(/_/g, ' ');
  }

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
