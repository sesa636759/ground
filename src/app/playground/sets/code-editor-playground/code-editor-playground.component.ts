import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-code-editor-set-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './code-editor-playground.component.html',
  styleUrl: './code-editor-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmCodeEditorSetPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

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

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      theme: 'vs-dark',
      language: 'javascript',
      height: '400px',
      lineNumbers: true,
      toolbar: true,
      readonly: false,
      labelDisplay: 'hover',
      limitedGroups: false,
    };
  }

  updateConfig() {
    let code = `<ui-code-editor\n`;
    code += `  theme="${this.pgConfig.theme}"\n`;
    code += `  language="${this.pgConfig.language}"\n`;
    if (this.pgConfig.height !== '400px') code += `  height="${this.pgConfig.height}"\n`;
    if (this.pgConfig.lineNumbers) code += `  line-numbers="true"\n`;
    if (this.pgConfig.toolbar) code += `  toolbar="true"\n`;
    if (this.pgConfig.readonly) code += `  readonly="true"\n`;
    if (this.pgConfig.labelDisplay !== 'hover')
      code += `  toolbar-label-display="${this.pgConfig.labelDisplay}"\n`;

    code += '  value="${yourCodeString}"\n';
    code += `></ui-code-editor>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onLanguageChange() {
    const lang = this.pgConfig.language as keyof typeof this.initialCode;
    this.currentCode = this.initialCode[lang] || '// Code here';
    this.updateConfig();
  }

  onValueChange() {
    // this.logEvent(`Value changed. Length: ${event.detail?.length || 0}`);
  }

  onRunCode() {
    this.logEvent(`Run Code Triggered! Executing ${this.pgConfig.language}...`);
  }

  override resetConfig() {
    super.resetConfig();
    this.currentCode = this.initialCode.javascript;
  }
}
