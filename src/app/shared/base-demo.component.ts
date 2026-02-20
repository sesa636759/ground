export interface DemoVariant {
  id: string;
  title: string;
  icon?: string;
  description?: string;
}

export abstract class BaseDemoComponent {
  abstract exampleVariants: DemoVariant[];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
