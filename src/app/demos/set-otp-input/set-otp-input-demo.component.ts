import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OtpInputPlaygroundComponent } from './components/otp-input-playground/otp-input-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-otp-input-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, OtpInputPlaygroundComponent, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-otp-input-demo.component.html',
  styleUrl: './set-otp-input-demo.component.scss',
})
export class SetOtpInputDemoComponent implements OnInit {
  playgroundCode = `<app-otp-input
  [length]="6"
  [type]="numeric"
  (complete)="onOtpComplete($event)"
></app-otp-input>`;

  ngOnInit() {}
}
