import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipPlaygroundComponent } from './components/tooltip-playground/tooltip-playground.component';

@Component({
  selector: 'app-set-tooltip-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TooltipPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tooltip-demo.component.html',
  styleUrl: './set-tooltip-demo.component.scss',
})
export class SetTooltipDemoComponent implements OnInit {
  ngOnInit() {}
}
