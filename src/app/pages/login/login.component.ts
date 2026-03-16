import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';
import { Router, RouterLink } from '@angular/router';
import { AuthService, LoginCredentials } from '../../services/auth.service';

import { ASSETS } from '../../shared/constants/assets.constants';

@Component({
  selector: 'pg-login',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, RouterLink],

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
  readonly assets = ASSETS;
  passwordStrength = signal<'weak' | 'medium' | 'strong'>('weak');

  onPasswordChange(): void {
    const password = this.credentials.password;
    console.log('Password changed: ', password);
    if (!password) {
      this.passwordStrength.set('weak');
      return;
    }

    let score = 0;
    if (password.length >= 6) score++; // Minimum safe length
    if (password.length >= 10) score++; // Better length
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++; // Mixed case
    if (/\d/.test(password)) score++; // Numbers
    if (/[^a-zA-Z0-9]/.test(password)) score++; // Symbols

    if (score <= 2) this.passwordStrength.set('weak');
    else if (score <= 4) this.passwordStrength.set('medium');
    else this.passwordStrength.set('strong');
  }

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
        const redirectUrl = sessionStorage.getItem('redirectUrl') || '/home';
        sessionStorage.removeItem('redirectUrl');
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
