import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Size } from '../shared';
/**
 *
 *
 * @see https://quartz.se.com/build/components/nav-list-item
 */
export declare class NavListItem implements ComponentInterface {
    #private;
    /**
     * Displays the navigation list item in a collapsed state without its text.
     * The text will be displayed in a tooltip instead.
     *
     * This property has no effect if the navigation list item does not have an
     * icon set.
     */
    readonly collapsed: boolean;
    /**
     * Prevents the navigation list item from being interacted with: it cannot be
     * selected or focused.
     */
    readonly disabled: boolean;
    /**
     * The name of the icon to render.
     *
     * Available names depend on the icon library being used.
     */
    readonly iconName?: string;
    /**
     * The name of a registered icon library.
     */
    readonly iconLibrary: string;
    /**
     * The navigation list items's size.
     */
    readonly size?: Size;
    /**
     * Whether or not the navigation list item is selected.
     */
    readonly selected: boolean;
    /**
     * Text to display for the subtext.
     */
    readonly subtext?: string;
    /**
     * Primary text to display.
     */
    readonly text: string;
    /**
     * Emitted when the navigation list item loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when the navigation list item gains focus.
     */
    private readonly focusEmitter;
    private readonly host;
    private tabIndex?;
    private inheritedAttributes;
    private li?;
    protected onClick(event: MouseEvent): void;
    protected tabindexChanged(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
    private renderText;
}
//# sourceMappingURL=nav-list-item.d.ts.map