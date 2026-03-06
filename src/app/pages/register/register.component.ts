import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { AuthService, RegisterData } from '../../services/auth.service';
import { AppInputValueAccessorDirective } from '../../directives/ui-input-value-accessor.directive';
import { ASSETS } from '../../shared/constants/assets.constants';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';

@Component({
  selector: 'pg-register',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, RouterLink, AppInputValueAccessorDirective],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formData: RegisterData = {
    username: '',
    email: '',
    password: '',
    fullName: '',
    acceptTerms: false,
  };

  confirmPassword = '';
  loading = signal(false);
  error = signal<string | null>(null);
  success = signal<string | null>(null);
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  readonly assets = ASSETS;

  passwordStrength = signal<'weak' | 'medium' | 'strong'>('weak');

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onPasswordChange(): void {
    const password = this.formData.password;
    console.log('Register Password changed:', password);
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

  async onSubmit(): Promise<void> {
    this.error.set(null);
    this.success.set(null);

    // Validation
    if (
      !this.formData.username ||
      !this.formData.email ||
      !this.formData.password ||
      !this.formData.fullName
    ) {
      this.error.set('Please fill in all required fields');
      return;
    }

    if (this.formData.password !== this.confirmPassword) {
      this.error.set('Passwords do not match');
      return;
    }

    if (this.formData.password.length < 8) {
      this.error.set('Password must be at least 8 characters long');
      return;
    }

    if (!this.formData.acceptTerms) {
      this.error.set('You must accept the terms and conditions');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.error.set('Please enter a valid email address');
      return;
    }

    this.loading.set(true);

    try {
      const result = await this.authService.register(this.formData);

      if (result.success) {
        this.success.set(result.message);
        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 1500);
      } else {
        this.error.set(result.message);
      }
    } catch (err) {
      this.error.set('An error occurred during registration. Please try again.');
    } finally {
      this.loading.set(false);
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword.set(!this.showPassword());
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword.set(!this.showConfirmPassword());
  }
}
