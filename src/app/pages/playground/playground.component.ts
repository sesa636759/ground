import { Component, signal, OnInit, computed, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { getAllNavItems, NavItem } from '../../data/navigation.data';
import { COMPONENT_CONFIGS, ComponentConfig } from './component-configs';
import { filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { PlaygroundEditorComponent } from './editor/playground-editor.component';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  currentComponentId = signal<string | null>(null);

  allNavItems = getAllNavItems().sort((a, b) => a.label.localeCompare(b.label));
  popularComponents = this.allNavItems
    .filter((item) => ['button', 'card', 'badge', 'avatar', 'accordion'].includes(item.id))
    .map((item) => ({ ...item, description: `Interactive ${item.label} demos` }));

  // Dynamic Component Logic
  selectedConfig = computed(() => {
    const id = this.currentComponentId();
    if (!id) return null;
    let config = COMPONENT_CONFIGS[id];
    if (!config) {
      // Fallback
      return {
        id,
        tagName: `ui-${id}`,
        label: this.allNavItems.find((i) => i.id === id)?.label || id,
        props: [],
        slots: [],
      } as ComponentConfig;
    }
    return config;
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['componentId']) {
        this.selectComponent(params['componentId']);
      }
    });
  }

  getComponentName() {
    return this.selectedConfig()?.label || 'Component';
  }

  selectComponent(id: string) {
    this.currentComponentId.set(id);
    this.router.navigate(['playground', id]);
  }

  goBack() {
    this.currentComponentId.set(null);
    this.router.navigate(['playground']);
  }

  goToDocs() {
    const id = this.currentComponentId();
    if (id) {
      this.router.navigate(['/docs', id]);
    }
  }
}
