import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pg-demo-header',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './demo-header.component.html',
  styleUrl: './demo-header.component.scss',
})
export class DemoHeaderComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  tooltipContent: string = '';
  titleContent: string = '';

  checkTruncation(element: HTMLElement) {
    if (element.scrollWidth > element.clientWidth) {
      this.tooltipContent = this.description;
    } else {
      this.tooltipContent = '';
    }
  }

  checkTitleTruncation(element: HTMLElement) {
    if (element.scrollWidth > element.clientWidth) {
      this.titleContent = this.title;
    } else {
      this.titleContent = '';
    }
  }
}
