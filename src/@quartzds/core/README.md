<!--
SPDX-FileCopyrightText: © 2024 Schneider Electric

SPDX-License-Identifier: Apache-2.0
-->

# `@quartzds/core`

[![NPM Package][npm-badge]][npm-link]
[![License][license-badge]][license]

The Quartz Core package has the web components that make up the reusable
UI building blocks of the [Quartz design system][]. These components are designed
to be used in traditional frontend view libraries/frameworks (such as React,
Angular, or Vue) or on their own through traditional JavaScript in the browser.

## 💿 Installation

```bash
npm install @quartzds/core
```

## 📖 Usage

### Vanilla HTML

The easiest way to start using the Quartz Core is by adding `link` and `script` tags to the CDN.

First, the fonts:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
/>
```

Next, the platform and theme CSS custom properties:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@quartzds/generic-tokens/core/dist/platform/desktop.css"
/>
<link
  rel="stylesheet"
  href="https://unpkg.com/@quartzds/generic-tokens/core/dist/theme/light.css"
/>
```

Optionally, the dark theme:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@quartzds/generic-tokens/core/dist/theme/dark.css"
/>
```

Finally, bootstrap the components with their styling:

```html
<script type="module">
  import { defineCustomElements } from 'https://unpkg.com/@quartzds/core/loader'
  import {
    setPlatform,
    setTheme,
  } from 'https://unpkg.com/@quartzds/core/components'

  setPlatform('desktop')
  setTheme('light')
  defineCustomElements()
</script>
```

Any Quartz component added to the webpage will automatically load with the
proper platform and theme-specific styling. This includes writing the
component tag directly in HTML or using JavaScript such as
`document.createElement('qds-button')`.

### Framework Bindings

The `@quartzds/core` package can be used in vanilla HTML or JavaScript
without any framework at all. Quartz also has packages that make it easier to
integrate into a framework's ecosystem and patterns:

- [`@quartzds/core-angular`][]
- [`@quartzds/core-react`][]
- [`@quartzds/core-vue`][]

### Custom Elements

Besides the lazy-loading components built by Stencil, this package also
exports each component as a stand-alone custom element from
`@quartzds/core`. Each component extends `HTMLElement` and does not
lazy-load itself. This is useful for projects already using a bundler such as
Webpack or Vite. While all components are available to be imported, the custom
element exports make sure bundlers only import what's used and tree-shake any
unused components.

Below is an example of importing the `qds-button` custom element:

```js
import { defineCustomElementQdsButton } from '@quartzds/core'

defineCustomElementQdsButton()
```

The `defineCustomElementQdsButton` function will automatically define the
component as well as any child component that may be required.

The `qds-button` custom element can also be imported and registered manually:

```js
import { QdsButton } from '@quartzds/core'

customElements.define('qds-button', QdsButton)
```

## ⚖️ License

See the [LICENSE][] file for license rights and limitations.

- Some code borrowed from [Ionic][] is licensed under MIT.
- Some code borrowed from [Shoelace][] is licensed under MIT.

[npm-badge]: https://img.shields.io/npm/v/@quartzds/core?logo=npm
[npm-link]: https://www.npmjs.com/package/@quartzds/core
[license-badge]: https://img.shields.io/npm/l/@quartzds/core?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0ibTIzLjkgOS43LTMuNTQtNy44OS0uMDA1LS4wMWEuNTQyLjU0MiAwIDAgMC0uMDQxLS4wNzZsLS4wMTQtLjAxOGEuNTMzLjUzMyAwIDAgMC0uMTIyLS4xMjJsLS4wMTUtLjAxMWEuNTI4LjUyOCAwIDAgMC0uMDgtLjA0NGwtLjAyNC0uMDA5YS41MjcuNTI3IDAgMCAwLS4wNjctLjAybC0uMDI4LS4wMDdhLjUyNC41MjQgMCAwIDAtLjA5Ni0uMDFoLTYuODVjLTEuMDItMS41Mi0xLjAyLTEuNTQtMiAwaC02Ljg2YS41NDMuNTQzIDAgMCAwLS4wOTYuMDFsLS4wMjguMDA3YS41MTYuNTE2IDAgMCAwLS4wNjcuMDJsLS4wMjQuMDFhLjUzNy41MzcgMCAwIDAtLjA4LjA0M2wtLjAxNS4wMTFhLjUxLjUxIDAgMCAwLS4wNTcuMDQ3bC0uMDIuMDJhLjU0My41NDMgMCAwIDAtLjA0NS4wNTVsLS4wMTQuMDE4YS41MjIuNTIyIDAgMCAwLS4wNDEuMDc1bC0uMDA1LjAxdi4wMDFMLjExNiA5LjcyYS41MzEuNTMxIDAgMCAwLS4wOTYuMzA0YzAgMi4yOCAxLjg2IDQuMTQgNC4xNCA0LjE0czQuMTQtMS44NiA0LjE0LTQuMTRhLjUzLjUzIDAgMCAwLS4wOTYtLjMwNGwtMy4yNS02LjM3IDYuMDctLjAyM3YxOC4yYy0yLjU1LjI5NC03LjAxLjM4MS03IDIuNWgxNmMwLTIuMDMtNC40OC0yLjI3LTctMi41di0xOC4xbDUuNjktLjAyLTIuOTIgNi40OWMwIC4wMDIgMCAuMDAzLS4wMDIuMDA1bC0uMDA2LjAxOGEuNTQ1LjU0NSAwIDAgMC0uMDIzLjA3NWwtLjAwNS4wMmEuNTI0LjUyNCAwIDAgMC0uMDEuMDkydi4wMDhjMCAyLjI4IDEuODYgNC4xNCA0LjE0IDQuMTQgMi4yOCAwIDQuMTQtMS44NiA0LjE0LTQuMTRhLjUyOC41MjggMCAwIDAtLjEyLS4zMzJ6IiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+
[license]: ../../LICENSE
[quartz design system]: https://github.com/quartzds
[`@quartzds/core-angular`]: https://www.npmjs.com/package/@quartzds/core-angular
[`@quartzds/core-react`]: https://www.npmjs.com/package/@quartzds/core-react
[`@quartzds/core-vue`]: https://www.npmjs.com/package/@quartzds/core-vue
[ionic]: https://github.com/ionic-team/ionic-framework
[shoelace]: https://github.com/shoelace-style/shoelace
