import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-pill-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pill-docs.component.html',
  styleUrls: ['./pill-docs.component.scss'],
})
export class PillDocsComponent {
  pillConfig = COMPONENT_CONFIGS['pill'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'variants';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    variants: `<ui-pill label="Primary" color="primary"></ui-pill>
<ui-pill label="Success" variant="outlined" color="success"></ui-pill>
<ui-pill label="Warning" variant="soft" color="warning"></ui-pill>
<ui-pill label="Gradient" variant="gradient" gradient="blue-purple"></ui-pill>`,
    orientations: `<ui-pill label="Vertical" icon="🏠" orientation="vertical" color="primary"></ui-pill>
<ui-pill label="JAPAN" icon="🇯🇵" orientation="vertical-text" color="danger"></ui-pill>
<ui-pill label="SIDEWAYS" icon="➡️" orientation="vertical-rotated" color="success"></ui-pill>`,
    media: `<ui-pill label="User" icon="👤" color="info"></ui-pill>
<ui-pill label="With Avatar" avatar="https://i.pravatar.cc/150?img=12" color="success"></ui-pill>
<ui-pill label="Counter" counter="5" color="warning"></ui-pill>`,
    interaction: `<ui-pill label="Removable" [removable]="true" color="danger"></ui-pill>
<ui-pill label="Clickable" [clickable]="true" color="primary"></ui-pill>
<ui-pill label="Loading" [loading]="true" color="warning"></ui-pill>`,
  };

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

  onPillClick() {
    console.log('Pill clicked!');
  }

  onPillRemove() {
    console.log('Pill removed!');
  }
}
