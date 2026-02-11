import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-empty-state-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './empty-state-docs.component.html',
  styleUrls: ['./empty-state-docs.component.scss'],
})
export class EmptyStateDocsComponent {
  emptyStateConfig = COMPONENT_CONFIGS['empty-state'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-empty-state
  icon="📭"
  title="No messages yet"
  description="Start a conversation to see your messages here">
</app-empty-state>`,
    withAction: `<app-empty-state
  icon="📁"
  title="No files found"
  description="Upload your first file to get started"
  actionLabel="Upload File"
  (action)="handleUpload()">
</app-empty-state>`,
    search: `<app-empty-state
  icon="🔍"
  title="No results found"
  description="Try adjusting your search to find what you're looking for"
  actionLabel="Clear Search"
  actionVariant="outlined">
</app-empty-state>`,
    error: `<app-empty-state
  icon="⚠️"
  title="Something went wrong"
  description="We couldn't load your data. Please try again."
  actionLabel="Retry"
  variant="error">
</app-empty-state>`,
    illustration: `<app-empty-state
  illustration="undraw_empty"
  title="Your inbox is empty"
  description="All caught up! Check back later for new messages."
  size="large">
</app-empty-state>`,
    compact: `<app-empty-state
  icon="📝"
  title="No notes"
  description="Create your first note"
  size="compact"
  actionLabel="New Note">
</app-empty-state>`,
    multiAction: `<app-empty-state
  icon="👥"
  title="No team members yet"
  description="Invite people to collaborate on your project"
  primaryAction="Invite Members"
  secondaryAction="Learn More">
</app-empty-state>`,
    loading: `<app-empty-state
  icon="⏳"
  title="Loading your content"
  description="This won't take long..."
  [loading]="true">
</app-empty-state>`,
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
