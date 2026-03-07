import type { Components, JSX } from "../dist/types/components";

interface QdsTabbar extends Components.QdsTabbar, HTMLElement {}
export const QdsTabbar: {
    prototype: QdsTabbar;
    new (): QdsTabbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
