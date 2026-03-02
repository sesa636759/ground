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
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, AnimateOnScrollComponent, AnimateOnScrollDirective],
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

  iconLibraries = [
    {
      name: 'Lucide Icons',
      description: 'Beautiful & consistent icons made by the community.',
      count: '1,000+',
      library: 'lucide',
      sampleIcons: ['house', 'search', 'settings', 'user', 'bell', 'heart'],
      color: 'cyan-glow',
    },
    {
      name: 'Font Awesome',
      description: "The world's most popular icon set and toolkit.",
      count: '2,000+',
      library: 'fontawesome',
      sampleIcons: ['fa-star', 'fa-bolt', 'fa-camera', 'fa-envelope', 'fa-eye', 'fa-globe'],
      color: 'purple-glow',
    },
    {
      name: 'Material Icons',
      description: 'Delightful, beautifully crafted symbols for common actions.',
      count: '3,000+',
      library: 'google',
      sampleIcons: ['face', 'home', 'info', 'lock', 'print', 'star'],
      color: 'green-glow',
    },
    {
      name: 'Remix Icons',
      description: 'Open-source neutral-style system symbols.',
      count: '2,500+',
      library: 'remixicon',
      sampleIcons: [
        'ri-home-line',
        'ri-user-line',
        'ri-settings-line',
        'ri-notification-line',
        'ri-chat-line',
        'ri-heart-line',
      ],
      color: 'yellow-glow',
    },
    {
      name: 'Bootstrap Icons',
      description: 'Free, high quality, open source icon library with over 2,000 icons.',
      count: '2,000+',
      library: 'bootstrap',
      sampleIcons: [
        'bi-bootstrap-fill',
        'bi-check-circle-fill',
        'bi-info-circle-fill',
        'bi-exclamation-circle-fill',
        'bi-x-circle-fill',
        'bi-question-circle-fill',
      ],
      color: 'purple-glow',
    },
    {
      name: 'Ionicons',
      description: 'Premium icons for use in web, iOS, Android, and desktop apps.',
      count: '1,300+',
      library: 'ionicons',
      sampleIcons: ['logo-ionic', 'add', 'alarm', 'apps', 'archive', 'at'],
      color: 'cyan-glow',
    },
    {
      name: 'Iconoir',
      description: 'A huge library of open-source icons. Simple and consistent.',
      count: '1,500+',
      library: 'iconoir',
      sampleIcons: ['home', 'user', 'settings', 'bell', 'heart', 'star'],
      color: 'green-glow',
    },
    {
      name: 'Line Awesome',
      description: 'Swap Font Awesome for modern line icons in one line of code.',
      count: '1,300+',
      library: 'icons8',
      sampleIcons: ['la-home', 'la-user', 'la-cog', 'la-bell', 'la-heart', 'la-star'],
      color: 'yellow-glow',
    },
    {
      name: 'Quartz DS (SE)',
      description: 'Schneider Electric branded icon system for professional applications.',
      count: '500+',
      library: 'se',
      sampleIcons: ['house', 'user', 'gear', 'bell', 'cloud', 'star'],
      color: 'green-glow',
    },
    {
      name: 'Native Emoji',
      description: 'Standard system emojis that work everywhere without any dependencies.',
      count: '3,500+',
      library: 'emoji',
      sampleIcons: ['🚀', '✨', '💎', '🔥', '⚡', '🌈'],
      color: 'yellow-glow',
    },
    {
      name: 'SVG Path',
      description: 'Support for direct SVG paths and custom vector definitions.',
      count: '∞',
      library: 'default',
      sampleIcons: ['M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'],
      color: 'cyan-glow',
    },
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
