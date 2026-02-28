import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-carousel-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel-playground.component.html',
  styleUrl: './carousel-playground.component.scss',
})
export class CarouselPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselElement') carouselElement!: ElementRef;

  pgConfig = {
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

  pgAccordionItems = JSON.stringify([
    { id: 'layout', title: 'Layout Configuration', icon: '📏' },
    { id: 'animation', title: 'Effects & Animation', icon: '🎬' },
    { id: 'controls', title: 'Navigation Controls', icon: '🎮' },
    { id: 'behavior', title: 'Carousel Behavior', icon: '⚙️' },
  ]);

  accordionDefaultOpen = JSON.stringify(['layout']);

  dummySlides = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    color: this.getRandomColor(),
    title: `Slide ${i + 1}`,
    desc: 'Interactive Slide Content',
  }));

  generatedCode: string = '';
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  getCleanFormatedDom(): string {
    if (!this.carouselElement) return '';
    const innerContent = `
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>`;
    return generatePlaygroundCode(
      this.carouselElement.nativeElement as Element,
      'app-carousel',
      innerContent,
    );
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCode = this.getCleanFormatedDom();
      this.refreshCode();
    }, 50);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode);
  }

  getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 60%)`;
  }

  resetConfig() {
    this.pgConfig = {
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
    this.updateConfig();
  }
}
