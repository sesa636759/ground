import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-carousel-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel-playground.component.html',
  styleUrl: './carousel-playground.component.scss',
})
export class CarouselPlaygroundComponent implements OnInit {
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

  dummySlides = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    color: this.getRandomColor(),
    title: `Slide ${i + 1}`,
    desc: 'Description text',
  }));

  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-carousel\n`;
    if (this.pgConfig.slidesToShow !== 1)
      code += `  slides-to-show="${this.pgConfig.slidesToShow}"\n`;
    if (this.pgConfig.slidesToScroll !== 1)
      code += `  slides-to-scroll="${this.pgConfig.slidesToScroll}"\n`;
    if (this.pgConfig.vertical) code += `  vertical="true"\n`;
    if (this.pgConfig.animationDuration !== 500)
      code += `  animation-duration="${this.pgConfig.animationDuration}"\n`;
    if (this.pgConfig.animationEasing !== 'cubic-bezier(0.4,0,0.2,1)')
      code += `  animation-easing="${this.pgConfig.animationEasing}"\n`;
    if (this.pgConfig.autoplayInterval !== 3000)
      code += `  autoplay-interval="${this.pgConfig.autoplayInterval}"\n`;
    if (this.pgConfig.autoplay) code += `  autoplay="true"\n`;
    if (!this.pgConfig.arrows) code += `  arrows="false"\n`;
    if (!this.pgConfig.indicators) code += `  indicators="false"\n`;
    if (!this.pgConfig.infinite) code += `  infinite="false"\n`;
    if (!this.pgConfig.swipe) code += `  swipe="false"\n`;
    if (!this.pgConfig.keyboard) code += `  keyboard="false"\n`;
    if (!this.pgConfig.pauseOnHover) code += `  pause-on-hover="false"\n`;
    if (this.pgConfig.effect !== 'slide') code += `  effect="${this.pgConfig.effect}"\n`;
    if (this.pgConfig.centerMode) code += `  center-mode="true"\n  center-padding="50px"\n`;
    if (this.pgConfig.showProgress) code += `  show-progress="true"\n`;
    if (!this.pgConfig.draggable) code += `  draggable="false"\n`;
    code += `>\n`;
    code += `  <!-- Slides -->\n`;
    code += `  <div class="slide">Slide 1</div>\n`;
    code += `  <div class="slide">Slide 2</div>\n`;
    code += `  <div class="slide">Slide 3</div>\n`;
    code += `</app-carousel>`;

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 60%)`;
  }
}
