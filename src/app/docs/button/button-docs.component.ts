import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-button-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button-docs.component.html',
  styleUrls: ['./button-docs.component.scss'],
})
export class ButtonDocsComponent {
  buttonConfig = COMPONENT_CONFIGS['button'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'variants';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    variants: `<ui-button label="Primary" variant="primary"></ui-button>
<ui-button label="Secondary" variant="secondary"></ui-button>
<ui-button label="Success" variant="success"></ui-button>
<ui-button label="Danger" variant="danger"></ui-button>
<ui-button label="Warning" variant="warning"></ui-button>
<ui-button label="Info" variant="info"></ui-button>
<ui-button label="Outline" variant="outline"></ui-button>
<ui-button label="Ghost" variant="ghost"></ui-button>`,
    sizes: `<ui-button label="Extra Small" size="xs" variant="primary"></ui-button>
<ui-button label="Small" size="sm" variant="primary"></ui-button>
<ui-button label="Medium" size="md" variant="primary"></ui-button>
<ui-button label="Large" size="lg" variant="primary"></ui-button>
<ui-button label="Extra Large" size="xl" variant="primary"></ui-button>`,
    shapes: `<ui-button label="Default" variant="secondary"></ui-button>
<ui-button label="Rounded" [rounded]="true" variant="secondary"></ui-button>
<ui-button label="Pill" [pill]="true" variant="secondary"></ui-button>`,
    icons: `<ui-button label="Left Icon" icon="⬅️" icon-position="left" variant="outline"></ui-button>
<ui-button label="Right Icon" icon="➡️" icon-position="right" variant="outline"></ui-button>
<ui-button label="Top Icon" icon="⬆️" icon-position="top" variant="outline"></ui-button>
<ui-button label="Bottom Icon" icon="⬇️" icon-position="bottom" variant="outline"></ui-button>`,
    iconOnly: `<ui-button icon="✏️" [iconOnly]="true" variant="ghost"></ui-button>
<ui-button icon="🗑️" [iconOnly]="true" variant="danger" [rounded]="true"></ui-button>
<ui-button icon="💾" [iconOnly]="true" variant="primary" [pill]="true"></ui-button>`,
    loading: `<ui-button label="Loading Left" [loading]="true" loading-position="left" variant="primary"></ui-button>
<ui-button label="Loading Right" [loading]="true" loading-position="right" variant="success"></ui-button>
<ui-button label="Loading Top" [loading]="true" loading-position="top" variant="info"></ui-button>`,
    badges: `<ui-button label="Inbox" icon="📥" badge="3" variant="primary"></ui-button>
<ui-button icon="🔔" [iconOnly]="true" badge="9+" variant="secondary" [rounded]="true"></ui-button>
<ui-button label="Updates" badge="New" variant="success" size="sm"></ui-button>`,
    advanced: `<ui-button label="Elevated" elevation="3" variant="primary"></ui-button>
<ui-button label="Full Width" [fullWidth]="true" variant="secondary"></ui-button>
<ui-button label="No Ripple" [noRipple]="true" variant="outline"></ui-button>`,
  };

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
