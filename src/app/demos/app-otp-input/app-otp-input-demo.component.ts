import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { OtpInputPlaygroundComponent } from './components/otp-input-playground/otp-input-playground.component';

@Component({
  selector: 'app-app-otp-input-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, OtpInputPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-otp-input-demo.component.html',
  styleUrl: './app-otp-input-demo.component.scss',
})
export class AppOtpInputDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'lengths', name: 'Field Configurations', icon: '🔢', color: '#3b82f6' },
    { id: 'states', name: 'Modes & States', icon: '🔒', color: '#10b981' },
  ];

  playgroundCode = `<ui-otp-input [length]="6" (otpChange)="handleOtp($event)"></ui-otp-input>`;

  lengthsCode = `<!-- 4 Digit Verification -->
<ui-otp-input [length]="4"></ui-otp-input>

<!-- Large 8 Digit Pin -->
<ui-otp-input [length]="8" size="lg"></ui-otp-input>`;

  statesCode = `<!-- Masked (Password Style) -->
<ui-otp-input mask [length]="6"></ui-otp-input>

<!-- Disabled State -->
<ui-otp-input disabled [length]="6"></ui-otp-input>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
