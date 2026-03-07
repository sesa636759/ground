import type { Components, JSX } from "../dist/types/components";

interface QdsNavListItem extends Components.QdsNavListItem, HTMLElement {}
export const QdsNavListItem: {
    prototype: QdsNavListItem;
    new (): QdsNavListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
