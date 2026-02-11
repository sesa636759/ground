import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-tooltip-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tooltip-docs.component.html',
  styleUrls: ['./set-tooltip-docs.component.scss'],
})
export class SetTooltipDocsComponent {
  tooltipConfig = COMPONENT_CONFIGS['set-tooltip'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<button app-tooltip="This is a helpful tooltip">
  Hover me
</button>`,
    positions: `<button app-tooltip="Top tooltip" tooltip-position="top">Top</button>
<button app-tooltip="Right tooltip" tooltip-position="right">Right</button>
<button app-tooltip="Bottom tooltip" tooltip-position="bottom">Bottom</button>
<button app-tooltip="Left tooltip" tooltip-position="left">Left</button>`,
    colored: `<button app-tooltip="Success message" tooltip-color="success">
  Success
</button>
<button app-tooltip="Warning message" tooltip-color="warning">
  Warning
</button>
<button app-tooltip="Error message" tooltip-color="danger">
  Danger
</button>`,
    interactive: `<button 
  app-tooltip="Click to copy" 
  tooltip-interactive="true"
  tooltip-trigger="click">
  Interactive tooltip
</button>`,
    delay: `<button 
  app-tooltip="Delayed appearance" 
  tooltip-delay="500">
  Hover (delayed)
</button>`,
    arrow: `<button 
  app-tooltip="Tooltip with arrow" 
  tooltip-arrow="true">
  With Arrow
</button>`,
    rich: `<button 
  app-tooltip="<strong>Bold</strong> and <em>italic</em> text"
  tooltip-html="true">
  Rich Content
</button>`,
    disabled: `<button 
  app-tooltip="This button is disabled" 
  tooltip-show-on-disabled="true"
  disabled>
  Disabled Button
</button>`,
  };

  getActiveExampleLabel() {
    return this.activeExample;
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
