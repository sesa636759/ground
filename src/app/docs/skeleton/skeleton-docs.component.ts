import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-skeleton-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skeleton-docs.component.html',
  styleUrls: ['./skeleton-docs.component.scss'],
})
export class SkeletonDocsComponent {
  skeletonConfig = COMPONENT_CONFIGS['skeleton'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'shapes';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    shapes: `<skeleton-loader shape="rectangle" width="120px" height="80px"></skeleton-loader>
<skeleton-loader shape="circle" width="80px" height="80px"></skeleton-loader>
<skeleton-loader shape="oval" width="120px" height="80px"></skeleton-loader>
<skeleton-loader shape="image" width="120px" height="80px"></skeleton-loader>`,
    animations: `<skeleton-loader animation-type="pulse" width="100%" height="40px"></skeleton-loader>
<skeleton-loader animation-type="wave" width="100%" height="40px"></skeleton-loader>
<skeleton-loader [animated]="false" width="100%" height="40px"></skeleton-loader>`,
    layouts: `<!-- Card Layout -->
<div class="skeleton-card">
  <skeleton-loader shape="rectangle" width="100%" height="160px"></skeleton-loader>
  <skeleton-loader width="60%" height="24px"></skeleton-loader>
  <skeleton-loader width="100%" height="16px"></skeleton-loader>
</div>`,
    sizes: `<skeleton-loader size="sm" width="200px"></skeleton-loader>
<skeleton-loader size="md" width="200px"></skeleton-loader>
<skeleton-loader size="lg" width="200px"></skeleton-loader>`,
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
}
