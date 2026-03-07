import type { Components, JSX } from "../dist/types/components";

interface QdsListItem extends Components.QdsListItem, HTMLElement {}
export const QdsListItem: {
    prototype: QdsListItem;
    new (): QdsListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
