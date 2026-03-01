import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { categoryNavItems } from '../../data/navigation.data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCode,
  faLayerGroup,
  faGaugeHigh,
  faBookOpen,
  faMobileScreenButton,
  faCheckDouble,
  faRocket,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';
import { AnimateOnScrollComponent } from '../../directives/animate-on-scroll.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, AnimateOnScrollComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  faCheckDouble = faCheckDouble;
  faRocket = faRocket;
  faTerminal = faTerminal;
  faCode = faCode;
  faLayerGroup = faLayerGroup;
  faGaugeHigh = faGaugeHigh;
  faBookOpen = faBookOpen;
  faMobileScreenButton = faMobileScreenButton;

  categories = categoryNavItems;

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  getCategoryDescription(id: string): string {
    const descriptions: Record<string, string> = {
      foundation: 'Essential building blocks for layouts and structure',
      navigation: 'Intuitive navigation patterns for seamless user journeys',
      inputs: 'Rich form controls for data collection and interaction',
      'data-display': 'Powerful components for presenting complex data',
      feedback: 'User feedback and overlay components for better UX',
    };
    return descriptions[id] || 'Explore components in this category';
  }
}
