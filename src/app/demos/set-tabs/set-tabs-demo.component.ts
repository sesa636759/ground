import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPlaygroundComponent } from './components/tabs-playground/tabs-playground.component';

@Component({
  selector: 'app-set-tabs-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TabsPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tabs-demo.component.html',
  styleUrl: './set-tabs-demo.component.scss',
})
export class SetTabsDemoComponent implements OnInit {
  ngOnInit() {}
}
