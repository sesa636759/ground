import type { Components, JSX } from "../dist/types/components";

interface QdsTableHead extends Components.QdsTableHead, HTMLElement {}
export const QdsTableHead: {
    prototype: QdsTableHead;
    new (): QdsTableHead;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
