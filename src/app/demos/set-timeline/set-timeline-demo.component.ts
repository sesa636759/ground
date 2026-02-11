import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimelinePlaygroundComponent } from './components/timeline-playground/timeline-playground.component';

@Component({
  selector: 'app-set-timeline-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TimelinePlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-timeline-demo.component.html',
  styleUrl: './set-timeline-demo.component.scss',
})
export class SetTimelineDemoComponent implements OnInit {
  // Static Data Examples
  roadmapItems = [
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
  ];

  historyItems = [
    { title: 'Founded', description: 'Company established', date: '2010', icon: 'fas fa-building' },
    { title: 'Expansion', description: 'Opened new offices', date: '2015', icon: 'fas fa-globe' },
    { title: 'IPO', description: 'Went public', date: '2020', icon: 'fas fa-chart-line' },
    { title: 'Global', description: 'Worldwide presence', date: '2024', icon: 'fas fa-users' },
  ];

  snakeItems = Array.from({ length: 12 }, (_, i) => ({
    id: `s${i}`,
    title: `Step ${i + 1}`,
    date: `Day ${i + 1}`,
    icon: 'fas fa-circle-small',
    dotColor: i % 2 === 0 ? '#10b981' : '#3b82f6',
  }));

  ngOnInit() {}
}
