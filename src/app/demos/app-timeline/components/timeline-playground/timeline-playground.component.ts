import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
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
export class TimelinePlaygroundComponent {
  pgConfig = {
    orientation: 'vertical',
    align: 'left',
    showOpposite: true,
    customMarker: false,
  };

  events = [
    {
      status: 'Ordered',
      date: '15/10/2023 10:30',
      icon: 'shopping_cart',
      color: '#9C27B0',
      description: 'Transaction processed',
    },
    {
      status: 'Processing',
      date: '15/10/2023 14:00',
      icon: 'cog',
      color: '#673AB7',
      description: 'Item picked for shipment',
    },
    {
      status: 'Shipped',
      date: '15/10/2023 16:15',
      icon: 'local_shipping',
      color: '#FF9800',
      description: 'En route to destination',
    },
    {
      status: 'Delivered',
      date: '16/10/2023 10:00',
      icon: 'check_circle',
      color: '#607D8B',
      description: 'Package handed over',
    },
  ];

  valueJson = JSON.stringify(this.events);
  generatedCodeSignal = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  updateConfig() {
    let code = '<ui-timeline\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  align="${this.pgConfig.align}"\n`;
    code += `  [value]="events"\n`;
    code += '>\n';
    code += '  <ng-template let-item>\n';
    code += '    <div>{{ item.status }}</div>\n';
    if (this.pgConfig.showOpposite) code += '    <div slot="opposite">{{ item.date }}</div>\n';
    code += '  </ng-template>\n';
    code += '</ui-timeline>';

    this.generatedCodeSignal.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'vertical',
      align: 'left',
      showOpposite: true,
      customMarker: false,
    };
    this.updateConfig();
  }
}
