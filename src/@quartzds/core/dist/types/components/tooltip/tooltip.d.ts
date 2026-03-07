import type { AutoUpdateOptions, DetectOverflowOptions, FlipOptions, Placement, ReferenceElement, ShiftOptions, Strategy } from '@floating-ui/dom';
import type { ComponentInterface } from '../../stencil-public-runtime';
import type { OffsetOptions } from '../../helpers';
export type TriggerEvent = Extract<keyof GlobalEventHandlersEventMap, 'click' | 'focus' | 'focusin' | 'pointerenter'>;
/**
 * @slot Content to display in the dropdown.
 * @see https://quartz.se.com/build/components/tooltip
 */
export declare class Tooltip implements ComponentInterface {
    #private;
    /**
     * Options to pass to Floating UI's
     * [`autoUpdate()` function](https://floating-ui.com/docs/autoUpdate).
     *
     * @see https://floating-ui.com/docs/autoupdate#options
     */
    readonly autoUpdateOptions?: AutoUpdateOptions;
    /**
     * Prevents the tooltip from being shown by user interaction. The tooltip can
     * still be displayed by calling the `show()` method.
     */
    readonly disabled: boolean;
    /**
     * Options to pass to Floating UI's
     * [`flip` middleware](https://floating-ui.com/docs/flip).
     *
     * The [`crossAxis` option](https://floating-ui.com/docs/flip#crossaxis) is
     * set to the value of the `noShift` property by default for interoperability
     * with the [`shift` middleware](https://floating-ui.com/docs/shift).
     *
     * @see https://floating-ui.com/docs/flip#options
     */
    readonly flipOptions?: Partial<DetectOverflowOptions & FlipOptions>;
    /**
     * Disable Floating UI's
     * [`flip` middleware](https://floating-ui.com/docs/flip).
     */
    readonly noFlip: boolean;
    /**
     * Disable Floating UI's
     * [`shift` middleware](https://floating-ui.com/docs/shift).
     */
    readonly noShift: boolean;
    /**
     * Options to pass to Floating UI's
     * [`offset` middleware](https://floating-ui.com/docs/offset).
     *
     * The [`mainAxis` option](https://floating-ui.com/docs/offset#mainaxis) is
     * not supported.
     *
     * @see https://floating-ui.com/docs/offset#options
     */
    readonly offsetOptions?: OffsetOptions;
    /**
     * Where to place the tooltip relative to the `target`.
     *
     * @see https://floating-ui.com/docs/tutorial#placements
     */
    readonly placement: Placement;
    /**
     * Options to pass to Floating UI's
     * [`shift` middleware](https://floating-ui.com/docs/shift).
     *
     * @see https://floating-ui.com/docs/shift#options
     */
    readonly shiftOptions?: Partial<DetectOverflowOptions & ShiftOptions>;
    /**
     * The CSS position strategy to use.
     *
     * @see https://floating-ui.com/docs/computeposition#strategy
     */
    readonly strategy?: Strategy;
    /**
     * The trigger element that will trigger the tooltip. The target specified
     * can be any of the following:
     *
     * - A CSS selector string
     * - A reference to an [`Element`][] or [Virtual Element][]
     * - A function returning a reference to an [`Element`][],
     * [Virtual Element][], or a CSS selector string
     *
     * [`Element`]: https://developer.mozilla.org/docs/Web/API/Element
     * [Virtual Element]: https://floating-ui.com/docs/virtual-elements
     */
    readonly target?: ReferenceElement | string | (() => ReferenceElement | string);
    /**
     * Determines the events that cause the tooltip to show. Multiple event names
     * are separated by spaces.
     */
    readonly trigger?: TriggerEvent[] | string;
    /**
     * Emitted when the tooltip is closed.
     */
    private readonly closeEmitter;
    private readonly host;
    private hostPosition?;
    private hostTransform?;
    private open;
    private middleware?;
    private side;
    private aStyles?;
    private aShape;
    private aViewbox;
    private aHeight;
    private aGap;
    /**
     * Show the tooltip.
     */
    show(): Promise<void>;
    /**
     * Close the tooltip.
     */
    close(): Promise<void>;
    /**
     * Update the tooltip's arrow.
     *
     * This method should typically be called when the Quartz platform was
     * changed.
     */
    updateArrow(): Promise<void>;
    protected updateMiddleware(): Promise<void>;
    protected updateAriaHasPopup(): void;
    protected setAriaExpanded(): void;
    private updateReferenceElement;
    private updateEventListeners;
    private updatePosition;
    private startAutoUpdate;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    render(): any;
}
//# sourceMappingURL=tooltip.d.ts.map