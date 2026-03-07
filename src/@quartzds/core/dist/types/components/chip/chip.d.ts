import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Value } from '../controls';
import type { Size } from '../shared';
export type ChipType = 'closable' | 'selectable';
/**
 * `<qds-chip>` elements are interactive elements that represent selections.
 * Chips allow users to make a selection from a list of options or display
 * items like filters or tags.
 *
 * @see https://quartz.se.com/build/components/chip
 */
export declare class Chip implements ComponentInterface {
    #private;
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
     * The chip's size.
     */
    readonly size?: Size;
    /**
     * The chip's type.
     */
    readonly type?: ChipType;
    /**
     * The chip's text.
     */
    readonly text?: string;
    /**
     * Sets the selectable chip's state.
     *
     * @webnative
     */
    checked?: boolean;
    /**
     * The [`<form>`](https://developer.mozilla.org/docs/Web/HTML/Element/form)
     * element to associate the chip with (its form owner).
     *
     * The value of this property must be the id of a `<form>` in the same
     * document. If this property is not set, the `<qds-chip>` is associated
     * with its ancestor `<form>` element, if any.
     *
     * This property lets you associate `<qds-chip>` elements to `<form>`s
     * anywhere in the document, not just inside a `<form>`. It can also override
     *an ancestor `<form>` element.
     *
     * @webnative
     */
    readonly form: ElementInternals['form'] | string;
    /**
     * Prevents the chip from being interacted with: it cannot be pressed or
     * focused.
     *
     */
    readonly disabled?: boolean;
    /**
     * The name of the chip, which is submitted with the form data.
     *
     * @webnative
     */
    readonly name?: string;
    /**
     * The value of the chip, submitted as a name/value pair with form data.
     *
     * @webnative
     */
    readonly value?: Value;
    /**
     * Emitted when the chip loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when the chip gains focus.
     */
    private readonly focusEmitter;
    /**
     * Emitted when the chip is closed.
     */
    private readonly closeEmitter;
    /**
     * Emitted when a change to the selectable chip's state is committed by the user.
     */
    private readonly changeEmitter;
    private readonly host;
    private readonly internals;
    private isPressed;
    private isSelected;
    private tabIndex?;
    private tooltip;
    protected onClick(event: MouseEvent): void;
    protected handleKeyDown(event: KeyboardEvent): void;
    protected handleKeyUp(event: KeyboardEvent): void;
    protected checkedChanged(): void;
    protected disabledChanged(): void;
    protected tabindexChanged(newValue: string): void;
    protected valueChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
//# sourceMappingURL=chip.d.ts.map