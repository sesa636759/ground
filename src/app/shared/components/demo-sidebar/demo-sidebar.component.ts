import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-sidebar',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <aside class="examples-sidebar">
      <div class="sidebar-title">{{ title }}</div>

      <div *ngIf="useAnchor; else navList" class="sidebar-nav">
        <ui-anchor
          [links]="anchorLinks"
          scroll-container=".pane-examples"
          type="line"
          show-progress
        ></ui-anchor>
      </div>

      <ng-template #navList>
        <ul class="nav-list" *ngIf="variants && variants.length > 0">
          <li *ngFor="let variant of variants">
            <a (click)="scrollToSection(variant.id)">
              <span class="nav-icon" *ngIf="variant.icon">{{ variant.icon }}</span>
              {{ variant.name || variant.title }}
            </a>
          </li>
        </ul>
      </ng-template>
    </aside>
  `,
})
export class DemoSidebarComponent {
  @Input() variants: any[] = [];
  @Input() title: string = 'Sections';
  @Input() useAnchor: boolean = false;

  get anchorLinks() {
    return JSON.stringify(
      this.variants.map((v) => ({
        id: v.id,
        target: v.id,
        label: v.title || v.name || v.id,
        icon: v.icon,
      })),
    );
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      // scroll to it
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
