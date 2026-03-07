import type { Components, JSX } from "../dist/types/components";

interface QdsStandaloneLink extends Components.QdsStandaloneLink, HTMLElement {}
export const QdsStandaloneLink: {
    prototype: QdsStandaloneLink;
    new (): QdsStandaloneLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
