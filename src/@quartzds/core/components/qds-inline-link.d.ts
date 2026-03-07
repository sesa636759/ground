import type { Components, JSX } from "../dist/types/components";

interface QdsInlineLink extends Components.QdsInlineLink, HTMLElement {}
export const QdsInlineLink: {
    prototype: QdsInlineLink;
    new (): QdsInlineLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
