import {
  Component,
  signal,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  computed,
  HostListener,
  inject,
} from '@angular/core';
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
import { registerIconLibrary } from '@quartzds/core-angular';

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

  public themeService = inject(ThemeService);
  public authService = inject(AuthService);

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
  topItems = this.getProcessedTopItems();

  private getProcessedTopItems() {
    const maxVisible = 4;
    if (topNavItems.length > maxVisible) {
      const visible = topNavItems.slice(0, maxVisible);
      const overflow = topNavItems.slice(maxVisible);
      return [
        ...visible,
        {
          id: 'more-menu',
          label: 'More',
          icon: 'more-horizontal',
          iconLibrary: 'lucide',
          children: overflow,
        },
      ];
    }
    return topNavItems;
  }

  categoryItems = categoryNavItems;
  bottomItems = bottomNavItems;
  userProfileItems = userProfileNavItems;

  // Theme Switcher State
  themeMenuOpen = signal(false);

  themeOptions = [
    {
      id: 'schneider-green',
      label: 'SE Green',
      emoji: '🌿',
      gradient: 'linear-gradient(135deg,#3DCD58,#059669)',
    },
    {
      id: 'schneider-blue',
      label: 'SE Blue',
      emoji: '💙',
      gradient: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
    },
    {
      id: 'dark',
      label: 'Dark',
      emoji: '🌙',
      gradient: 'linear-gradient(135deg,#0f172a,#1e293b)',
    },
    {
      id: 'light',
      label: 'Light',
      emoji: '☀️',
      gradient: 'linear-gradient(135deg,#f8faf9,#e2e8f0)',
    },
    {
      id: 'high-contrast',
      label: 'Contrast',
      emoji: '👁️',
      gradient: 'linear-gradient(135deg,#000,#facc15)',
    },
    {
      id: 'auto',
      label: 'Auto',
      emoji: '🔄',
      gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    },
  ];

  currentTheme = this.themeService.currentTheme;

  currentThemeIcon = computed(() => {
    return (
      this.themeOptions.find((t) => t.id === this.themeService.currentTheme())?.emoji ?? '🎨'
    );
  });

  toggleThemeMenu() {
    this.themeMenuOpen.set(!this.themeMenuOpen());
  }

  selectTheme(theme: any) {
    this.themeService.setTheme(theme);
    this.themeMenuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.theme-fab-container')) {
      this.themeMenuOpen.set(false);
    }
  }

  // User Profile & Popover State
  userMenuOpen = signal(false);
  popoverOpen: { [key: string]: boolean } = {};

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
      email: 'praveen.rajkumar@se.com',
    };
  });

  constructor(public router: Router) {}

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  ngOnInit() {
    console.log('topItems', topNavItems);
    registerIconLibrary('core', {
      resolver: function (name) {
        return `assets/quartzds/se-icons-core/${name}.svg`;
      },
    });
    registerIconLibrary('default', {
      resolver: function (name) {
        return `assets/quartzds/se-icons-general/${name}.svg`;
      },
    });
    // Register Lucide if it's being used via the library prop
    registerIconLibrary('lucide', {
      resolver: function (name) {
        return `https://cdn.jsdelivr.net/npm/lucide-static@0.400.0/icons/${name}.svg`;
      },
    });

    // Schneider Electric Libraries
    registerIconLibrary('se', {
      resolver: (name) => `assets/quartzds/se-icons-general/${name}.svg`,
    });
    registerIconLibrary('qds', {
      resolver: (name) => `assets/quartzds/se-icons-core/${name}.svg`,
    });
    registerIconLibrary('quartz', {
      resolver: (name) => `assets/quartzds/se-icons-general/${name}.svg`,
    });
    // Track route changes to update selected item
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;

        this.updateCurrentRoute(url);
      });

    // Set initial route
    this.updateCurrentRoute(this.router.url);
  }

  updateCurrentRoute(url: string) {
    // Extract the route from URL
    if (url === '/' || url === '/home') {
      this.currentRoute.set('home');
    } else if (url.startsWith('/overview')) {
      this.currentRoute.set('overview');
    } else if (url.startsWith('/showroom')) {
      this.currentRoute.set('showroom');
    } else if (url.startsWith('/installation')) {
      this.currentRoute.set('installation');
    } else if (url.startsWith('/documentation')) {
      this.currentRoute.set('documentation');
    } else if (url.startsWith('/components-guide')) {
      this.currentRoute.set('components-guide');
    } else if (url.startsWith('/playground/')) {
      const componentId = url.split('/')[2]?.split('?')[0];
      this.currentRoute.set(componentId);
    } else if (url.startsWith('/demos/')) {
      // Join all segments after '/demos/' to support nested paths like 'charts/area-chart'
      const componentId = url.split('/').slice(2).join('/').split('?')[0];
      this.currentRoute.set(componentId);
    } else if (url.startsWith('/playground')) {
      this.currentRoute.set('playground');
    } else if (url.startsWith('/settings')) {
      this.currentRoute.set('settings');
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

  onNavToggle(event: any) {
    // event.detail.expanded = true means nav just opened
    const expanded = event?.detail?.expanded;
    if (typeof expanded === 'boolean') {
      this.sidebarCollapsed.set(!expanded);
    }
  }

  onNavItemClick(event: any) {
    const itemId = event.detail?.id;
    if (itemId) {
      this.userMenuOpen.set(false);

      if (itemId === 'logout') {
        this.logout();
        return;
      }

      if (itemId === 'more-menu') {
        return;
      }

      // Top-level routes
      if (
        [
          'home',
          'overview',
          'showroom',
          'installation',
          'documentation',
          'components-guide',
          'settings',
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
        // Split itemId by '/' to handle nested paths like 'charts/timeline-range'
        this.router.navigate(['demos', ...itemId.split('/')]);
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
  }

  navigateToSettings() {
    this.userMenuOpen.set(false);
    this.router.navigate(['/settings']);
  }

  navigateToUserManagement() {
    this.userMenuOpen.set(false);
    this.router.navigate(['/user-management']);
  }

  logout() {
    this.userMenuOpen.set(false);

    this.authService.logout();
  }
}

