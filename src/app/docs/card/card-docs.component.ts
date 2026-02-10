import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-card-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-docs.component.html',
  styleUrls: ['./card-docs.component.scss'],
})
export class CardDocsComponent {
  cardConfig = COMPONENT_CONFIGS['card'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-card width="100%" variant="default">
  <div slot="header"><h3>Basic Card</h3></div>
  <div slot="content"><p>Standard container for structured information.</p></div>
  <div slot="footer"><ui-button label="Action"></ui-button></div>
</ui-card>`,
    variants: `<ui-card variant="default">...</ui-card>
<ui-card variant="elevated">...</ui-card>
<ui-card variant="outlined">...</ui-card>
<ui-card variant="filled">...</ui-card>`,
    flippable: `<ui-card flippable="true">
  <div slot="content">Front Side (Click to Flip)</div>
  <div slot="back">Back Side Content</div>
</ui-card>`,
    premium: `<ui-card loading="true"></ui-card>
<ui-card selectable="true"></ui-card>
<ui-card show-menu="true" [menuItems]='[...]'>...</ui-card>`,
    cover: `<ui-card variant="elevated">
  <img slot="cover" src="..." alt="Cover" />
  <div slot="header"><h3>Article Title</h3></div>
  <div slot="content"><p>Summary text...</p></div>
</ui-card>`,
  };

  menuItems = JSON.stringify([
    { id: 'edit', label: 'Edit', icon: '✏️' },
    { id: 'share', label: 'Share', icon: '🔗' },
    { separator: true },
    { id: 'delete', label: 'Delete', icon: '🗑️' },
  ]);

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

  onMenuItemClick(event: any) {
    console.log('Menu item clicked:', event.detail);
  }
}
