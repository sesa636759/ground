import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  avatar?: string;
  bio?: string;
  role: 'admin' | 'user' | 'moderator';
  department?: string;
  phone?: string;
  location?: string;
  website?: string;
  createdAt: Date;
  lastLogin?: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  fullName: string;
  acceptTerms: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSignal = signal<User | null>(null);
  private isAuthenticatedSignal = signal<boolean>(false);

  currentUser = this.currentUserSignal.asReadonly();
  isAuthenticated = this.isAuthenticatedSignal.asReadonly();

  constructor(private router: Router) {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const storedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.currentUserSignal.set(user);
        this.isAuthenticatedSignal.set(true);
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
      }
    }
  }

  async login(credentials: LoginCredentials): Promise<{ success: boolean; message: string }> {
    // Simulate API call
    await this.delay(1000);

    // Demo credentials validation
    if (credentials.email === 'demo@example.com' && credentials.password === 'demo123') {
      const user: User = {
        id: '1',
        username: 'demouser',
        email: credentials.email,
        fullName: 'Demo User',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo',
        bio: 'Software developer passionate about building great UIs',
        role: 'admin',
        department: 'Engineering',
        phone: '+1 234 567 8900',
        location: 'San Francisco, CA',
        website: 'https://example.com',
        createdAt: new Date('2024-01-01'),
        lastLogin: new Date(),
      };

      this.currentUserSignal.set(user);
      this.isAuthenticatedSignal.set(true);

      if (credentials.rememberMe) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
      }

      return { success: true, message: 'Login successful!' };
    }

    return { success: false, message: 'Invalid email or password' };
  }

  async register(data: RegisterData): Promise<{ success: boolean; message: string }> {
    // Simulate API call
    await this.delay(1500);

    // Check if user already exists (demo validation)
    if (data.email === 'demo@example.com') {
      return { success: false, message: 'Email already registered' };
    }

    if (!data.acceptTerms) {
      return { success: false, message: 'You must accept the terms and conditions' };
    }

    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      username: data.username,
      email: data.email,
      fullName: data.fullName,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.username}`,
      role: 'user',
      createdAt: new Date(),
      lastLogin: new Date(),
    };

    this.currentUserSignal.set(user);
    this.isAuthenticatedSignal.set(true);
    localStorage.setItem('currentUser', JSON.stringify(user));

    return { success: true, message: 'Registration successful!' };
  }

  logout(): void {
    this.currentUserSignal.set(null);
    this.isAuthenticatedSignal.set(false);
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  updateProfile(updates: Partial<User>): Promise<{ success: boolean; message: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const currentUser = this.currentUserSignal();
        if (!currentUser) {
          resolve({ success: false, message: 'No user logged in' });
          return;
        }

        const updatedUser = { ...currentUser, ...updates };
        this.currentUserSignal.set(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));

        resolve({ success: true, message: 'Profile updated successfully!' });
      }, 800);
    });
  }

  async changePassword(
    currentPassword: string,
    _newPassword: string,
  ): Promise<{ success: boolean; message: string }> {
    await this.delay(1000);

    // Demo validation
    if (currentPassword === 'demo123') {
      return { success: true, message: 'Password changed successfully!' };
    }

    return { success: false, message: 'Current password is incorrect' };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
