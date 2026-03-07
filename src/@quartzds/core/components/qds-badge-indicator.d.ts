import type { Components, JSX } from "../dist/types/components";

interface QdsBadgeIndicator extends Components.QdsBadgeIndicator, HTMLElement {}
export const QdsBadgeIndicator: {
    prototype: QdsBadgeIndicator;
    new (): QdsBadgeIndicator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
