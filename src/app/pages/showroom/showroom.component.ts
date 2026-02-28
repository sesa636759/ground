import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { categoryNavItems } from '../../data/navigation.data';
import { COMPONENT_SVG_MAP } from '../../shared/utils/component-svg-map';

@Component({
  selector: 'app-showroom',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './showroom.component.html',
  styleUrl: './showroom.component.scss',
})
export class ShowroomComponent implements OnInit {
  categories = categoryNavItems;
  activeCategoryId = signal<string>(this.categories[0]?.id || '');
  searchQuery = signal<string>('');

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {}

  activeCategory() {
    return this.categories.find((c) => c.id === this.activeCategoryId());
  }

  visibleComponents() {
    const query = this.searchQuery().toLowerCase();

    // If there's a search, check globally
    if (query) {
      let results: any[] = [];
      this.categories.forEach((cat) => {
        if (cat.children) {
          results = [
            ...results,
            ...cat.children.filter((c) => c.label.toLowerCase().includes(query)),
          ];
        }
      });
      return results;
    }

    // Otherwise return active category's children
    return this.activeCategory()?.children || [];
  }

  onSearch(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  getPreviewSvg(id: string): SafeHtml {
    // Invert the SVG preview color slightly for dark mode or just pass it as is
    const svg = COMPONENT_SVG_MAP[id] ?? COMPONENT_SVG_MAP['default'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  navigateTo(id: string) {
    this.router.navigate(['/demos', ...id.split('/')]);
  }
}
