import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Value } from '../controls';
import type { Size } from '../shared';
/**
 * `<qds-radio>` elements are rendered as circles that are filled when
 * selected. They are generally used in **radio groups** — collections of radio
 * buttons describing a set of related options.
 *
 * Only one radio button in a given radio group can be selected at the same
 * time.
 *
 * @see https://quartz.se.com/build/components/radio
 */
export declare class Radio implements ComponentInterface {
    #private;
    /**
     * Adds vertical margin to the radio for alignment.
     *
     * This is useful when creating inline layouts so that the first lines have
     * the correct vertical centering.
     */
    readonly inline: boolean;
    /**
     * The radio button's size.
     */
    readonly size?: Size;
    /**
     * The radio button's text.
     */
    readonly text?: string;
    /**
     * Sets the radio button's state.
     *
     * @webnative
     */
    checked?: boolean;
    /**
     * Prevents the radio button from being interacted with: it cannot be pressed
     * or focused.
     *
     * @webnative
     */
    readonly disabled?: boolean;
    /**
     * The [`<form>`](https://developer.mozilla.org/docs/Web/HTML/Element/form)
     * element to associate the radio button with (its form owner).
     *
     * The value of this property must be the id of a `<form>` in the same
     * document. If this property is not set, the `<qds-radio>` is associated
     * with its ancestor `<form>` element, if any.
     *
     * This property lets you associate `<qds-radio>` elements to `<form>`s
     * anywhere in the document, not just inside a `<form>`. It can also override
     * an ancestor `<form>` element.
     *
     * @webnative
     */
    readonly form?: string;
    /**
     * Specify the radio group this radio button belongs to.
     *
     * Once a radio group is established, selecting any radio button in that
     * group automatically deselects any currently-selected radio button in the
     * same group.
     *
     * @webnative
     */
    readonly name?: string;
    /**
     * Specify the group the radio button belongs to as required.
     *
     * If any radio button in a same-named group of radio buttons has the
     * `required` attribute, a radio button in that group must be checked,
     * although it doesn't have to be the one with the attribute applied.
     *
     * @webnative
     */
    readonly required?: boolean;
    /**
     * The value of the radio button, submitted as a name/value pair with form
     * data.
     *
     * @webnative
     */
    value?: Value;
    /**
     * Emitted when the radio button loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when the radio button is checked by the user.
     */
    private readonly changeEmitter;
    /**
     * Emitted when the radio button gains focus.
     */
    private readonly focusEmitter;
    private readonly host;
    private tabIndex?;
    protected onClick(event: MouseEvent): void;
    protected tabindexChanged(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
//# sourceMappingURL=radio.d.ts.map