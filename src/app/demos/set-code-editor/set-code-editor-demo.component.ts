import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeEditorPlaygroundComponent } from './components/code-editor-playground/code-editor-playground.component';

@Component({
  selector: 'app-set-code-editor-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeEditorPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-code-editor-demo.component.html',
  styleUrl: './set-code-editor-demo.component.scss',
})
export class SetCodeEditorDemoComponent implements OnInit {
  ngOnInit() {}
}
