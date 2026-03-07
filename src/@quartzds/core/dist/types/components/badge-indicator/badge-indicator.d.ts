import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Size, Status } from '../shared';
export type BadgeIndicatorSize = Size | 'hero';
export type BadgeIndicatorStatus = Status | 'neutral';
/**
 * The `<qds-badge-indicator>` element is a small, rounded UI element used to
 * display status indicators. It is designed to draw the user's eye to
 * important or dynamic content by providing a visual cue that an event has
 * occurred or is waiting to be addressed.
 */
export declare class BadgeIndicator implements ComponentInterface {
    #private;
    /**
     * Adds accessible text to the qds-badge-indicator that will be used by
     * screen readers.
     *
     * @example
     * <qds-badge-indicator description="success"></qds-badge-indicator>
     * // This qds-badge-indicator will be read by screen readers as "success"
     */
    readonly description?: string;
    /**
     * The badge indicator's size.
     */
    readonly size?: BadgeIndicatorSize;
    /**
     * The badge indicator's status.
     */
    readonly status?: BadgeIndicatorStatus;
    /**
     * Shows a stroke ring around the badge indicator for better visibility.
     */
    readonly strokeRing: boolean;
    render(): any;
}
//# sourceMappingURL=badge-indicator.d.ts.map