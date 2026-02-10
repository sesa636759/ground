import { Type } from '@angular/core';
import { UiNavigationPlayground } from './ui-navigation.playground';
import { TabsPlayground } from './tabs.playground';
import { CardPlayground } from './card.playground';
import { ButtonPlaygroundComponent } from './button/button-playground.component';
import { AccordionPlaygroundComponent } from './accordion/accordion.playground';

export interface PlaygroundConfig {
  id: string;
  component: Type<any>;
  title: string;
  description: string;
}

export const PLAYGROUNDS: Record<string, PlaygroundConfig> = {
  'ui-navigation': {
    id: 'ui-navigation',
    component: UiNavigationPlayground,
    title: 'UI Navigation',
    description:
      'A flexible navigation component with support for categories, items, badges, and icons.',
  },
  tabs: {
    id: 'tabs',
    component: TabsPlayground,
    title: 'Tabs',
    description:
      'Comprehensive tabs component with multiple variants, orientations, and advanced features.',
  },
  card: {
    id: 'card',
    component: CardPlayground,
    title: 'Card',
    description:
      'Versatile card component with multiple variants, states, and interactive features.',
  },
  button: {
    id: 'button',
    component: ButtonPlaygroundComponent,
    title: 'Button',
    description:
      'Comprehensive button component with multiple variants, sizes, states, and features.',
  },
  accordion: {
    id: 'accordion',
    component: AccordionPlaygroundComponent,
    title: 'Accordion',
    description:
      'Feature-rich accordion with 15+ capabilities including search, drag & drop, nested items, and more.',
  },
  // Add more playgrounds here as they are created
};

export function getPlayground(id: string): PlaygroundConfig | undefined {
  return PLAYGROUNDS[id];
}

export function getAllPlaygrounds(): PlaygroundConfig[] {
  return Object.values(PLAYGROUNDS);
}
