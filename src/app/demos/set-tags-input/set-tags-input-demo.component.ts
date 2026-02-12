import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagsInputPlaygroundComponent } from './components/tags-input-playground/tags-input-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-tags-input-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TagsInputPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tags-input-demo.component.html',
  styleUrl: './set-tags-input-demo.component.scss',
})
export class SetTagsInputDemoComponent implements OnInit {
  defaultTags = ['Angular', 'TypeScript', 'Stencil'];
  skillTags = ['JavaScript', 'CSS', 'HTML', 'React', 'Vue'];
  categoryTags = ['Frontend', 'Backend', 'DevOps'];

  playgroundCode = `<app-tags-input
  [(ngModel)]="tags"
  placeholder="Add tags"
  [max]="10"
></app-tags-input>`;

  ngOnInit() {}
}
