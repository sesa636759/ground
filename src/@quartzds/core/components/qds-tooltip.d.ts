import type { Components, JSX } from "../dist/types/components";

interface QdsTooltip extends Components.QdsTooltip, HTMLElement {}
export const QdsTooltip: {
    prototype: QdsTooltip;
    new (): QdsTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
