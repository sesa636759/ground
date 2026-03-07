import type { ComponentInterface } from '../../stencil-public-runtime';
import type { LiteralUnion } from 'type-fest';
import type { Importance, Size } from '../shared';
export type Action = 'dropdown-close' | 'dropdown' | 'next';
export type ButtonImportance = Importance | 'destructive' | 'subdued-destructive';
export type ButtonSize = Size | 'hero';
export type ButtonTarget = '_blank' | '_parent' | '_self' | '_top';
export type ButtonType = 'button' | 'reset' | 'submit';
export type FormMethod = 'dialog' | 'get' | 'post';
/**
 * The `<qds-button>` element is an interactive element activated by a user
 * with a mouse, keyboard, finger, voice command, or other assistive technology.
 * Once activated, it then performs a programmable action, such as submitting a
 * [form](https://developer.mozilla.org/docs/Learn/Forms)
 * or opening a dialog.
 *
 * @see https://quartz.se.com/build/components/button
 */
export declare class Button implements ComponentInterface {
    #private;
    /**
     * The name of the action icon to render.
     */
    readonly action?: Action;
    /**
     * Displays an indicator if `true` or the empty string. Otherwise, displays a
     * counter badge if a number or string representing a number is used.
     *
     * @webnative
     */
    readonly badge?: number | string | true;
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
     * The button's importance.
     */
    readonly importance?: ButtonImportance;
    /**
     * The button's size.
     */
    readonly size?: Size | 'hero';
    /**
     * The button's text.
     */
    readonly text: string;
    /**
     * Sets if button is icon only.
     */
    readonly iconOnly: boolean;
    /**
     * Prevents the button from being interacted with: it cannot be pressed or
     * focused.
     *
     * @webnative
     */
    readonly disabled?: boolean;
    /**
     * Tells the browser to download the linked file as this filename. Only used
     * when `href` is set.
     *
     * @webnative
     */
    readonly download?: string;
    /**
     * The [`<form>`][] element to associate the button with (its form owner).
     *
     * The value of this attribute must be the id of a `<form>` in the same
     * document. If this attribute is not set, the `<qds-button>` is associated
     * with its ancestor `<form>` element, if any.
     *
     * This attribute lets you associate `<qds-button>` elements to `<form>`s
     * anywhere in the document, not just inside a `<form>`. It can also override
     * an ancestor `<form>` element.
     *
     * [`<form>`]: https://developer.mozilla.org/docs/Web/HTML/Element/form
     *
     * @readonly
     * @webnative
     */
    readonly form: ElementInternals['form'] | string;
    /**
     * The URL that processes the information submitted by the button. Overrides
     * the [`action`](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formaction)
     * attribute of the button's form owner. Does nothing if there is no form owner.
     *
     * @webnative
     */
    readonly formAction?: string;
    /**
     * If the button is a submit button (it's inside/associated with a `<form>`
     * and doesn't have `type="button"`), this attribute specifies the
     * [HTTP method][] used to submit the form, or `dialog` which won't submit
     * the form. Possible values:
     *
     * - `get`: The form data are appended to the form's action URL, with a ? as
     * a separator, and the resulting URL is sent to the server. Use this method
     * when the form has no side effects, like search forms.
     * - `post`: The data from the form are included in the body of the HTTP
     * request when sent to the server. Use when the form contains information
     * that shouldn't be public, like login credentials.
     * - `dialog`: Close the dialog box in which the button finds itself, if any,
     * and do not submit the button's form owner.
     *
     * If specified, this attribute overrides the `method` attribute of the
     * button's form owner.
     *
     * [HTTP method]: https://developer.mozilla.org/docs/Web/HTTP/Methods
     *
     * @webnative
     */
    readonly formMethod?: FormMethod;
    /**
     * If the button is a submit button, this attribute specifies that the form
     * is not to be
     * [validated](https://developer.mozilla.org/docs/Learn/Forms/Form_validation)
     * when it is submitted. If this attribute is specified, it overrides the
     * [`novalidate`](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-novalidate)
     * attribute of the button's form owner.
     *
     * @webnative
     */
    readonly formNoValidate: boolean;
    /**
     * If the button is a submit button, this attribute is an author-defined name
     * or standardized, underscore-prefixed keyword indicating where to display
     * the response from submitting the form. This is the `name` of, or keyword
     * for, a browsing context (a tab, window, or
     * [`<iframe>`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe)).
     * If this attribute is specified, it overrides the
     * [`target`](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-target)
     * attribute of the button's form owner. The following keywords have special
     * meanings:
     *
     * - `_blank`: Load the response into a new unnamed browsing context — usually
     * a new tab or window, depending on the user's browser settings.
     * - `_parent`: Load the response into the parent browsing context of the
     * current one. If there is no parent, this option behaves the same way as
     * `_self`.
     * - `_self`: Load the response into the same browsing context as the current
     * one.
     * - `_top`: Load the response into the top-level browsing context (that is,
     * the browsing context that is an ancestor of the current one, and has no
     * parent). If there is no parent, this option behaves the same way as
     * `_self`.
     *
     * @webnative
     */
    readonly formTarget: LiteralUnion<ButtonTarget, string>;
    /**
     * When set, the underlying button will be rendered as an `<a>` with this
     * `href` instead of a `<button>`.
     *
     * @webnative
     */
    readonly href?: string;
    /**
     * Returns a list of the [`<label>`][] elements associated with the
     * `qds-button` element.
     *
     * [`<label>`]: https://developer.mozilla.org/docs/Web/HTML/Element/label
     *
     * @readonly
     * @webnative
     */
    readonly labels: ElementInternals['labels'];
    /**
     * When href is define and the button act as a link (`<a>`), the `rel` will be added to the element.
     *
     * @webnative
     */
    readonly rel?: string;
    /**
     * The name of the button, submitted as a pair with the button's `value` as
     * part of the form data, when that button is used to submit the form.
     * Ignored when `href` is set.
     *
     * @webnative
     */
    readonly name?: string;
    /**
     * Where to display the linked URL, as the name for a browsing context (a
     * tab, window, or
     * [`<iframe>`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe).
     * The following keywords have special meanings for where to load the URL:
     *
     * - `_blank`: usually a new tab, but users can configure browsers to open a new
     *   window instead.
     * - `_parent`: the parent browsing context of the current one. If no parent,
     *   behaves as `_self`.
     * - `_self`: the current browsing context.
     * - `_top`: the topmost browsing context (the "highest" context that's an
     *   ancestor of the current one). If no ancestors, behaves as `_self`.
     *
     * @webnative
     */
    readonly target?: LiteralUnion<ButtonTarget, string>;
    /**
     * The type of button.
     *
     * `button`: The button has no default behavior, and does nothing when
     * pressed by default. It can have client-side scripts listen to the
     * element's events, which are triggered when the events occur.
     *
     * `submit`: The button submits the form data to the server. This is the
     * default if the attribute is not specified for buttons associated with a
     * `<form>`, or if the attribute is an empty or invalid value.
     *
     * `reset`: The button resets all the controls to their initial values.
     *
     * @webnative
     */
    readonly type?: ButtonType;
    /**
     * The error message that would be shown to the user if the `<qds-button>`
     * was to be checked for validity.
     *
     * @readonly
     * @webnative
     */
    readonly validationMessage: ElementInternals['validationMessage'];
    /**
     * The [`ValidityState`][] object for this `<qds-button>`.
     *
     * [`ValidityState`]: https://developer.mozilla.org/docs/Web/API/ValidityState
     *
     * @readonly
     * @webnative
     */
    readonly validity: ElementInternals['validity'];
    /**
     * Defines the value associated with the button's `name` when it's submitted
     * with the form data. This value is passed to the server in params when the
     * form is submitted using this button. Ignored when `href` is set.
     *
     * @webnative
     */
    readonly value?: string;
    /**
     * True if `<qds-button>` will be validated when the form is submitted; false
     * otherwise.
     *
     * @readonly
     * @webnative
     */
    readonly willValidate: ElementInternals['willValidate'];
    /**
     * Emitted when the button loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when the button gains focus.
     */
    private readonly focusEmitter;
    private readonly host;
    private tabIndex?;
    private tooltip;
    private readonly internals;
    protected onClick(event: MouseEvent): void;
    protected disabledChanged(): void;
    protected tabindexChanged(newValue: string): void;
    protected textChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
    checkValidity: ElementInternals['checkValidity'];
    reportValidity: ElementInternals['reportValidity'];
    setCustomValidity: HTMLButtonElement['setCustomValidity'];
}
//# sourceMappingURL=button.d.ts.map