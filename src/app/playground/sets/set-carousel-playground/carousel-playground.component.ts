import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';
@Component({
  selector: 'dm-carousel-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel-playground.component.html',
  styleUrl: './carousel-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmCarouselPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('carouselElement') carouselElement!: ElementRef;

  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'animation', title: 'Effects & Animation', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'controls', title: 'Navigation Controls', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Carousel Behavior', icon: 'settings', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['layout'];

  dummySlides = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    color: this.getRandomColor(),
    title: `Slide ${i + 1}`,
    desc: 'Interactive Slide Content',
  }));

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      animationDuration: 500,
      animationEasing: 'cubic-bezier(0.4,0,0.2,1)',
      autoplayInterval: 3000,
      autoplay: true,
      arrows: true,
      indicators: true,
      infinite: true,
      swipe: true,
      keyboard: true,
      pauseOnHover: true,
      effect: 'slide',
      centerMode: false,
      showProgress: true,
      draggable: true,
    };
  }

  updateConfig() {
    const innerContent = `
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>`;
    this.updateConfigFromDom(this.carouselElement, 'app-carousel', innerContent);
  }

  getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 60%)`;
  }
}



