import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-masonry-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './masonry-docs.component.html',
  styleUrls: ['./masonry-docs.component.scss'],
})
export class MasonryDocsComponent {
  masonryConfig = {
    id: 'masonry',
    tagName: 'ui-masonry',
    label: 'Masonry',
    props: [
      { name: 'items', type: 'json' as const, defaultValue: '[]', description: 'Array of items to display in masonry layout' },
      { name: 'columns', type: 'number' as const, defaultValue: '3', description: 'Number of columns' },
      { name: 'gutter', type: 'number' as const, defaultValue: '16', description: 'Space between items in pixels' },
      { name: 'itemType', type: 'string' as const, defaultValue: 'default', description: 'Type of items (default, card, image)' },
      { name: 'animated', type: 'boolean' as const, defaultValue: 'false', description: 'Enable item animations' },
      { name: 'breakpoints', type: 'json' as const, defaultValue: '{}', description: 'Responsive breakpoint configuration' },
      { name: 'infinite-scroll', type: 'boolean' as const, defaultValue: 'false', description: 'Enable infinite scrolling' },
    ]
  };
  
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<ui-masonry
  [attr.items]="basicItems">
</ui-masonry>`,
    columns: `<ui-masonry
  columns="4"
  [attr.items]="columnItems">
</ui-masonry>`,
    cards: `<ui-masonry
  [attr.items]="cardItems"
  item-type="card">
</ui-masonry>`,
    images: `<ui-masonry
  [attr.items]="imageItems"
  item-type="image"
  columns="3">
</ui-masonry>`,
    responsive: `<ui-masonry
  [attr.breakpoints]="breakpoints"
  [attr.items]="responsiveItems">
</ui-masonry>`,
    animated: `<ui-masonry
  animated="true"
  [attr.items]="animatedItems">
</ui-masonry>`,
    gutter: `<ui-masonry
  gutter="24"
  [attr.items]="gutterItems">
</ui-masonry>`,
    infinite: `<ui-masonry
  infinite-scroll="true"
  [attr.items]="infiniteItems">
</ui-masonry>`,
  };

  basicItems = JSON.stringify([
    { id: 1, content: 'Item 1', height: 200 },
    { id: 2, content: 'Item 2', height: 300 },
    { id: 3, content: 'Item 3', height: 250 },
  ]);

  columnItems = JSON.stringify([
    { id: 1, content: 'Column Item 1' },
    { id: 2, content: 'Column Item 2' },
  ]);

  cardItems = JSON.stringify([
    { id: 1, title: 'Card 1', description: 'Description' },
    { id: 2, title: 'Card 2', description: 'Description' },
  ]);

  imageItems = JSON.stringify([
    { id: 1, src: '/images/1.jpg', alt: 'Image 1' },
    { id: 2, src: '/images/2.jpg', alt: 'Image 2' },
  ]);

  responsiveItems = JSON.stringify([
    { id: 1, content: 'Responsive Item' },
  ]);

  animatedItems = JSON.stringify([
    { id: 1, content: 'Animated Item' },
  ]);

  gutterItems = JSON.stringify([
    { id: 1, content: 'Gutter Item' },
  ]);

  infiniteItems = JSON.stringify([
    { id: 1, content: 'Infinite Item' },
  ]);

  breakpoints = JSON.stringify({
    sm: { columns: 1 },
    md: { columns: 2 },
    lg: { columns: 3 },
    xl: { columns: 4 },
  });

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
