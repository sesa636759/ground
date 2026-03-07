import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Size } from '../shared';
export type Destination = 'navigation';
export type ListAction = 'multiselect' | 'reorder';
export type Divider = 'hide' | 'indent';
/**
 *
 *
 * @see https://quartz.se.com/build/components/list-item
 */
export declare class ListItem implements ComponentInterface {
    #private;
    /**
     * The destination action that the list item denotes through its rightmost icon.
     */
    readonly destination?: Destination;
    /**
     * Prevents the list item from being interacted with: it cannot be selected
     * or focused.
     */
    readonly disabled: boolean;
    /**
     * Control how to display the bottom divider line.
     *
     * By default, the divider is visible and uses the full width of the list item.
     *
     * Use the `hide` value to hide the divider completely (useful with multiselect).
     *
     * Use the `indent` value to align the left end of the divider to the icon/text (useful on mobile).
     *
     * **Note**: the divider is automatically hidden on the last list item in the parent container.
     */
    readonly divider?: Divider;
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
     * Text to display for the kicker.
     */
    readonly kicker?: string;
    /**
     * The type of list-level action that the list item supports
     */
    readonly listAction?: ListAction;
    /**
     * The list items's size.
     */
    readonly size?: Size;
    /**
     * Whether or not the list item is checked when `list-action="multiselect"`
     */
    checked?: boolean;
    /**
     * Whether or not the list item is selected.
     */
    selected?: boolean;
    /**
     * Sets the list item to an indeterminate state, only when `list-action="indeterminate"`.
     * This is usually applied to items that represent a "select all/none" behavior when associated
     * items have a mix of selected and unselected states.
     *
     * @webnative
     */
    indeterminate?: boolean;
    /**
     * The primary text of the list item.
     */
    readonly text: string;
    /**
     * Text to display below the primary text.
     */
    readonly subtitle?: string;
    /**
     * Emitted when the list item loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when a change to the checkbox's state is committed by the user.
     */
    private readonly changeEmitter;
    /**
     * Emitted when the list item gains focus.
     */
    private readonly focusEmitter;
    private readonly host;
    private tabIndex?;
    private inheritedAttributes;
    protected onClick(event: MouseEvent): void;
    protected tabindexChanged(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
//# sourceMappingURL=list-item.d.ts.map