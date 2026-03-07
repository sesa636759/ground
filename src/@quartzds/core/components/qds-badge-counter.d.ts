import type { Components, JSX } from "../dist/types/components";

interface QdsBadgeCounter extends Components.QdsBadgeCounter, HTMLElement {}
export const QdsBadgeCounter: {
    prototype: QdsBadgeCounter;
    new (): QdsBadgeCounter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
