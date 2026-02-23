import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="demo-header">
      <div class="title-row">
        <div class="icon-container" *ngIf="icon">
          <ui-icon [name]="icon" library="default" size="lg"></ui-icon>
        </div>
        <h2>
          {{ title }}
        </h2>
      </div>
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

      .title-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 8px;
      }

      .title-row h1,
      .title-row h2,
      .title-row h3 {
        margin: 0;
      }
    `,
  ],
})
export class DemoHeaderComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
