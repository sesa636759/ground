import type { Components, JSX } from "../dist/types/components";

interface QdsIcon extends Components.QdsIcon, HTMLElement {}
export const QdsIcon: {
    prototype: QdsIcon;
    new (): QdsIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
