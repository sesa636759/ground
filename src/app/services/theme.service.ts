import { Injectable, signal, effect } from '@angular/core';

export type Theme =
  | 'light'
  | 'dark'
  | 'auto'
  | 'schneider-green'
  | 'schneider-blue'
  | 'high-contrast';
export type NavigationLayout = 'sidebar' | 'topbar';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private readonly NAV_LAYOUT_KEY = 'app-nav-layout';

  // Current theme signal
  currentTheme = signal<Theme>(this.getInitialTheme());

  // Resolved theme (what's actually applied)
  resolvedTheme = signal<string>('dark');

  // Navigation layout signal
  navigationLayout = signal<NavigationLayout>(this.getInitialNavigationLayout());

  constructor() {
    // Apply theme whenever it changes
    effect(() => {
      this.applyTheme(this.currentTheme());
    });

    // Listen for system theme changes
    this.watchSystemTheme();
  }

  private getInitialNavigationLayout(): NavigationLayout {
    const saved = localStorage.getItem(this.NAV_LAYOUT_KEY);
    if (saved === 'sidebar' || saved === 'topbar') {
      return saved as NavigationLayout;
    }
    return 'sidebar'; // Default layout
  }

  setNavigationLayout(layout: NavigationLayout) {
    this.navigationLayout.set(layout);
    localStorage.setItem(this.NAV_LAYOUT_KEY, layout);
  }

  toggleNavigationLayout() {
    const current = this.navigationLayout();
    this.setNavigationLayout(current === 'sidebar' ? 'topbar' : 'sidebar');
  }

  private getInitialTheme(): Theme {
    const saved = localStorage.getItem(this.THEME_KEY);
    if (
      saved === 'light' ||
      saved === 'dark' ||
      saved === 'auto' ||
      saved === 'schneider-green' ||
      saved === 'schneider-blue' ||
      saved === 'high-contrast'
    ) {
      return saved as Theme;
    }
    return 'schneider-green'; // Default theme
  }

  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  toggleTheme() {
    const current = this.currentTheme();
    const themes: Theme[] = [
      'light',
      'dark',
      'auto',
      'schneider-green',
      'schneider-blue',
      'high-contrast',
    ];
    const currentIndex = themes.indexOf(current);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }

  private applyTheme(theme: Theme) {
    let resolved: string;

    if (theme === 'auto') {
      resolved = this.getSystemTheme();
    } else {
      resolved = theme;
    }

    this.resolvedTheme.set(resolved);

    // Apply to document
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'schneider-green', 'schneider-blue', 'high-contrast');
    root.classList.add(resolved);
    root.setAttribute('data-theme', resolved);
  }

  private getSystemTheme(): 'light' | 'dark' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', () => {
      if (this.currentTheme() === 'auto') {
        this.applyTheme('auto');
      }
    });
  }

  getThemeIcon(): string {
    const theme = this.currentTheme();
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'schneider-green':
        return '🌿';
      case 'schneider-blue':
        return '💙';
      case 'high-contrast':
        return '👁️';
      case 'auto':
      default:
        return '🔄';
    }
  }

  getThemeLabel(): string {
    const theme = this.currentTheme();
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'schneider-green':
        return 'Schneider Green';
      case 'schneider-blue':
        return 'Schneider Blue';
      case 'high-contrast':
        return 'High Contrast';
      case 'auto':
      default:
        return 'Auto';
    }
  }
}
