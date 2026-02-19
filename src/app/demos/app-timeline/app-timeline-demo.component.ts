import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { TimelinePlaygroundComponent } from './components/timeline-playground/timeline-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-timeline-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TimelinePlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-timeline-demo.component.html',
  styleUrl: './app-timeline-demo.component.scss',
})
export class AppTimelineDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'alignments', name: 'Alignments', icon: '📏', color: '#3b82f6' },
    { id: 'orientations', name: 'Orientations', icon: '📐', color: '#10b981' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  events = JSON.stringify([
    { status: 'Draft', date: 'Oct 1st', color: '#94a3b8' },
    { status: 'Submitted', date: 'Oct 3rd', color: '#3b82f6' },
    { status: 'Approved', date: 'Oct 5th', color: '#10b981' },
  ]);

  playgroundCode = `<ui-timeline [value]="events" align="left">
  <ng-template let-item>
    <strong>{{ item.status }}</strong>
    <span>{{ item.date }}</span>
  </ng-template>
</ui-timeline>`;

  alignmentsCode = `<!-- Alternating Sides -->
<ui-timeline align="alternate" [value]="events"></ui-timeline>

<!-- Right Aligned -->
<ui-timeline align="right" [value]="events"></ui-timeline>`;

  orientationsCode = `<!-- Horizontal Flow -->
<ui-timeline orientation="horizontal" [value]="events"></ui-timeline>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
