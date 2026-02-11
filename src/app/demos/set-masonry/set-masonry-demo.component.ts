import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasonryPlaygroundComponent } from './components/masonry-playground/masonry-playground.component';

@Component({
  selector: 'app-set-masonry-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, MasonryPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-masonry-demo.component.html',
  styleUrl: './set-masonry-demo.component.scss',
})
export class SetMasonryDemoComponent implements OnInit {
  // Static items for demos
  galleryItems = this.generateItems(12, 'gallery');
  newsItems = this.generateItems(8, 'news');
  productItems = this.generateItems(8, 'product');

  ngOnInit() {}

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
