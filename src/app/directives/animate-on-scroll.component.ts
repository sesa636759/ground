import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective, AnimationType } from './animate-on-scroll.directive';

@Component({
  selector: 'ui-animate-on-scroll',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div
      uiAnimateOnScroll
      [animation]="animationType"
      [delay]="delayValue"
      [duration]="durationValue"
      [threshold]="thresholdValue"
      [once]="onceValue"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AnimateOnScrollComponent implements OnInit {
  @Input() animation: AnimationType | string = 'fade-in';
  @Input() delay: number | string = 0;
  @Input() duration: number | string = 600;
  @Input() threshold: number | string = 0.1;
  @Input() once: boolean | string = true;

  animationType: AnimationType = 'fade-in';
  delayValue: number = 0;
  durationValue: number = 600;
  thresholdValue: number = 0.1;
  onceValue: boolean = true;

  ngOnInit() {
    this.animationType = this.animation as AnimationType;
    this.delayValue = typeof this.delay === 'string' ? parseFloat(this.delay) : this.delay;
    this.durationValue =
      typeof this.duration === 'string' ? parseFloat(this.duration) : this.duration;
    this.thresholdValue =
      typeof this.threshold === 'string' ? parseFloat(this.threshold) : this.threshold;
    this.onceValue = typeof this.once === 'string' ? this.once === 'true' : this.once;
  }
}
