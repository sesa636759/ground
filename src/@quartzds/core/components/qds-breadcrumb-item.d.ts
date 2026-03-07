import type { Components, JSX } from "../dist/types/components";

interface QdsBreadcrumbItem extends Components.QdsBreadcrumbItem, HTMLElement {}
export const QdsBreadcrumbItem: {
    prototype: QdsBreadcrumbItem;
    new (): QdsBreadcrumbItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
