import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-card-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-card-docs.component.html',
  styleUrls: ['./set-card-docs.component.scss'],
})
export class SetCardDocsComponent {
  cardConfig = COMPONENT_CONFIGS['set-card'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-card>
  <div card-header>Premium Card</div>
  <div card-body>
    This is a standard premium card components from the Set UI library.
  </div>
</app-card>`,
    with_image: `<app-card>
  <img card-image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" alt="Card image" />
  <div card-body>
    Card with high-quality imagery support.
  </div>
</app-card>`,
    with_footer: `<app-card>
  <div card-header>Header Section</div>
  <div card-body>
    Main content area with footer actions below.
  </div>
  <div card-footer>
    <button class="action-btn primary">Action</button>
  </div>
</app-card>`,
    elevated: `<app-card elevation="high">
  <div card-body>
    High elevation shadow effect.
  </div>
</app-card>`,
    bordered: `<app-card variant="bordered">
  <div card-body>
    Clean bordered variation.
  </div>
</app-card>`,
    clickable: `<app-card [clickable]="true">
  <div card-body>
    Hover and click effects enabled.
  </div>
</app-card>`,
    colored: `<app-card color="primary">
  <div card-body>
    Primary color theme applied to the card.
  </div>
</app-card>`,
    horizontal: `<app-card orientation="horizontal">
  <img card-image src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=200&q=80" style="width: 150px" />
  <div card-body>
    Horizontal layout for wider displays.
  </div>
</app-card>`,
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
