import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';
import { AppCheckboxValueAccessorDirective } from 'src/app/directives/ui-checkbox-value-accessor.directive';

@Component({
  selector: 'app-card-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-playground.component.html',
  styleUrl: './card-playground.component.scss',
})
export class CardPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('cardSet') cardSet!: ElementRef;
  // Playground State
  pgConfig = {
    title: 'Card Title',
    extra: 'More',
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
    actions: 'Settings,Edit,More',
    hoverable: true,
    size: 'default',
    bordered: true,
    type: 'default',
    loading: false,
    flippable: false,
    flipTrigger: 'click',
    closable: false,
    menuActions: '',
    layout: 'vertical',
    glass: false,
    variant: 'default',
    ribbon: '',
    ribbonPosition: 'top-right',
    ribbonColor: '#1890ff',
    collapsible: false,
    collapsed: false,
    selectable: false,
    selected: false,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    avatarIcon: '',
  };

  pgAccordionItems = JSON.stringify([{ id: 'config', title: 'Configuration', icon: '⚙️' }]);
  accordionDefaultOpen = JSON.stringify(['config']);

  eventMessage = signal('Interact with the card...');
  generatedCode = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormattedDom());
      this.refreshCode();
    }, 50);
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  getCleanFormattedDom(): string {
    if (!this.cardSet) return '';

    return generatePlaygroundCode(this.cardSet.nativeElement as Element, 'app-card');
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormattedDom());
      this.refreshCode();
    }, 50);
  }

  onCardAction(event: any) {
    this.eventMessage.set(`Action clicked: "${event.detail.action}"`);
  }

  onCardClose() {
    this.eventMessage.set(`Card closed`);
  }

  onCardCollapse(event: any) {
    this.eventMessage.set(`Card ${event.detail.collapsed ? 'collapsed' : 'expanded'}`);
    this.pgConfig.collapsed = event.detail.collapsed;
    this.updateConfig();
  }

  onCardSelect(event: any) {
    this.eventMessage.set(`Card ${event.detail.selected ? 'selected' : 'deselected'}`);
    this.pgConfig.selected = event.detail.selected;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
