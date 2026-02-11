import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-set-progress-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-progress-docs.component.html',
  styleUrls: ['./set-progress-docs.component.scss'],
})
export class SetProgressDocsComponent {
  progressConfig = COMPONENT_CONFIGS['set-progress'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'line';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    line: `<div style="display: flex; flex-direction: column; gap: 2rem;">
  <!-- 30% Progress -->
  <app-progress percent="30" type="line"></app-progress>
  
  <!-- 50% Active -->
  <app-progress percent="50" type="line" status="active"></app-progress>
  
  <!-- 70% Exception -->
  <app-progress percent="70" type="line" status="exception"></app-progress>
  
  <!-- 100% Success -->
  <app-progress percent="100" type="line"></app-progress>
</div>`,
    circle: `<div style="display: flex; gap: 3rem; justify-content: center;">
  <!-- Default Size - 75% -->
  <app-progress percent="75" type="circle"></app-progress>
  
  <!-- Default Size - 100% -->
  <app-progress percent="100" type="circle" width="100"></app-progress>
  
  <!-- Small Size - 50% -->
  <app-progress percent="50" type="circle" width="80"></app-progress>
</div>`,
    dashboard: `<div style="display: flex; gap: 3rem; justify-content: center;">
  <!-- Gap Position: Top -->
  <app-progress percent="75" type="dashboard"></app-progress>
  
  <!-- Gap Position: Bottom -->
  <app-progress percent="75" type="dashboard" gap-position="bottom"></app-progress>
  
  <!-- Gap Position: Left -->
  <app-progress percent="75" type="dashboard" gap-position="left"></app-progress>
  
  <!-- Gap Position: Right -->
  <app-progress percent="75" type="dashboard" gap-position="right"></app-progress>
</div>`,
    status: `<div style="display: flex; flex-direction: column; gap: 2rem;">
  <!-- Active Status (Animated) -->
  <app-progress percent="60" type="line" status="active"></app-progress>
  
  <!-- Success Status -->
  <app-progress percent="100" type="line" status="success"></app-progress>
  
  <!-- Exception Status -->
  <app-progress percent="70" type="line" status="exception"></app-progress>
</div>`,
    indeterminate: `<div style="display: flex; flex-direction: column; gap: 3rem; align-items: center;">
  <!-- Line Indeterminate -->
  <app-progress type="line" indeterminate></app-progress>
  
  <!-- Circle Indeterminate -->
  <app-progress type="circle" indeterminate width="120"></app-progress>
  
  <!-- Dashboard Indeterminate -->
  <app-progress type="dashboard" indeterminate width="120"></app-progress>
</div>`,
    premium: `<div style="display: flex; gap: 3rem; justify-content: center;">
  <!-- Liquid Wave Animation -->
  <app-progress percent="65" type="circle" width="120" style-variant="liquid-wave"></app-progress>
  
  <!-- Glassmorphism Effect -->
  <app-progress percent="75" type="circle" width="120" style-variant="glassmorphism"></app-progress>
  
  <!-- Dynamic Glow Effect -->
  <app-progress percent="85" type="circle" width="120" style-variant="glow"></app-progress>
  
  <!-- Decimal Precision -->
  <app-progress percent="92.5" type="circle" width="120" show-decimals></app-progress>
</div>`,
    colors: `<div style="display: flex; flex-direction: column; gap: 2rem;">
  <!-- Custom Purple -->
  <app-progress percent="60" type="line" stroke-color="#722ed1"></app-progress>
  
  <!-- Custom Orange -->
  <app-progress percent="75" type="line" stroke-color="#fa8c16"></app-progress>
  
  <!-- Custom Pink -->
  <app-progress percent="85" type="line" stroke-color="#eb2f96"></app-progress>
</div>`,
    gradient: `<div style="display: flex; flex-direction: column; gap: 2rem;">
  <!-- Blue to Cyan -->
  <app-progress percent="80" type="line" stroke-color='{"0%": "#108ee9", "100%": "#87d068"}'></app-progress>
  
  <!-- Purple to Pink -->
  <app-progress percent="90" type="line" stroke-color='{"0%": "#722ed1", "100%": "#eb2f96"}'></app-progress>
  
  <!-- Orange to Red -->
  <app-progress percent="70" type="line" stroke-color='{"0%": "#fa8c16", "100%": "#f5222d"}'></app-progress>
</div>`,
    steps: `<div style="display: flex; flex-direction: column; gap: 2rem;">
  <!-- 5 Steps - 60% -->
  <app-progress percent="60" type="line" steps="5"></app-progress>
  
  <!-- 10 Steps - 80% -->
  <app-progress percent="80" type="line" steps="10"></app-progress>
  
  <!-- 8 Steps - Success -->
  <app-progress percent="75" type="line" steps="8" stroke-color="#52c41a"></app-progress>
</div>`,
    strokeWidth: `<div style="display: flex; flex-direction: column; gap: 2rem;">
  <!-- Thin (4px) -->
  <app-progress percent="60" type="line" stroke-width="4"></app-progress>
  
  <!-- Normal (10px) -->
  <app-progress percent="60" type="line" stroke-width="10"></app-progress>
  
  <!-- Thick (20px) -->
  <app-progress percent="60" type="line" stroke-width="20"></app-progress>
</div>`,
    strokeLinecap: `<div style="display: flex; flex-direction: column; gap: 2rem;">
  <!-- Round Linecap -->
  <app-progress percent="75" type="line" stroke-linecap="round"></app-progress>
  
  <!-- Square Linecap -->
  <app-progress percent="75" type="line" stroke-linecap="square"></app-progress>
</div>`,
    hideInfo: `<div style="display: flex; flex-direction: column; gap: 3rem; align-items: center;">
  <!-- Line Progress without Info -->
  <app-progress percent="70" type="line" show-info="false"></app-progress>
  
  <!-- Circle Progress without Info -->
  <app-progress percent="75" type="circle" show-info="false"></app-progress>
</div>`,
    interactive: `<div>
  <!-- Interactive Progress -->
  <app-progress percent="50" type="line"></app-progress>
  
  <!-- Control Buttons -->
  <button onclick="updateProgress(-10)">- Decrease</button>
  <button onclick="updateProgress(10)">+ Increase</button>
</div>`,
  };

  getActiveExampleLabel() {
    const labels: Record<string, string> = {
      line: 'Line Progress',
      circle: 'Circle Progress',
      dashboard: 'Dashboard & Circular Config',
      status: 'Progress Status',
      indeterminate: 'Indeterminate State',
      premium: 'Premium Styles',
      colors: 'Custom Colors',
      gradient: 'Gradient Progress',
      steps: 'Steps Progress',
      strokeWidth: 'Custom Stroke Width',
      strokeLinecap: 'Stroke Linecap',
      hideInfo: 'Hide Info Text',
      interactive: 'Interactive Demo',
    };
    return labels[this.activeExample] || this.activeExample;
  }

  setTab(tab: 'examples' | 'playground' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
    this.isCodeVisible = false;
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }

  decreaseProgress(event: Event) {
    const button = event.target as HTMLElement;
    const progressEl = button.closest('.canvas-item')?.querySelector('app-progress');
    if (progressEl) {
      const currentPercent = parseInt(progressEl.getAttribute('percent') || '0');
      progressEl.setAttribute('percent', Math.max(0, currentPercent - 10).toString());
    }
  }

  increaseProgress(event: Event) {
    const button = event.target as HTMLElement;
    const progressEl = button.closest('.canvas-item')?.querySelector('app-progress');
    if (progressEl) {
      const currentPercent = parseInt(progressEl.getAttribute('percent') || '0');
      progressEl.setAttribute('percent', Math.min(100, currentPercent + 10).toString());
    }
  }
}
