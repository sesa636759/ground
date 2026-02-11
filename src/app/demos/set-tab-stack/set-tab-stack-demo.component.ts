import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabStackPlaygroundComponent } from './components/tab-stack-playground/tab-stack-playground.component';

@Component({
  selector: 'app-set-tab-stack-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TabStackPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tab-stack-demo.component.html',
  styleUrl: './set-tab-stack-demo.component.scss',
})
export class SetTabStackDemoComponent implements OnInit {
  tabs = [
    { id: 'tab1', label: 'Dashboard', icon: 'fas fa-home', content: 'Dashboard content' },
    { id: 'tab2', label: 'Analytics', icon: 'fas fa-chart-line', content: 'Analytics content' },
    { id: 'tab3', label: 'Settings', icon: 'fas fa-cog', content: 'Settings content' },
    { id: 'tab4', label: 'Profile', icon: 'fas fa-user', content: 'Profile content' },
  ];

  ngOnInit() {}
}
