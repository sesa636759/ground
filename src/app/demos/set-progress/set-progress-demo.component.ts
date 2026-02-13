import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressPlaygroundComponent } from './components/progress-playground/progress-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-progress-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProgressPlaygroundComponent,
    CodeBlockComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-progress-demo.component.html',
  styleUrl: './set-progress-demo.component.scss',
})
export class SetProgressDemoComponent {
  variants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'line', title: 'Line Progress', icon: '📏' },
    { id: 'circle', title: 'Circle Progress', icon: '⚪' },
    { id: 'dashboard', title: 'Dashboard Progress', icon: '📊' },
    { id: 'status', title: 'Progress Status', icon: '✅' },
    { id: 'indeterminate', title: 'Indeterminate State', icon: '♾️' },
    { id: 'colors', title: 'Custom Colors', icon: '🎨' },
    { id: 'gradient', title: 'Gradient Progress', icon: '🌈' },
    { id: 'steps', title: 'Steps Progress', icon: '👣' },
    { id: 'stroke', title: 'Stroke Width', icon: '📐' },
    { id: 'linecap', title: 'Stroke Linecap', icon: '🔘' },
    { id: 'hide-info', title: 'Hide Info Text', icon: '🙈' },
    { id: 'premium', title: 'Premium Styles', icon: '💎' },
    { id: 'interactive', title: 'Interactive Demo', icon: '🎯' },
  ];

  get exampleVariants() {
    return this.variants.filter(v => v.id !== 'playground');
  }

  progressValue = 50;

  playgroundCode = `<app-progress
  [percent]="50"
  type="line"
></app-progress>`;

  lineCode = `<!-- Standard Progress Bar -->
<app-progress percent="30"></app-progress>
<app-progress percent="50"></app-progress>
<app-progress percent="70"></app-progress>
<app-progress percent="100"></app-progress>`;

  circleCode = `<!-- Circular Progress -->
<app-progress type="circle" percent="75"></app-progress>
<app-progress type="circle" percent="100" status="success"></app-progress>
<app-progress type="circle" percent="50" width="80"></app-progress>`;

  dashboardCode = `<!-- Dashboard Progress -->
<app-progress type="dashboard" percent="75"></app-progress>
<app-progress type="dashboard" percent="75" gap-position="top"></app-progress>
<app-progress type="dashboard" percent="50" gap-degree="120"></app-progress>`;

  statusCode = `<!-- Different Status Types -->
<app-progress percent="60" status="active"></app-progress>
<app-progress percent="100" status="success"></app-progress>
<app-progress percent="50" status="exception"></app-progress>`;

  indeterminateCode = `<!-- Indeterminate Progress -->
<app-progress indeterminate="true"></app-progress>
<app-progress type="circle" indeterminate="true"></app-progress>
<app-progress type="dashboard" indeterminate="true"></app-progress>`;

  colorsCode = `<!-- Custom Colors -->
<app-progress percent="60" stroke-color="#9b59b6"></app-progress>
<app-progress percent="75" stroke-color="#ff9800"></app-progress>
<app-progress percent="85" stroke-color="#e91e63"></app-progress>`;

  gradientCode = `<!-- Gradient Progress -->
<app-progress percent="80" stroke-color="linear-gradient(to right, #667eea, #06b6d4)"></app-progress>
<app-progress percent="90" stroke-color="linear-gradient(to right, #a855f7, #ec4899)"></app-progress>
<app-progress percent="70" stroke-color="linear-gradient(to right, #f97316, #ef4444)"></app-progress>`;

  stepsCode = `<!-- Steps Progress -->
<app-progress percent="60" steps="5"></app-progress>
<app-progress percent="80" steps="10"></app-progress>
<app-progress percent="100" steps="8" status="success"></app-progress>`;

  strokeCode = `<!-- Custom Stroke Width -->
<app-progress percent="60" stroke-width="4"></app-progress>
<app-progress percent="60" stroke-width="10"></app-progress>
<app-progress percent="60" stroke-width="20"></app-progress>`;

  linecapCode = `<!-- Stroke Linecap -->
<app-progress percent="75" stroke-linecap="round"></app-progress>
<app-progress percent="75" stroke-linecap="square"></app-progress>`;

  hideInfoCode = `<!-- Hide Info Text -->
<app-progress percent="60" show-info="false"></app-progress>
<app-progress type="circle" percent="75" show-info="false"></app-progress>`;

  premiumCode = `<!-- Premium Features -->
<app-progress percent="65" liquid="true" stroke-color="#3DCD58"></app-progress>
<app-progress percent="50" glass="true" stroke-color="#fff"></app-progress>
<app-progress percent="80" glow="true" stroke-color="#ff4d4f"></app-progress>`;

  interactiveCode = `<!-- Interactive Progress -->
<app-progress [percent]="progressValue"></app-progress>
<app-progress type="circle" [percent]="progressValue"></app-progress>
<app-progress type="dashboard" [percent]="progressValue"></app-progress>`;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  decreaseProgress() {
    this.progressValue = Math.max(0, this.progressValue - 10);
  }

  increaseProgress() {
    this.progressValue = Math.min(100, this.progressValue + 10);
  }
}
