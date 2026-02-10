import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';

  // Current theme signal
  currentTheme = signal<Theme>(this.getInitialTheme());

  // Resolved theme (what's actually applied)
  resolvedTheme = signal<'light' | 'dark'>('dark');

  constructor() {
    // Apply theme whenever it changes
    effect(() => {
      this.applyTheme(this.currentTheme());
    });

    // Listen for system theme changes
    this.watchSystemTheme();
  }

  private getInitialTheme(): Theme {
    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved === 'light' || saved === 'dark' || saved === 'auto') {
      return saved;
    }
    return 'dark'; // Default theme
  }

  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  toggleTheme() {
    const current = this.currentTheme();
    const themes: Theme[] = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(current);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }

  private applyTheme(theme: Theme) {
    let resolved: 'light' | 'dark';

    if (theme === 'auto') {
      resolved = this.getSystemTheme();
    } else {
      resolved = theme;
    }

    this.resolvedTheme.set(resolved);

    // Apply to document
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
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
      case 'auto':
        return '🔄';
    }
  }

  getThemeLabel(): string {
    const theme = this.currentTheme();
    switch (theme) {
      case 'light':
        return 'Light Mode';
      case 'dark':
        return 'Dark Mode';
      case 'auto':
        return 'Auto Mode';
    }
  }
}
