import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DocsPageLayoutComponent,
  PageSection,
} from '../../../shared/components/docs-page-layout/docs-page-layout.component';

@Component({
  selector: 'dm-label-demo',
  standalone: true,
  imports: [CommonModule, DocsPageLayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './label-demo.component.html',
  styleUrl: './label-demo.component.scss',
})
export class DmLabelDemoComponent {
  pageSections: PageSection[] = [
    { id: 'setup', label: 'Setup' },
    { id: 'configuration', label: 'Configuration' },
    { id: 'custom-render', label: 'Custom Render' },
    { id: 'testing-components', label: 'Testing Components' },
  ];

  // Code Snippets
  setupCode = `import { render } from "@testing-library/angular";
import { LabelComponent } from "./label.component";

test("renders a label", async () => {
  const { getByText } = await render(LabelComponent, {
    componentProperties: { text: "My Label" },
  });
  
  expect(getByText("My Label")).toBeInTheDocument();
});`;

  customRenderCode = `import { render as tlRender } from "@testing-library/angular";
import { ThemeProvider } from "./theme-provider";

export function render(component: any, options = {}) {
  return tlRender(component, {
    ...options,
    providers: [ThemeProvider],
  });
}`;

  testingComponentsCode = `import { render } from "./testing/render";
import { LabelComponent } from "./label.component";

test("renders secondary label", async () => {
  const { getByText } = await render(LabelComponent, {
    componentProperties: {
      text: "Optional",
      variant: "secondary"
    }
  });

  expect(getByText("Optional")).toHaveClass("label-secondary");
});`;
}
