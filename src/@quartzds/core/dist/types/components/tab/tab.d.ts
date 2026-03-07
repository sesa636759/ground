import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Importance, Size, Status } from '../shared';
export type Action = 'closable' | 'expandable';
export type Placement = 'bottom' | 'left' | 'right' | 'top';
export type TagStatus = Status | 'neutral';
export type IndicatorPosition = 'block-end' | 'block-start' | 'inline-end' | 'inline-start';
/**
 * <qds-tab> is a navigational element that is used in different horizontal or vertical navigation bars
 * (Main Navigation, secondary navigation, Tab bar, etc.)
 * as trigger points for opening a menu list or switching content in Tab bar.
 *
 * @see https://quartz.se.com/build/components/tab
 */
export declare class Tab implements ComponentInterface {
    #private;
    /**
     * The name of the action icon to render.
     */
    readonly action?: Action;
    /**
     * Displays an indicator if `true` or the empty string. Otherwise, displays a
     * counter badge if a number or string representing a number is used.
     */
    readonly badge?: number | string | true;
    /**
     * The tab's counter importance.
     */
    readonly badgeCounterImportance?: HTMLQdsBadgeCounterElement['importance'];
    /**
     * The indicator or counter badge's accessible text that will be used by
     * screen readers.
     */
    readonly badgeDescription?: string;
    /**
     * The indicator's status.
     */
    readonly badgeIndicatorStatus?: HTMLQdsBadgeIndicatorElement['status'];
    /**
     * Prevents the tab from being interacted with: it cannot be
     * selected or focused.
     */
    readonly disabled?: boolean;
    /**
     * The name of a registered icon library.
     */
    readonly iconLibrary: string;
    /**
     * The name of the icon to render.
     *
     * Available names depend on the icon library being used.
     */
    readonly iconName?: string;
    /**
     * Displays the tab in a collapsed state without its text. The text will be
     * displayed in a tooltip instead.
     *
     * This property has no effect if the tab does not have an icon set.
     */
    readonly iconOnly: boolean;
    /**
     * The tab's importance.
     */
    readonly importance?: Importance;
    /**
     * The tab's indicator position.
     */
    readonly indicatorPosition?: IndicatorPosition;
    /**
     * The tab panel element associated with this tab. The `panel` specified
     * can be any of the following:
     *
     * - A CSS selector string
     * - A reference to an [`Element`][]
     * - A function returning a reference to an [`Element`][] or a CSS selector
     * string
     *
     * [`Element`]: https://developer.mozilla.org/docs/Web/API/Element
     */
    readonly panel: Element | string | (() => Element | string);
    /**
     * The tag icon's accessible text that will be used by
     * screen readers.
     */
    readonly tagIconDescription?: string;
    /**
     * The name of the tab's tag icon to render.
     *
     * Available names depend on the icon library being used.
     */
    readonly tagIconName?: string;
    /**
     * The name of a registered icon library.
     */
    readonly tagIconLibrary: string;
    /**
     * The tab's tag importance.
     */
    readonly tagImportance?: HTMLQdsTagElement['importance'];
    /**
     * The tab's tag size.
     */
    readonly tagSize?: Size;
    /**
     * The tab's tag status.
     */
    readonly tagStatus?: Status;
    /**
     * The tab's tag text.
     */
    readonly tagText?: string;
    /**
     * Whether or not the tab is selected.
     */
    selected: boolean;
    /**
     * The tab's size.
     */
    readonly size?: Size;
    /**
     * Text to display for the subtitle.
     */
    readonly subtitle?: string;
    /**
     * Primary text to display.
     */
    readonly text: string;
    /**
     * When set, the underlying tab will be rendered as an `<a>` with this
     * `href` instead of a `<button>`.
     *
     * This property has no effect if the tab has an `action`.
     *
     * @webnative
     */
    readonly href?: string;
    /**
     * Emitted when the tab is closed.
     */
    private readonly closeEmitter;
    /**
     * Emitted when the tab loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when the tab gains focus.
     */
    private readonly focusEmitter;
    private readonly host;
    private tabIndex?;
    private isIndicatorOnTop;
    protected panelChanged(): void;
    protected onClick(event: MouseEvent): void;
    protected tabindexChanged(newValue: string): void;
    componentWillLoad(): void;
    componentWillRender(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
//# sourceMappingURL=tab.d.ts.map