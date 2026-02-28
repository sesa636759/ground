import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-code-editor-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './code-editor-playground.component.html',
  styleUrl: './code-editor-playground.component.scss',
})
export class CodeEditorPlaygroundComponent implements OnInit {
  pgConfig = {
    theme: 'vs-dark',
    language: 'javascript',
    height: '400px',
    lineNumbers: true,
    toolbar: true,
    readonly: false,
    labelDisplay: 'hover',
    limitedGroups: false,
  };

  initialCode = {
    javascript: `// Interactive Demo
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return \`Hello, \${this.name}!\`;
  }
}
const user = new Person("Developer");
console.log(user.greet());`,
    html: `<!-- Interactive Demo -->
<header class="hero">
  <nav class="nav-bar">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
  <h1>Welcome to the Future</h1>
</header>`,
    css: `/* Interactive Demo */
.hero {
  background: linear-gradient(to right, #4facfe, #00f2fe);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 0 0 50% 50% / 4%;
}`,
    json: `{
  "demo": "interactive",
  "users": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ],
  "settings": {
    "active": true
  }
}`,
  };

  currentCode = this.initialCode.javascript;
  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-code-editor\n`;
    code += `  theme="${this.pgConfig.theme}"\n`;
    code += `  language="${this.pgConfig.language}"\n`;
    if (this.pgConfig.height !== '400px') code += `  height="${this.pgConfig.height}"\n`;
    if (this.pgConfig.lineNumbers) code += `  line-numbers="true"\n`;
    if (this.pgConfig.toolbar) code += `  toolbar="true"\n`;
    if (this.pgConfig.readonly) code += `  readonly="true"\n`;
    if (this.pgConfig.labelDisplay !== 'hover')
      code += `  toolbar-label-display="${this.pgConfig.labelDisplay}"\n`;

    // Note: complex objects like tabs or toolbarGroups might need to be set via props in real usage,
    // but for generated HTML string representation we can just show the attributes.

    code += `  value="\$\{yourCodeString\}"\n`;
    code += `></app-code-editor>`;

    this.generatedCode.set(code);

    // Update content when language changes
    // In Angular bindings, we bind [value]="currentCode"
  }

  onLanguageChange() {
    // @ts-ignore
    this.currentCode = this.initialCode[this.pgConfig.language] || '// Code here';
    this.updateConfig();
  }

  onValueChange(event: any) {
    // this.logEvent(`Value changed. Length: ${event.detail?.length || 0}`);
  }

  onRunCode(event: any) {
    this.logEvent(`Run Code Triggered! Executing ${this.pgConfig.language}...`);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
