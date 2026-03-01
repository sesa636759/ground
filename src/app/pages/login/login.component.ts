import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, LoginCredentials } from '../../services/auth.service';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AppInputValueAccessorDirective],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials: LoginCredentials = {
    email: '',
    password: '',
    rememberMe: false,
  };

  loading = signal(false);
  error = signal<string | null>(null);
  showPassword = signal(false);

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    // Redirect to home if already logged in
    if (
      this.authService.isAuthenticated && typeof this.authService.isAuthenticated === 'function'
        ? this.authService.isAuthenticated()
        : this.authService.isAuthenticated
    ) {
      this.router.navigate(['/home']);
    }
  }

  async onSubmit(): Promise<void> {
    if (!this.credentials.email || !this.credentials.password) {
      this.error.set('Please fill in all required fields');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    try {
      const result = await this.authService.login(this.credentials);

      if (result.success) {
        const redirectUrl = localStorage.getItem('redirectUrl') || '/home';
        localStorage.removeItem('redirectUrl');
        this.router.navigate([redirectUrl]);
      } else {
        this.error.set(result.message);
      }
    } catch (err) {
      this.error.set('An error occurred. Please try again.');
    } finally {
      this.loading.set(false);
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword.set(!this.showPassword());
  }

  loginWithDemo(): void {
    this.credentials = {
      email: 'demo@example.com',
      password: 'demo123',
      rememberMe: true,
    };
    this.onSubmit();
  }
}
