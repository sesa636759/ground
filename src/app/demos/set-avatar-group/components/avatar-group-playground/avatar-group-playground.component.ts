import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';
import { PlaygroundEventLogComponent } from '../../../../shared/components/playground-event-log/playground-event-log.component';

@Component({
  selector: 'app-avatar-group-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
    PlaygroundEventLogComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './avatar-group-playground.component.html',
  styleUrl: './avatar-group-playground.component.scss',
})
export class AvatarGroupPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('avatarGroupElement') avatarGroupElement!: ElementRef;

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

  pgAccordionItems = JSON.stringify([
    { id: 'layout', title: 'Layout Configuration', icon: '📏' },
    { id: 'visuals', title: 'Visual Styles', icon: '🎨' },
    { id: 'behavior', title: 'Interaction Behavior', icon: '⚙️' },
  ]);

  accordionDefaultOpen = JSON.stringify(['layout']);

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
  generatedCode: string = '';
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
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

  getCleanFormatedDom(): string {
    if (!this.avatarGroupElement) return '';
    let code = generatePlaygroundCode(
      this.avatarGroupElement.nativeElement as Element,
      'app-avatar-group',
    );
    // Add users prop to code manually
    code = code.replace('></app-avatar-group>', '\n  [users]="avatarUsers"\n></app-avatar-group>');
    return code;
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCode = this.getCleanFormatedDom();
      this.refreshCode();
    }, 50);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode);
  }

  resetConfig() {
    this.pgConfig = {
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
    this.updateConfig();
  }
}
