import { Component, OnInit, signal, computed, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';

interface ActivityItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  timestamp: Date;
  type: 'login' | 'update' | 'security' | 'other';
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = computed(() => this.authService.currentUser());
  isAuthenticated = computed(() => this.authService.isAuthenticated());

  activeTab = signal<'overview' | 'settings' | 'security' | 'activity'>('overview');
  editMode = signal(false);
  loading = signal(false);
  message = signal<{ type: 'success' | 'error'; text: string } | null>(null);

  // Edit form data
  editForm = signal<Partial<User>>({});

  // Password change form
  passwordForm = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  showCurrentPassword = signal(false);
  showNewPassword = signal(false);
  showConfirmPassword = signal(false);

  // Activity log
  activities = signal<ActivityItem[]>([
    {
      id: '1',
      icon: '🔑',
      title: 'Successful Login',
      description: 'Logged in from Chrome on Windows',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      type: 'login',
    },
    {
      id: '2',
      icon: '✏️',
      title: 'Profile Updated',
      description: 'Updated bio and contact information',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      type: 'update',
    },
    {
      id: '3',
      icon: '🔒',
      title: 'Password Changed',
      description: 'Password was successfully updated',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      type: 'security',
    },
    {
      id: '4',
      icon: '🔑',
      title: 'Successful Login',
      description: 'Logged in from Firefox on MacOS',
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      type: 'login',
    },
  ]);

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  setActiveTab(tab: 'overview' | 'settings' | 'security' | 'activity'): void {
    this.activeTab.set(tab);
    this.editMode.set(false);
    this.message.set(null);
  }

  startEdit(): void {
    const currentUser = this.user();
    if (currentUser) {
      this.editForm.set({
        fullName: currentUser.fullName,
        bio: currentUser.bio,
        phone: currentUser.phone,
        location: currentUser.location,
        website: currentUser.website,
        department: currentUser.department,
      });
      this.editMode.set(true);
    }
  }

  cancelEdit(): void {
    this.editMode.set(false);
    this.editForm.set({});
    this.message.set(null);
  }

  async saveProfile(): Promise<void> {
    this.loading.set(true);
    this.message.set(null);

    try {
      const result = await this.authService.updateProfile(this.editForm());

      if (result.success) {
        this.message.set({ type: 'success', text: result.message });
        this.editMode.set(false);
        setTimeout(() => this.message.set(null), 3000);
      } else {
        this.message.set({ type: 'error', text: result.message });
      }
    } catch (error) {
      this.message.set({ type: 'error', text: 'Failed to update profile' });
    } finally {
      this.loading.set(false);
    }
  }

  async changePassword(): Promise<void> {
    this.message.set(null);

    if (!this.passwordForm.currentPassword || !this.passwordForm.newPassword) {
      this.message.set({ type: 'error', text: 'Please fill in all password fields' });
      return;
    }

    if (this.passwordForm.newPassword !== this.passwordForm.confirmPassword) {
      this.message.set({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    if (this.passwordForm.newPassword.length < 8) {
      this.message.set({ type: 'error', text: 'Password must be at least 8 characters' });
      return;
    }

    this.loading.set(true);

    try {
      const result = await this.authService.changePassword(
        this.passwordForm.currentPassword,
        this.passwordForm.newPassword,
      );

      if (result.success) {
        this.message.set({ type: 'success', text: result.message });
        this.passwordForm = {
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        };
        setTimeout(() => this.message.set(null), 3000);
      } else {
        this.message.set({ type: 'error', text: result.message });
      }
    } catch (error) {
      this.message.set({ type: 'error', text: 'Failed to change password' });
    } finally {
      this.loading.set(false);
    }
  }

  logout(): void {
    this.authService.logout();
  }

  getRelativeTime(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
  }

  onAvatarChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      // In a real app, upload to server
      const reader = new FileReader();
      reader.onload = (e) => {
        const avatar = e.target?.result as string;
        this.authService.updateProfile({ avatar });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
