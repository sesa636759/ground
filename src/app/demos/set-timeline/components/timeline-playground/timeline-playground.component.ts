import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-timeline-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timeline-playground.component.html',
  styleUrl: './timeline-playground.component.scss',
})
export class TimelinePlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    orientation: 'vertical',
    align: 'left',
    iconPosition: 'center',
    variant: 'default',
    lineColor: '#667eea',
    animateOnScroll: true,
    compact: false,
    clickable: true,
    showLine: true,
    wrap: false,
    theme: 'light',
  };

  timelineItems = JSON.stringify([
    {
      id: '1',
      title: 'Project Started',
      description: 'Initial planning and requirements gathering phase.',
      date: 'Jan 2024',
      icon: 'fas fa-flag',
      iconColor: '#ffffff',
      iconBackground: '#667eea',
      dotColor: '#667eea',
    },
    {
      id: '2',
      title: 'Design Phase',
      description: 'UI/UX design and prototyping.',
      date: 'Feb 2024',
      icon: 'fas fa-pencil-ruler',
      iconColor: '#ffffff',
      iconBackground: '#8b5cf6',
      dotColor: '#8b5cf6',
      badge: 'Design',
    },
    {
      id: '3',
      title: 'Development',
      description: 'Core implementation and feature development.',
      date: 'Mar 2024',
      icon: 'fas fa-code',
      iconColor: '#ffffff',
      iconBackground: '#10b981',
      dotColor: '#10b981',
    },
    {
      id: '4',
      title: 'Launch',
      description: 'Product launch and deployment.',
      date: 'May 2024',
      icon: 'fas fa-rocket',
      iconColor: '#ffffff',
      iconBackground: '#ef4444',
      dotColor: '#ef4444',
    },
  ]);

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-timeline\n`;
    if (this.pgConfig.orientation !== 'vertical')
      code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.align !== 'left') code += `  align="${this.pgConfig.align}"\n`;
    if (this.pgConfig.iconPosition !== 'center')
      code += `  icon-position="${this.pgConfig.iconPosition}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.lineColor !== '#667eea')
      code += `  line-color="${this.pgConfig.lineColor}"\n`;

    if (this.pgConfig.animateOnScroll) code += `  animate-on-scroll="true"\n`;
    if (this.pgConfig.compact) code += `  compact="true"\n`;
    if (this.pgConfig.clickable) code += `  clickable="true"\n`;
    if (!this.pgConfig.showLine) code += `  show-line="false"\n`;
    if (this.pgConfig.wrap) code += `  wrap="true"\n`;
    if (this.pgConfig.theme !== 'light') code += `  theme="${this.pgConfig.theme}"\n`;

    code += `  [items]="timelineItems"\n`;
    code += `></app-timeline>`;

    this.generatedCode.set(code);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  onItemClick(event: any) {
    this.logEvent(`Item clicked: ${event.detail.title}`);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  jsonOptions = (opts: any) => JSON.stringify(opts);
}
