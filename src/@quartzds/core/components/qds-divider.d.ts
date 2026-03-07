import type { Components, JSX } from "../dist/types/components";

interface QdsDivider extends Components.QdsDivider, HTMLElement {}
export const QdsDivider: {
    prototype: QdsDivider;
    new (): QdsDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
