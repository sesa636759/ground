import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../code-block/code-block.component';

@Component({
  selector: 'app-example-section',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  template: `
    <section class="demo-section" [id]="id" [class.full-width]="fullWidth">
      <div class="section-header">
        <h2>{{ title }}</h2>
        <p *ngIf="description">{{ description }}</p>
      </div>
      <div class="demo-card">
        <div class="preview-box">
          <ng-content></ng-content>
        </div>
        <app-code-block *ngIf="code" [code]="code" [language]="language" [title]="title + ' Code'">
        </app-code-block>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .full-width {
        grid-column: 1 / -1;
      }
    `,
  ],
})
export class ExampleSectionComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() code: string = '';
  @Input() language: string = 'html';
  @Input() fullWidth: boolean = true;
}
