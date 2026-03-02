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
  password?: string;
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
    this.ensureDemoUser();
    this.loadUserFromStorage();
  }

  private ensureDemoUser(): void {
    const users = this.loadUsers();
    const demoEmail = 'demo@example.com';
    if (!users.some(u => u.email === demoEmail)) {
      users.push({
        id: 'demo',
        username: 'demouser',
        email: demoEmail,
        fullName: 'Demo User',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo',
        bio: 'Demo user for login',
        role: 'admin',
        createdAt: new Date(),
        lastLogin: new Date(),
        password: 'demo123'
      });
      this.saveUsers(users);
    }
  }

  private loadUserFromStorage(): void {
    const storedUser = sessionStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.currentUserSignal.set(user);
        this.isAuthenticatedSignal.set(true);
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        sessionStorage.removeItem('currentUser');
      }
    }
  }

  private loadUsers(): User[] {
    const users = sessionStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  private saveUsers(users: User[]): void {
    sessionStorage.setItem('users', JSON.stringify(users));
  }

  private updateUser(updatedUser: User): void {
    let users = this.loadUsers();
    users = users.map(user => user.id === updatedUser.id ? updatedUser : user);
    this.saveUsers(users);
  }

  async login(credentials: LoginCredentials): Promise<{ success: boolean; message: string }> {
    await this.delay(1000);
    const users = this.loadUsers();
    const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
    if (user) {
      this.currentUserSignal.set(user);
      this.isAuthenticatedSignal.set(true);
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      return { success: true, message: 'Login successful!' };
    }
    return { success: false, message: 'Invalid email or password' };
  }

  async register(data: RegisterData & { password: string }): Promise<{ success: boolean; message: string }> {
    await this.delay(1500);
    const users = this.loadUsers();
    if (users.some(u => u.email === data.email)) {
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
      password: data.password
    } as User & { password: string };
    users.push(user);
    this.saveUsers(users);
    this.currentUserSignal.set(user);
    this.isAuthenticatedSignal.set(true);
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, message: 'Registration successful!' };
  }

  logout(): void {
    this.currentUserSignal.set(null);
    this.isAuthenticatedSignal.set(false);
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
        this.updateUser(updatedUser);
        sessionStorage.setItem('currentUser', JSON.stringify(updatedUser));
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

  // DEBUG: List all users in sessionStorage
  getAllUsers(): User[] {
    return this.loadUsers();
  }
}
