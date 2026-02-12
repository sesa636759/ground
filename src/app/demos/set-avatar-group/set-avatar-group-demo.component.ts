import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvatarGroupPlaygroundComponent } from './components/avatar-group-playground/avatar-group-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-avatar-group-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AvatarGroupPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-avatar-group-demo.component.html',
  styleUrl: './set-avatar-group-demo.component.scss',
})
export class SetAvatarGroupDemoComponent implements OnInit {
  users = [
    { name: 'John Doe', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Bob Johnson', image: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Alice Williams', image: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Charlie Brown', image: 'https://i.pravatar.cc/150?img=5' },
  ];

  playgroundCode = `<app-avatar-group
  [avatars]="users"
  [max]="3"
></app-avatar-group>`;

  ngOnInit() {}
}
