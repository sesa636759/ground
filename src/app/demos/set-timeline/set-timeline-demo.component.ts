import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimelinePlaygroundComponent } from './components/timeline-playground/timeline-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-timeline-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TimelinePlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-timeline-demo.component.html',
  styleUrl: './set-timeline-demo.component.scss',
})
export class SetTimelineDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'layouts', title: 'Versatile Layouts', icon: '📐' },
    { id: 'snake-layout', title: 'Snake Layout', icon: '🐍' },
    { id: 'variants', title: 'Style Variants', icon: '🎨' },
  ];

  anchorLinks = JSON.stringify(
    this.exampleVariants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  // Static Data Examples
  roadmapItems = JSON.stringify([
    {
      title: 'Q1 2024',
      description: 'Research & Planning',
      date: 'Jan - Mar',
      icon: 'fas fa-search',
      dotColor: '#3b82f6',
    },
    {
      title: 'Q2 2024',
      description: 'Development Phase',
      date: 'Apr - Jun',
      icon: 'fas fa-code',
      dotColor: '#10b981',
    },
    {
      title: 'Q3 2024',
      description: 'Testing & QA',
      date: 'Jul - Sep',
      icon: 'fas fa-bug',
      dotColor: '#f59e0b',
    },
    {
      title: 'Q4 2024',
      description: 'Official Launch',
      date: 'Oct - Dec',
      icon: 'fas fa-rocket',
      dotColor: '#ef4444',
    },
  ]);

  historyItems = JSON.stringify([
    { title: 'Founded', description: 'Company established', date: '2010', icon: 'fas fa-building' },
    { title: 'Expansion', description: 'Opened new offices', date: '2015', icon: 'fas fa-globe' },
    { title: 'IPO', description: 'Went public', date: '2020', icon: 'fas fa-chart-line' },
    { title: 'Global', description: 'Worldwide presence', date: '2024', icon: 'fas fa-users' },
  ]);

  snakeItems = JSON.stringify(
    Array.from({ length: 12 }, (_, i) => ({
      id: `s${i}`,
      title: `Step ${i + 1}`,
      date: `Day ${i + 1}`,
      icon: 'fas fa-circle-small',
      dotColor: i % 2 === 0 ? '#10b981' : '#3b82f6',
    })),
  );

  // Parsed data for use in TypeScript (for slicing, etc.)
  private roadmapItemsArray = JSON.parse(this.roadmapItems);
  roadmapItemsSliced = JSON.stringify(this.roadmapItemsArray.slice(0, 2));

  playgroundCode = `<app-timeline
  [items]="timelineItems"
  layout="vertical"
></app-timeline>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
