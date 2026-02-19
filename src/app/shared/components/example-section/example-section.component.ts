import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../code-block/code-block.component';

@Component({
  selector: 'app-example-section',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section class="demo-section" [id]="id">
      <div class="section-header">
        <h2 *ngIf="title">{{ title }}</h2>
        <p class="description" *ngIf="description">{{ description }}</p>
      </div>

      <div class="preview-box">
        <div class="preview-content">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="code-wrapper" *ngIf="code">
        <app-code-block [code]="code" [language]="language"> </app-code-block>
      </div>
    </section>
  `,
  styles: [
    `
      .demo-section {
        margin-bottom: 4rem;
        animation: fadeIn 0.6s ease-out forwards;
      }

      .section-header {
        margin-bottom: 1.5rem;

        h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .description {
          color: var(--text-secondary);
          font-size: 1rem;
          max-width: 800px;
          line-height: 1.6;
        }
      }

      .preview-box {
        background: var(--surface-2);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-xl);
        padding: 3rem;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
        position: relative;
        box-shadow: var(--shadow-sm);
      }

      .preview-content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
      }

      .code-wrapper {
        border-radius: var(--radius-lg);
        overflow: hidden;
        border: 1px solid var(--border-color);
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class ExampleSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() code: string = '';
  @Input() language: string = 'html';
  @Input() id: string = '';

  ngOnInit(): void {
    console.log(
      `ExampleSection [${this.id}] ngOnInit - title: ${this.title}, code length: ${this.code?.length}`,
    );
    if (!this.code) {
      console.warn(`ExampleSection [${this.id}]: code input is empty in ngOnInit`);
    }
  }

  ngOnChanges(changes: any): void {
    if (changes.code) {
      console.log(
        `ExampleSection [${this.id}] ngOnChanges - code updated, new length: ${changes.code.currentValue?.length}`,
      );
    }
  }
}
