import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { OtpInputPlaygroundComponent } from './components/otp-input-playground/otp-input-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-set-otp-input-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputValueAccessorDirective, AppCheckboxValueAccessorDirective, OtpInputPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-otp-input-demo.component.html',
  styleUrl: './set-otp-input-demo.component.scss',
})
export class SetOtpInputDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮' },
    { id: 'variants', title: 'Style Variants', icon: '✨' },
    { id: 'grouping', title: 'Grouping & Colors', icon: '🎨' },
    { id: 'sizes', title: 'Sizes', icon: '📏' },
  ];

  playgroundCode = `<app-otp-input
  [length]="6"
  [type]="numeric"
  (complete)="onOtpComplete($event)"
></app-otp-input>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
