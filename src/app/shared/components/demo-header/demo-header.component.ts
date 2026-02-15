import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="demo-header">
      <h1>
        {{ title }}
      </h1>
      <p class="intro-text" *ngIf="description">
        {{ description }}
      </p>
    </header>
  `,
  styles: [
    `
      @use '../../../../styles/demo-base.scss';

      .demo-header {
        margin-bottom: var(--space-xl);
      }
    `,
  ],
})
export class DemoHeaderComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
