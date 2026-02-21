import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagPlaygroundComponent } from './components/tag-playground/tag-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-app-tag-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TagPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-tag-demo.component.html',
  styleUrl: './app-tag-demo.component.scss',
})
export class AppTagDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'severities', title: 'Severities', icon: '🚨', color: '#3b82f6' },
    { id: 'styles', title: 'Styles & Sizes', icon: '🎨', color: '#10b981' },
    { id: 'visuals', title: 'Visual Enhancements', icon: '✨', color: '#f59e0b' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  anchorLinks = JSON.stringify(
    this.variants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  playgroundCode = `<ui-tag value="New" severity="info" rounded></ui-tag>`;

  severitiesCode = `<ui-tag severity="primary" value="Primary"></ui-tag>
<ui-tag severity="success" value="Success"></ui-tag>
<ui-tag severity="info" value="Info"></ui-tag>
<ui-tag severity="warning" value="Warning"></ui-tag>
<ui-tag severity="danger" value="Danger"></ui-tag>`;

  stylesCode = `<ui-tag value="Square" [rounded]="false"></ui-tag>
<ui-tag value="Rounded" rounded></ui-tag>
<ui-tag value="Small" size="small"></ui-tag>
<ui-tag value="Large" size="large"></ui-tag>`;

  visualsCode = `<ui-tag icon="⭐" value="Starred"></ui-tag>
<ui-tag value="Tag with Counter" counter="5"></ui-tag>
<ui-tag value="Removable" removable></ui-tag>`;

  ngOnInit() {}
}
