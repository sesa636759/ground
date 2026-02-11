import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagsInputPlaygroundComponent } from './components/tags-input-playground/tags-input-playground.component';

@Component({
  selector: 'app-set-tags-input-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TagsInputPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tags-input-demo.component.html',
  styleUrl: './set-tags-input-demo.component.scss',
})
export class SetTagsInputDemoComponent implements OnInit {
  defaultTags = ['Angular', 'TypeScript', 'Stencil'];
  skillTags = ['JavaScript', 'CSS', 'HTML', 'React', 'Vue'];
  categoryTags = ['Frontend', 'Backend', 'DevOps'];

  ngOnInit() {}
}
