import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardPlaygroundComponent } from './components/dashboard-playground/dashboard-playground.component';

@Component({
  selector: 'app-set-dashboard-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-dashboard-demo.component.html',
  styleUrl: './set-dashboard-demo.component.scss',
})
export class SetDashboardDemoComponent implements OnInit {
  ngOnInit() {}
}
