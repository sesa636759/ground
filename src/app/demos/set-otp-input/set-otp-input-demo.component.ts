import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OtpInputPlaygroundComponent } from './components/otp-input-playground/otp-input-playground.component';

@Component({
  selector: 'app-set-otp-input-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, OtpInputPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-otp-input-demo.component.html',
  styleUrl: './set-otp-input-demo.component.scss',
})
export class SetOtpInputDemoComponent implements OnInit {
  ngOnInit() {}
}
