import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, RegisterData } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formData: RegisterData = {
    username: '',
    email: '',
    password: '',
    fullName: '',
    acceptTerms: false
  };

  confirmPassword = '';
  loading = signal(false);
  error = signal<string | null>(null);
  success = signal<string | null>(null);
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  
  passwordStrength = signal<'weak' | 'medium' | 'strong'>('weak');

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onPasswordChange(): void {
    const password = this.formData.password;
    if (!password) {
      this.passwordStrength.set('weak');
      return;
    }

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength <= 1) this.passwordStrength.set('weak');
    else if (strength <= 3) this.passwordStrength.set('medium');
    else this.passwordStrength.set('strong');
  }

  async onSubmit(): Promise<void> {
    this.error.set(null);
    this.success.set(null);

    // Validation
    if (!this.formData.username || !this.formData.email || 
        !this.formData.password || !this.formData.fullName) {
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
