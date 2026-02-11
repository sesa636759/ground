import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvatarPlaygroundComponent } from './components/avatar-playground/avatar-playground.component';

@Component({
  selector: 'app-set-avatar-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AvatarPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-avatar-demo.component.html',
  styleUrl: './set-avatar-demo.component.scss',
})
export class SetAvatarDemoComponent implements OnInit {
  ngOnInit() {}
}
