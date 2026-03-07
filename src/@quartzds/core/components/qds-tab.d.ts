import type { Components, JSX } from "../dist/types/components";

interface QdsTab extends Components.QdsTab, HTMLElement {}
export const QdsTab: {
    prototype: QdsTab;
    new (): QdsTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
