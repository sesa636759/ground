import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { MasonryPlaygroundComponent } from './components/masonry-playground/masonry-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-masonry-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MasonryPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-masonry-demo.component.html',
  styleUrl: './set-masonry-demo.component.scss',
})
export class SetMasonryDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'gallery', title: 'Premium Gallery', icon: '📸' },
    { id: 'layouts', title: 'Layout Variants', icon: '📐' },
    { id: 'loading', title: 'Skeleton Loading', icon: '💀' },
  ];

  // Static items for demos
  galleryItems = JSON.stringify(this.generateItems(12, 'gallery'));
  newsItems = JSON.stringify(this.generateItems(8, 'news'));
  productItems = JSON.stringify(this.generateItems(8, 'product'));

  // Code examples
  basicMasonryCode = `<app-masonry
  columns="3"
  gap="16"
>
  <div class="masonry-item" *ngFor="let item of galleryItems">
    <img [src]="item.image" [alt]="item.title">
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </div>
</app-masonry>`;

  playgroundCode = `<app-masonry
  layout-type="masonry"
  columns="3"
  gap="16"
  [items]="items"
>
  <!-- Content -->
</app-masonry>`;

  responsiveMasonryCode = `<app-masonry
  [columns]="{ xs: 1, sm: 2, md: 3, lg: 4 }"
  gap="20"
  responsive
>
  <div class="masonry-item" *ngFor="let item of newsItems">
    <div class="item-content">
      <img [src]="item.image" [alt]="item.title">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</app-masonry>`;

  customGapCode = `<app-masonry
  columns="4"
  gap="24"
  column-gap="32"
  row-gap="16"
>
  <!-- Your items -->
</app-masonry>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  generateItems(count: number, type: string) {
    const heights = [200, 250, 300, 350, 400];
    return Array.from({ length: count }, (_, i) => ({
      id: `${type}-${i + 1}`,
      image: `https://picsum.photos/400/${heights[i % heights.length]}?random=${i}`,
      title: `${type === 'gallery' ? 'Photo' : type === 'news' ? 'Article' : 'Product'} ${i + 1}`,
      description: `Sample description for ${type} item ${i + 1}.`,
      height: heights[i % heights.length],
      category: ['nature', 'tech', 'design'][i % 3],
    }));
  }
}
