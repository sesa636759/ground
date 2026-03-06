export interface DemoVariant {
  id: string;
  title: string;
  icon?: string;
  description?: string;
  iconLibrary?: string;
}

export abstract class BaseDemoComponent {
  abstract exampleVariants: DemoVariant[];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  get anchorLinks() {
    return JSON.stringify(
      this.exampleVariants.map((v) => ({
        id: v.id,
        label: v.title,
        target: v.id,
        icon: v.icon,
        iconLibrary: v.iconLibrary,
      })),
    );
  }
}
