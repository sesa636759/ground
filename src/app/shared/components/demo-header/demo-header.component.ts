import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-header',
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
}
