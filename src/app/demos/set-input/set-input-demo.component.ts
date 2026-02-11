import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputPlaygroundComponent } from './components/input-playground/input-playground.component';

@Component({
  selector: 'app-set-input-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, InputPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-input-demo.component.html',
  styleUrl: './set-input-demo.component.scss',
})
export class SetInputDemoComponent implements OnInit {
  skeletonState = false;

  currencyFormatter = (val: string) => {
    if (!val) return '';
    return '$ ' + val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  currencyParser = (val: string) => {
    return val.replace(/\$\s?|(,*)/g, '');
  };

  ngOnInit() {}

  toggleSkeleton() {
    this.skeletonState = !this.skeletonState;
  }
}
