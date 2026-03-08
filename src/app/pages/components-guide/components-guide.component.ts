import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsPageLayoutComponent, PageSection } from '../../shared/components/docs-page-layout/docs-page-layout.component';

@Component({
  selector: 'pg-components-guide',
  standalone: true,
  imports: [CommonModule, DocsPageLayoutComponent],
  templateUrl: './components-guide.component.html',
  styleUrl: './components-guide.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsGuideComponent {
  readonly sections: PageSection[] = [
    { id: 'when-to-use', label: 'When to Use Components' },
    { id: 'import-pattern', label: 'Import Pattern' },
    { id: 'composition-rules', label: 'Composition Rules' },
    { id: 'accessibility', label: 'Accessibility Checklist' },
  ];
}
