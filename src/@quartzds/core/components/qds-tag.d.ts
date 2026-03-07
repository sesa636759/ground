import type { Components, JSX } from "../dist/types/components";

interface QdsTag extends Components.QdsTag, HTMLElement {}
export const QdsTag: {
    prototype: QdsTag;
    new (): QdsTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
