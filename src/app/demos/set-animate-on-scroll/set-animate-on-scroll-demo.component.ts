import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollPlaygroundComponent } from './components/animate-on-scroll-playground/animate-on-scroll-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-animate-on-scroll-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AnimateOnScrollPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-animate-on-scroll-demo.component.html',
  styleUrl: './set-animate-on-scroll-demo.component.scss',
})
export class SetAnimateOnScrollDemoComponent implements OnInit {
  playgroundCode = `<app-animate-on-scroll
  animation="fadeIn"
  duration="1000"
>
  <div>Content to animate</div>
</app-animate-on-scroll>`;

  ngOnInit() {}
}
