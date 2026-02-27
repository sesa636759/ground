import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-avatar-group-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './avatar-group-playground.component.html',

  styles: [
    `
      @use '../../../../../styles/playground-base.scss';
    `,
  ],
})
export class AvatarGroupPlaygroundComponent implements OnInit {
  pgConfig = {
    size: 'medium',
    max: 4,
    layout: 'stacked',
    shape: 'circle',
    showTooltips: true,
    clickable: false,
    spacing: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
    direction: 'horizontal',
    showPopover: false,
    animated: false,
    hoverEffect: 'none',
    columns: 3,
  };
  users = [
    { name: 'John Doe', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Bob Johnson', image: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Alice Williams', image: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Charlie Brown', image: 'https://i.pravatar.cc/150?img=5' },
    { name: 'David Miller', image: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Emma Davis', image: 'https://i.pravatar.cc/150?img=7' },
    { name: 'Frank Wilson', image: 'https://i.pravatar.cc/150?img=8' },
  ];
  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-avatar-group\n  size="${this.pgConfig.size}"\n  max="${this.pgConfig.max}"\n  layout="${this.pgConfig.layout}"\n  shape="${this.pgConfig.shape}"\n  direction="${this.pgConfig.direction}"`;
    if (this.pgConfig.spacing !== 8) code += `\n  spacing="${this.pgConfig.spacing}"`;
    if (this.pgConfig.borderWidth !== 2) code += `\n  border-width="${this.pgConfig.borderWidth}"`;
    if (this.pgConfig.borderColor !== '#ffffff')
      code += `\n  border-color="${this.pgConfig.borderColor}"`;
    if (this.pgConfig.showTooltips) code += `\n  show-tooltips="true"`;
    if (this.pgConfig.clickable) code += `\n  clickable="true"`;
    if (this.pgConfig.showPopover) code += `\n  show-popover="true"`;
    if (this.pgConfig.animated) code += `\n  animated="true"`;
    if (this.pgConfig.hoverEffect !== 'none')
      code += `\n  hover-effect="${this.pgConfig.hoverEffect}"`;
    if (this.pgConfig.layout === 'grid') code += `\n  columns="${this.pgConfig.columns}"`;
    code += `\n>\n  <!-- Child avatars -->\n</app-avatar-group>`;
    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
