import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { categoryNavItems } from '../../data/navigation.data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCode,
  faLayerGroup,
  faGaugeHigh,
  faBookOpen,
  faMobileScreenButton,
  faCheckDouble,
  faRocket,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';
import { AnimateOnScrollComponent } from '../../directives/animate-on-scroll.component';
import { ComponentCardComponent } from '../../shared/components/component-card/component-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, AnimateOnScrollComponent, ComponentCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  faCheckDouble = faCheckDouble;
  faRocket = faRocket;
  faTerminal = faTerminal;
  faCode = faCode;
  faLayerGroup = faLayerGroup;
  faGaugeHigh = faGaugeHigh;
  faBookOpen = faBookOpen;
  faMobileScreenButton = faMobileScreenButton;

  categories = categoryNavItems;
  featuredComponents = [
    {
      id: 'advanced-data-table',
      label: 'Advanced Data Table',
      category: 'Data',
      icon: 'table-2',
      description: 'Enterprise-grade grid with virtualization, filtering, and export.',
      badge: 'NEW',
      img: 'assets/images/data-grid-ui.png',
    },
    {
      id: 'kanban-board',
      label: 'Kanban Board',
      category: 'Foundation',
      icon: 'layout-panel-top',
      description: 'Collaborative task management with drag-and-drop workflow.',
      badge: 'PRO',
      img: 'assets/images/kanban-ui.png',
    },
    {
      id: 'smart-dashboard',
      label: 'Smart Dashboard',
      category: 'Layout',
      icon: 'layout-dashboard',
      description: 'Dynamic widget-based control center with real-time updates.',
      badge: 'POPULAR',
      img: 'assets/images/dashboard-ui.png',
    },
    {
      id: 'file-manager',
      label: 'File Manager',
      category: 'Navigation',
      icon: 'folder-tree',
      description: 'Advanced file explorer with cloud integration and permissions.',
      img: 'assets/images/file-manager-ui.png',
    },
    {
      id: 'real-time-chat',
      label: 'Real-time Chat',
      category: 'Feedback',
      icon: 'messages-square',
      description: 'Full-featured messaging module with live presence status.',
      badge: 'PRO',
      img: 'assets/images/chat-ui.png',
    },
    {
      id: 'advanced-analytics',
      label: 'Advanced Analytics',
      category: 'Data Display',
      icon: 'line-chart',
      description: 'Deep-dive telemetry with interactive charts and reports.',
      img: 'assets/images/analytics-ui.png',
    },
    {
      id: 'premium-login',
      label: 'Premium Login',
      category: 'Foundation',
      icon: 'lock',
      description: 'Secure, multi-factor authentication system with OTP support.',
      img: 'assets/images/login-ui.png',
    },
    {
      id: 'ecommerce-hub',
      label: 'E-commerce Hub',
      category: 'Display',
      icon: 'shopping-cart',
      description: 'Complete retail interface for catalogues and checkouts.',
      badge: 'PREMIUM',
      img: 'assets/images/ecommerce-ui.png',
    },
    {
      id: 'settings-panel',
      label: 'Settings Panel',
      category: 'Foundation',
      icon: 'settings-2',
      description: 'Comprehensive configuration suite with granular controls.',
      img: 'assets/images/settings-ui.png',
    },
    {
      id: 'modern-inputs',
      label: 'Modern Form Set',
      category: 'Inputs',
      icon: 'text-cursor-input',
      description: 'A robust collection of inputs, selects, and pickers.',
      img: 'assets/images/ui-stack.png',
    },
    {
      id: 'revenue-tracker',
      label: 'Revenue Tracker',
      category: 'Data Display',
      icon: 'pie-chart',
      description: 'Financial oversight tools with trend analysis models.',
      img: 'assets/images/revenue-chart.png',
    },
    {
      id: 'process-stepper',
      label: 'Smart Stepper',
      category: 'Navigation',
      icon: 'list-checks',
      description: 'Guided multi-step workflows with progress tracking.',
      badge: 'PRO',
      img: 'assets/images/sales-trend.png',
    },
  ];

  recentUpdates = [
    { title: 'v2.4.0 Released', date: 'March 2026', type: 'Core', icon: 'zap' },
    { title: 'New Area Charts', date: 'Feb 2026', type: 'Charts', icon: 'bar-chart' },
    { title: 'A11y Refactor', date: 'Jan 2026', type: 'System', icon: 'shield-check' },
    { title: 'Waffle Charts', date: 'Dec 2025', type: 'Charts', icon: 'grid' },
  ];

  heroCards = [
    { title: 'Premium Login', img: 'assets/images/login-ui.png' },
    { title: 'Smart Dashboard', img: 'assets/images/dashboard-ui.png' },
    { title: 'Modern Inputs', img: 'assets/images/ui-stack.png' },
    { title: 'Settings Panel', img: 'assets/images/settings-ui.png' },
    { title: 'Enterprise Grid', img: 'assets/images/data-grid-ui.png' },
    { title: 'Advanced Analytics', img: 'assets/images/analytics-ui.png' },
    { title: 'Kanban Board', img: 'assets/images/kanban-ui.png' },
    { title: 'File Manager', img: 'assets/images/file-manager-ui.png' },
    { title: 'Real-time Chat', img: 'assets/images/chat-ui.png' },
    { title: 'E-commerce UI', img: 'assets/images/ecommerce-ui.png' },
  ];
  activeHeroSlide = 0;

  statsCards = [
    {
      num: '73',
      label: 'Components',
      backTitle: 'Core Library',
      backText: 'Atomic elements, layout managers, and advanced visualizations.',
    },
    {
      num: '71',
      label: 'Playgrounds',
      backTitle: 'Interactive',
      backText: 'Live environments to test configurations and copy ready-made snippets.',
    },
    {
      num: '100%',
      label: 'Web Components',
      backTitle: 'Universal',
      backText: 'Built on standard Web APIs. Works with React, Vue, Svelte, or Vanilla.',
    },
    {
      num: '0 KB',
      label: 'No Dependencies',
      backTitle: 'Pure Logic',
      backText: 'Zero-bloat architecture. Minimal footprint, maximum performance.',
    },
  ];

  constructor(private router: Router) {}

  nextHeroSlide() {
    this.activeHeroSlide = (this.activeHeroSlide + 1) % this.heroCards.length;
  }

  prevHeroSlide() {
    this.activeHeroSlide =
      (this.activeHeroSlide - 1 + this.heroCards.length) % this.heroCards.length;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  getCategoryDescription(id: string): string {
    const descriptions: Record<string, string> = {
      foundation: 'Essential building blocks for layouts and structure',
      navigation: 'Intuitive navigation patterns for seamless user journeys',
      inputs: 'Rich form controls for data collection and interaction',
      'data-display': 'Powerful components for presenting complex data',
      feedback: 'User feedback and overlay components for better UX',
    };
    return descriptions[id] || 'Explore components in this category';
  }
}
