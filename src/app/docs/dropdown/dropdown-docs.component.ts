import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-dropdown-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dropdown-docs.component.html',
  styleUrls: ['./dropdown-docs.component.scss'],
})
export class DropdownDocsComponent {
  dropdownConfig = COMPONENT_CONFIGS['dropdown'];

  standardOptions = JSON.stringify([
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
  ]);

  iconOptions = JSON.stringify([
    { value: 'home', label: 'Home', icon: '🏠' },
    { value: 'user', label: 'User', icon: '👤' },
    { value: 'settings', label: 'Settings', icon: '⚙️' },
    { value: 'email', label: 'Email', icon: '✉️' },
  ]);

  cascadingOptions = JSON.stringify([
    {
      value: 'electronics',
      label: '⚡ Electronics',
      children: [
        {
          value: 'computers',
          label: '💻 Computers',
          children: [
            { value: 'laptops', label: 'Laptops' },
            { value: 'desktops', label: 'Desktops' },
          ],
        },
        {
          value: 'phones',
          label: '📱 Phones',
          children: [{ value: 'smartphones', label: 'Smartphones' }],
        },
      ],
    },
    {
      value: 'clothing',
      label: '👕 Clothing',
      children: [
        { value: 'mens', label: "Men's Wear" },
        { value: 'womens', label: "Women's Wear" },
      ],
    },
  ]);

  multiSelectOptions = JSON.stringify([
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'js', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
  ]);
}
