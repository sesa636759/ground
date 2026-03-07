import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-waffle-chart-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './waffle-chart-playground.component.html',
  styleUrl: './waffle-chart-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmWaffleChartPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'data', title: 'Data', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'colors', title: 'Colours', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'grid', title: 'Grid', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'options', title: 'Options', icon: 'settings', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['data', 'colors', 'grid'];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      value: 72,
      total: 100,
      chartTitle: 'Task Completion',
      fillColor: '#6366f1',
      emptyColor: '#e5e7eb',
      rows: 10,
      columns: 10,
      cellSize: 20,
      gap: 2,
      showPercentage: true,
    };
  }

  updateConfig() {
    const d = this.pgConfig;
    const attrs: string[] = [`value="${d.value}"`, `total="${d.total}"`];
    if (d.chartTitle !== 'Task Completion') attrs.push(`chart-title="${d.chartTitle}"`);
    if (d.fillColor !== '#6366f1') attrs.push(`fill-color="${d.fillColor}"`);
    if (d.emptyColor !== '#e5e7eb') attrs.push(`empty-color="${d.emptyColor}"`);
    if (d.rows !== 10) attrs.push(`rows="${d.rows}"`);
    if (d.columns !== 10) attrs.push(`columns="${d.columns}"`);
    if (d.cellSize !== 20) attrs.push(`cell-size="${d.cellSize}"`);
    if (d.gap !== 2) attrs.push(`gap="${d.gap}"`);
    if (!d.showPercentage) attrs.push(`show-percentage="false"`);

    const nl = attrs.length > 2 ? '\n  ' : ' ';
    const end = attrs.length > 2 ? '\n' : '';
    this.generatedCode.set(`<chart-waffle${nl}${attrs.join(nl)}${end}></chart-waffle>`);
    this.refreshCode();
  }
}



