import { Component, signal, computed, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppMasonryComponent } from '../../shared/components/app-masonry/app-masonry.component';
import {
  ComponentDocsService,
  ComponentDocumentation,
} from '../../services/component-docs.service';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, AppMasonryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss',
})
export class DocumentationComponent implements OnInit {
  masonryBreakpoints = { 1400: 4, 1000: 3, 600: 2, 0: 1 };

  searchText = signal('');
  isSearchFocused = signal(false);
  activeTab = signal<'all' | 'guides' | 'components' | 'utilities'>('all');
  selectedGuideId = signal<string>('');

  components = signal<ComponentDocumentation[]>([]);

  guides = [
    {
      id: 'introduction',
      title: 'Getting Started',
      desc: 'Design philosophy and core concepts',
      icon: 'fas fa-rocket',
    },
    {
      id: 'installation',
      title: 'Installation',
      desc: 'Step-by-step setup and dependencies',
      icon: 'fas fa-download',
    },
    {
      id: 'usage',
      title: 'Usage Guide',
      desc: 'Principles for implementing components',
      icon: 'fas fa-laptop-code',
    },
  ];

  filteredComponents = computed(() => {
    const list = this.components();
    const search = this.searchText().toLowerCase();
    if (!search) return list;

    return list.filter(
      (c) =>
        (c.name && c.name.toLowerCase().includes(search)) ||
        (c.shortDescription && c.shortDescription.toLowerCase().includes(search)),
    );
  });

  filteredGuides = computed(() => {
    const search = this.searchText().toLowerCase();
    if (!search) return this.guides;
    return this.guides.filter(
      (g) =>
        (g.title && g.title.toLowerCase().includes(search)) ||
        (g.desc && g.desc.toLowerCase().includes(search)),
    );
  });

  constructor(
    private router: Router,
    private componentDocsService: ComponentDocsService,
  ) {}

  ngOnInit() {
    this.components.set(this.componentDocsService.getAllComponents());
  }

  onSearchInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.searchText.set(val);
    if (val) this.selectedGuideId.set('');
  }

  clearSearch(input: HTMLInputElement) {
    input.value = '';
    this.searchText.set('');
    input.focus();
  }

  selectGuide(id: string) {
    this.selectedGuideId.set(id);
    this.activeTab.set('guides');
    window.scrollTo({ top: 500, behavior: 'smooth' });
  }

  getSelectedGuide() {
    return this.guides.find((g) => g.id === this.selectedGuideId());
  }

  viewComponentDoc(componentId: string) {
    this.router.navigate(['/component-documentation'], {
      queryParams: { component: componentId },
    });
  }

  async copyText(text: string) {
    await navigator.clipboard.writeText(text);
  }
}
