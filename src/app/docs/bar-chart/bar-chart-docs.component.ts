import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-bar-chart-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './bar-chart-docs.component.html',
  styleUrls: ['./bar-chart-docs.component.scss'],
})
export class BarChartDocsComponent {
  componentConfig = COMPONENT_CONFIGS['bar-chart'] || {
    id: 'bar-chart',
    tagName: 'ui-bar-chart',
    label: 'Bar Chart',
    description: 'A component to visualize data values as vertical bars.',
    props: [
      { name: 'data', type: 'json', defaultValue: [] },
      { name: 'labels', type: 'json', defaultValue: [] },
      { name: 'color', type: 'string', defaultValue: '#3b82f6' },
    ],
  };

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  chartData = JSON.stringify([65, 59, 80, 81, 56, 55, 40]);
  chartLabels = JSON.stringify(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']);

  exampleCodes: Record<string, string> = {
    basic: `<ui-bar-chart [data]="[65, 59, 80, 81, 56, 55, 40]" [labels]="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']"></ui-bar-chart>`,
  };

  setTab(tab: 'examples' | 'playground' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
    this.isCodeVisible = false;
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }
}
