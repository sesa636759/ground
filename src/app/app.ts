import { Component, signal, CUSTOM_ELEMENTS_SCHEMA, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import {
  topNavItems,
  categoryNavItems,
  bottomNavItems,
  userProfileNavItems,
} from './data/navigation.data';
import { ThemeService } from './services/theme.service';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs/operators';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faMoon,
  faSun,
  faHome,
  faBook,
  faVial,
  faUser,
  faCog,
  faUsers,
  faSignOutAlt,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  title = signal('Component Playground');
  sidebarCollapsed = signal(true);
  currentRoute = signal('home');

  // FontAwesome Icons
  faCoffee = faCoffee;
  faMoon = faMoon;
  faSun = faSun;
  faHome = faHome;
  faBook = faBook;
  faVial = faVial;
  faUser = faUser;
  faCog = faCog;
  faUsers = faUsers;
  faSignOutAlt = faSignOutAlt;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  // Expose navigation data for template
  topItems = topNavItems;
  categoryItems = categoryNavItems;
  bottomItems = bottomNavItems;
  userProfileItems = userProfileNavItems;

  // User Profile
  userMenuOpen = signal(false);

  currentUser = computed(() => {
    const user = this.authService.currentUser();
    if (user) {
      return {
        name: user.fullName,
        role: user.role,
        avatar: user.avatar || 'https://i.pravatar.cc/150?img=12',
        isOnline: true,
        email: user.email,
      };
    }
    return {
      name: 'Guest User',
      role: 'Visitor',
      avatar: 'https://i.pravatar.cc/150?img=12',
      isOnline: false,
      email: '',
    };
  });

  constructor(
    public router: Router,
    public themeService: ThemeService,
    private authService: AuthService,
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
    } else if (url.startsWith('/demos/')) {
      const componentId = url.split('/')[2]?.split('?')[0];
      this.currentRoute.set(componentId);
    } else if (url.startsWith('/playground')) {
      this.currentRoute.set('playground');
    } else if (url.startsWith('/theme-selector')) {
      this.currentRoute.set('theme-selector');
    } else if (url.startsWith('/user-management')) {
      this.currentRoute.set('user-management');
    } else if (url.startsWith('/login')) {
      this.currentRoute.set('login');
    } else if (url.startsWith('/register')) {
      this.currentRoute.set('register');
    } else if (url.startsWith('/profile')) {
      this.currentRoute.set('profile');
    }
  }

  toggleSidebar() {
    this.sidebarCollapsed.set(!this.sidebarCollapsed());
  }

  onNavItemClick(event: any) {
    console.log('Navigation clicked:', event.detail);
    const itemId = event.detail?.id;
    if (itemId) {
      this.userMenuOpen.set(false);

      if (itemId === 'logout') {
        this.logout();
        return;
      }

      // Top-level routes
      if (
        [
          'home',
          'overview',
          'documentation',
          'theme-selector',
          'playground',
          'user-management',
          'login',
          'register',
          'profile',
        ].includes(itemId)
      ) {
        this.router.navigate(['/' + itemId]);
      } else if (
        [
          'personal-info',
          'security',
          'notifications',
          'billing',
          'connected-accounts',
          'privacy',
          'activity-log',
          'preferences',
          'help-support',
        ].includes(itemId)
      ) {
        // Handle profile sub-routes
        this.router.navigate(['/profile'], { queryParams: { tab: itemId } });
      } else {
        // Component routes allow generic handling -> Docs
        this.router.navigate(['demos', itemId]);
      }
    }
  }

  // User Menu Methods
  toggleUserMenu() {
    this.userMenuOpen.set(!this.userMenuOpen());
  }

  navigateToProfile() {
    this.userMenuOpen.set(false);
    this.router.navigate(['/profile']);
    console.log('Navigate to profile');
  }

  navigateToSettings() {
    this.userMenuOpen.set(false);
    this.router.navigate(['/theme-selector']);
    console.log('Navigate to settings');
  }

  navigateToUserManagement() {
    this.userMenuOpen.set(false);
    this.router.navigate(['/user-management']);
    console.log('Navigate to user management');
  }

  logout() {
    this.userMenuOpen.set(false);
    console.log('Logout clicked');
    this.authService.logout();
  }
}
