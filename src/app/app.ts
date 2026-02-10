import { Component, signal, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { topNavItems, categoryNavItems, bottomNavItems } from './data/navigation.data';
import { ThemeService } from './services/theme.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  title = signal('Component Playground');
  sidebarCollapsed = signal(false);
  currentRoute = signal('home');

  // Expose navigation data for template
  topItems = topNavItems;
  categoryItems = categoryNavItems;
  bottomItems = bottomNavItems;

  constructor(
    public router: Router,
    public themeService: ThemeService,
  ) {}

  ngOnInit() {
    console.log('🚀 App initialized');
    console.log('📊 Navigation data:', {
      topItems: this.topItems,
      categoryItems: this.categoryItems,
      bottomItems: this.bottomItems,
    });

    // Track route changes to update selected item
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;
        console.log('🔄 Route changed to:', url);
        this.updateCurrentRoute(url);
      });

    // Set initial route
    this.updateCurrentRoute(this.router.url);
    console.log('📍 Initial route:', this.router.url);
  }

  updateCurrentRoute(url: string) {
    // Extract the route from URL
    if (url === '/' || url === '/home') {
      this.currentRoute.set('home');
    } else if (url.startsWith('/overview')) {
      this.currentRoute.set('overview');
    } else if (url.startsWith('/documentation')) {
      this.currentRoute.set('documentation');
    } else if (url.startsWith('/playground/')) {
      const componentId = url.split('/')[2]?.split('?')[0];
      this.currentRoute.set(componentId);
    } else if (url.startsWith('/docs/')) {
      const componentId = url.split('/')[2]?.split('?')[0];
      this.currentRoute.set(componentId);
    } else if (url.startsWith('/playground')) {
      this.currentRoute.set('playground');
    } else if (url.startsWith('/theme-selector')) {
      this.currentRoute.set('theme-selector');
    }
  }

  toggleSidebar() {
    this.sidebarCollapsed.set(!this.sidebarCollapsed());
  }

  onNavItemClick(event: any) {
    console.log('Navigation clicked:', event.detail);
    const itemId = event.detail?.id;
    if (itemId) {
      // Top-level routes
      if (['home', 'overview', 'documentation', 'theme-selector', 'playground'].includes(itemId)) {
        this.router.navigate([itemId]);
      } else {
        // Component routes allow generic handling -> Docs
        this.router.navigate(['docs', itemId]);
      }
    }
  }
}
