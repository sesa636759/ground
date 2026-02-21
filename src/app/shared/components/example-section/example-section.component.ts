import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-section',
  standalone: true,
  imports: [CommonModule],
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
        <div class="code-content">
          <ui-code-preview
            [label]="title"
            [htmlCode]="language === 'html' ? code : ''"
            [tsCode]="language === 'typescript' || language === 'ts' ? code : ''"
            [jsCode]="language === 'javascript' || language === 'js' ? code : ''"
            [cssCode]="language === 'css' ? code : ''"
            [activeLang]="
              language === 'typescript' || language === 'ts'
                ? 'ts'
                : language === 'javascript' || language === 'js'
                  ? 'js'
                  : language === 'css'
                    ? 'css'
                    : 'html'
            "
            [expanded]="expanded"
          ></ui-code-preview>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .demo-section {
        margin-bottom: 5rem;
      }

      .preview-box {
        margin-bottom: 2rem;
      }

      .preview-content {
        width: 100%;
        display: flex;
        overflow: visible;
        justify-content: center;
        align-items: stretch;
        flex-direction: column;
        gap: 2rem;
      }

      .code-content {
        width: 100%;
        margin-top: 2rem;
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
export class ExampleSectionComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() code: string = '';
  @Input() language: string = 'html';
  @Input() id: string = '';
  @Input() expanded: boolean = true;

  ngOnInit(): void {}

  ngOnChanges(changes: any): void {}
}
