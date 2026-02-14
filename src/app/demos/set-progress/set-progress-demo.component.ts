import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressPlaygroundComponent } from './components/progress-playground/progress-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-progress-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProgressPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-progress-demo.component.html',
  styleUrl: './set-progress-demo.component.scss',
})
export class SetProgressDemoComponent {
  exampleVariants = [
    // Line Progress
    { id: 'line-basic', title: 'Line Basic', icon: '📏' },
    { id: 'line-30', title: 'Line 30%', icon: '📊' },
    { id: 'line-50', title: 'Line 50%', icon: '📈' },
    { id: 'line-70', title: 'Line 70%', icon: '📉' },
    { id: 'line-100', title: 'Line Complete', icon: '✅' },
    
    // Circle Progress
    { id: 'circle-basic', title: 'Circle Basic', icon: '⚪' },
    { id: 'circle-75', title: 'Circle 75%', icon: '🔵' },
    { id: 'circle-100', title: 'Circle Complete', icon: '🟢' },
    { id: 'circle-small', title: 'Circle Small', icon: '🔘' },
    { id: 'circle-large', title: 'Circle Large', icon: '⭕' },
    
    // Dashboard Progress
    { id: 'dashboard-basic', title: 'Dashboard Basic', icon: '📊' },
    { id: 'dashboard-top', title: 'Gap Top', icon: '⬆️' },
    { id: 'dashboard-bottom', title: 'Gap Bottom', icon: '⬇️' },
    { id: 'dashboard-left', title: 'Gap Left', icon: '⬅️' },
    { id: 'dashboard-right', title: 'Gap Right', icon: '➡️' },
    { id: 'dashboard-custom-gap', title: 'Custom Gap', icon: '🎯' },
    
    // Status Types
    { id: 'status-active', title: 'Active Status', icon: '⚡' },
    { id: 'status-success', title: 'Success Status', icon: '✅' },
    { id: 'status-exception', title: 'Exception Status', icon: '❌' },
    
    // Indeterminate
    { id: 'indeterminate-line', title: 'Line Indeterminate', icon: '♾️' },
    { id: 'indeterminate-circle', title: 'Circle Indeterminate', icon: '🔄' },
    { id: 'indeterminate-dashboard', title: 'Dashboard Indeterminate', icon: '🌀' },
    
    // Colors & Gradients
    { id: 'color-purple', title: 'Purple Color', icon: '🟣' },
    { id: 'color-orange', title: 'Orange Color', icon: '🟠' },
    { id: 'color-pink', title: 'Pink Color', icon: '🩷' },
    { id: 'gradient-blue', title: 'Blue Gradient', icon: '🌊' },
    { id: 'gradient-purple', title: 'Purple Gradient', icon: '💜' },
    { id: 'gradient-orange', title: 'Orange Gradient', icon: '🔥' },
    
    // Steps Progress
    { id: 'steps-5', title: '5 Steps', icon: '5️⃣' },
    { id: 'steps-10', title: '10 Steps', icon: '🔟' },
    { id: 'steps-success', title: 'Steps Success', icon: '✨' },
    
    // Stroke Width
    { id: 'stroke-thin', title: 'Thin Stroke', icon: '📏' },
    { id: 'stroke-normal', title: 'Normal Stroke', icon: '📐' },
    { id: 'stroke-thick', title: 'Thick Stroke', icon: '📊' },
    
    // Stroke Linecap
    { id: 'linecap-round', title: 'Round Linecap', icon: '🔘' },
    { id: 'linecap-square', title: 'Square Linecap', icon: '⬛' },
    
    // Hide Info
    { id: 'hide-info-line', title: 'Line No Info', icon: '🙈' },
    { id: 'hide-info-circle', title: 'Circle No Info', icon: '⚫' },
    
    // Premium Styles
    { id: 'liquid-wave', title: 'Liquid Wave', icon: '🌊' },
    { id: 'glassmorphism', title: 'Glassmorphism', icon: '🔮' },
    { id: 'dynamic-glow', title: 'Dynamic Glow', icon: '✨' },
    { id: 'decimal-precision', title: 'Decimal Precision', icon: '🔢' },
  ];

  progressValue = 50;

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

  // Line Progress
  lineBasicCode = signal(`<app-progress
  percent="45"
></app-progress>`);

  line30Code = signal(`<app-progress
  percent="30"
></app-progress>`);

  line50Code = signal(`<app-progress
  percent="50"
></app-progress>`);

  line70Code = signal(`<app-progress
  percent="70"
></app-progress>`);

  line100Code = signal(`<app-progress
  percent="100"
  status="success"
></app-progress>`);

  // Circle Progress
  circleBasicCode = signal(`<app-progress
  type="circle"
  percent="60"
></app-progress>`);

  circle75Code = signal(`<app-progress
  type="circle"
  percent="75"
></app-progress>`);

  circle100Code = signal(`<app-progress
  type="circle"
  percent="100"
  status="success"
></app-progress>`);

  circleSmallCode = signal(`<app-progress
  type="circle"
  percent="50"
  width="80"
></app-progress>`);

  circleLargeCode = signal(`<app-progress
  type="circle"
  percent="85"
  width="150"
></app-progress>`);

  // Dashboard Progress
  dashboardBasicCode = signal(`<app-progress
  type="dashboard"
  percent="75"
></app-progress>`);

  dashboardTopCode = signal(`<app-progress
  type="dashboard"
  percent="75"
  gap-position="top"
></app-progress>`);

  dashboardBottomCode = signal(`<app-progress
  type="dashboard"
  percent="75"
  gap-position="bottom"
></app-progress>`);

  dashboardLeftCode = signal(`<app-progress
  type="dashboard"
  percent="75"
  gap-position="left"
></app-progress>`);

  dashboardRightCode = signal(`<app-progress
  type="dashboard"
  percent="75"
  gap-position="right"
></app-progress>`);

  dashboardCustomGapCode = signal(`<app-progress
  type="dashboard"
  percent="50"
  gap-degree="120"
></app-progress>`);

  // Status Types
  statusActiveCode = signal(`<app-progress
  percent="60"
  status="active"
></app-progress>`);

  statusSuccessCode = signal(`<app-progress
  percent="100"
  status="success"
></app-progress>`);

  statusExceptionCode = signal(`<app-progress
  percent="50"
  status="exception"
></app-progress>`);

  // Indeterminate
  indeterminateLineCode = signal(`<app-progress
  indeterminate="true"
></app-progress>`);

  indeterminateCircleCode = signal(`<app-progress
  type="circle"
  indeterminate="true"
></app-progress>`);

  indeterminateDashboardCode = signal(`<app-progress
  type="dashboard"
  indeterminate="true"
></app-progress>`);

  // Colors & Gradients
  colorPurpleCode = signal(`<app-progress
  percent="60"
  stroke-color="#9b59b6"
></app-progress>`);

  colorOrangeCode = signal(`<app-progress
  percent="75"
  stroke-color="#ff9800"
></app-progress>`);

  colorPinkCode = signal(`<app-progress
  percent="85"
  stroke-color="#e91e63"
></app-progress>`);

  gradientBlueCode = signal(`<app-progress
  percent="80"
  stroke-color="linear-gradient(to right, #667eea, #06b6d4)"
></app-progress>`);

  gradientPurpleCode = signal(`<app-progress
  percent="90"
  stroke-color="linear-gradient(to right, #a855f7, #ec4899)"
></app-progress>`);

  gradientOrangeCode = signal(`<app-progress
  percent="70"
  stroke-color="linear-gradient(to right, #f97316, #ef4444)"
></app-progress>`);

  // Steps Progress
  steps5Code = signal(`<app-progress
  percent="60"
  steps="5"
></app-progress>`);

  steps10Code = signal(`<app-progress
  percent="80"
  steps="10"
></app-progress>`);

  stepsSuccessCode = signal(`<app-progress
  percent="100"
  steps="8"
  status="success"
></app-progress>`);

  // Stroke Width
  strokeThinCode = signal(`<app-progress
  percent="60"
  stroke-width="4"
></app-progress>`);

  strokeNormalCode = signal(`<app-progress
  percent="60"
  stroke-width="10"
></app-progress>`);

  strokeThickCode = signal(`<app-progress
  percent="60"
  stroke-width="20"
></app-progress>`);

  // Stroke Linecap
  linecapRoundCode = signal(`<app-progress
  percent="75"
  stroke-linecap="round"
></app-progress>`);

  linecapSquareCode = signal(`<app-progress
  percent="75"
  stroke-linecap="square"
></app-progress>`);

  // Hide Info
  hideInfoLineCode = signal(`<app-progress
  percent="60"
  show-info="false"
></app-progress>`);

  hideInfoCircleCode = signal(`<app-progress
  type="circle"
  percent="75"
  show-info="false"
></app-progress>`);

  // Premium Styles
  liquidWaveCode = signal(`<app-progress
  percent="65"
  liquid="true"
  stroke-color="#3DCD58"
></app-progress>`);

  glassmorphismCode = signal(`<app-progress
  percent="50"
  glass="true"
  stroke-color="#fff"
></app-progress>`);

  dynamicGlowCode = signal(`<app-progress
  percent="80"
  glow="true"
  stroke-color="#ff4d4f"
></app-progress>`);

  decimalPrecisionCode = signal(`<app-progress
  percent="2.55"
></app-progress>`);
}
