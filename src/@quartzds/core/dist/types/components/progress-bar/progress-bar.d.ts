import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Size } from '../shared';
/**
 * The `<qds-progress-bar>` element displays an indicator showing the
 * completion progress of a task.
 *
 * @see https://quartz.se.com/build/components/progress-bar
 */
export declare class ProgressBar implements ComponentInterface {
    #private;
    /**
     * The progress bar's size.
     */
    readonly size?: Size;
    /**
     * Returns a list of the [`<label>`][] elements associated with the
     * `qds-progress-bar` element.
     *
     * [`<label>`]: https://developer.mozilla.org/docs/Web/HTML/Element/label
     *
     * @readonly
     * @webnative
     */
    readonly labels: ElementInternals['labels'];
    /**
     * Specifies how much work the task indicated by the progress bar requires.
     * `max` must have a value greater than 0 and be a valid floating point
     * number.
     *
     * @webnative
     */
    readonly max?: number | string;
    /**
     * Returns the result of dividing the current value (`value`) by the maximum
     * value (`max`); if the progress bar is an indeterminate progress bar, it
     * returns `-1`.
     *
     * @readonly
     * @webnative
     */
    readonly position: number;
    /**
     * Specifies how much of the task has been completed. It must be a valid
     * floating point number between `0` and `max`, or between `0` and `1` if
     * `max` is omitted. If this attribute is not specified, the progress bar is
     * indeterminate; this indicates that an activity is ongoing with no
     * indication of how long it is expected to take.
     *
     * @webnative
     */
    readonly value?: number | string;
    private readonly host;
    private readonly internals;
    private width;
    protected maxChanged(): void;
    protected valueChanged(): void;
    componentWillLoad(): void;
    render(): any;
}
//# sourceMappingURL=progress-bar.d.ts.map