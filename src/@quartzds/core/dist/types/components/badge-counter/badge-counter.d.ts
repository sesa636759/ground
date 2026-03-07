import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Importance, Size } from '../shared';
export type BadgeCounterImportance = Importance | 'destructive' | 'subdued-destructive';
export type BadgeCounterSize = Size | 'hero';
/**
 * The `<qds-badge-counter>` element is a small, rounded UI element used to
 * display numerical values or counts. It is designed to draw the user's eye to
 * important or dynamic content by providing a visual cue that a countable
 * event or item has occurred or is waiting to be addressed.
 */
export declare class BadgeCounter implements ComponentInterface {
    #private;
    /**
     * Adds accessible text to the qds-badge-counter that will be used by screen
     * readers.
     *
     * @example
     * <qds-badge-counter value={2} description="new notifications"></qds-badge-counter>
     * // This qds-badge-counter will be read by screen readers as "two new notifications"
     */
    readonly description?: string;
    /**
     * The badge counter's importance.
     */
    readonly importance?: BadgeCounterImportance;
    /**
     * The badge counter's size.
     */
    readonly size?: BadgeCounterSize;
    /**
     * Shows a stroke ring around the component for better visibility
     */
    readonly strokeRing: boolean;
    /**
     * The badge-counter's value.
     */
    readonly value: number | string;
    render(): any;
}
//# sourceMappingURL=badge-counter.d.ts.map