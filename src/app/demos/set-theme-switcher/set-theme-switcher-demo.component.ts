import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeSwitcherPlaygroundComponent } from './components/theme-switcher-playground/theme-switcher-playground.component';

@Component({
  selector: 'app-set-theme-switcher-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ThemeSwitcherPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-theme-switcher-demo.component.html',
  styleUrl: './set-theme-switcher-demo.component.scss',
})
export class SetThemeSwitcherDemoComponent implements OnInit {
  themes = [
    { value: 'light', label: 'Light', icon: 'fas fa-sun' },
    { value: 'dark', label: 'Dark', icon: 'fas fa-moon' },
    { value: 'auto', label: 'Auto', icon: 'fas fa-circle-half-stroke' },
  ];

  ngOnInit() {}
}
