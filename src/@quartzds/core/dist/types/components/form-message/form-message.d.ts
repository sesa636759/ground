import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Size, Status } from '../shared';
/**
 * `<qds-form-message>` elements represent messages for a form field in a user
 * interface.
 *
 * @see https://quartz.se.com/build/components/form-message
 */
export declare class FormMessage implements ComponentInterface {
    #private;
    /**
     * Adds vertical margin to the form message for alignment.
     *
     * This is useful when creating inline layouts so that the first lines have
     * the correct vertical centering.
     */
    readonly inline: boolean;
    /**
     * The form message's size.
     */
    readonly size?: Size;
    /**
     * The form message's status.
     */
    readonly status?: Status;
    /**
     * Adds accessible text to the icon's form message that will be used by screen readers.
     *
     * @example
     * <qds-form-message status-description="Error" text="Password is required."></qds-form-message>
     * // This form message will be read by screen readers as "Error Password is required."
     */
    readonly statusDescription?: string;
    /**
     * The form message's text.
     */
    readonly text?: string;
    private readonly host;
    componentWillLoad(): void;
    render(): any;
}
//# sourceMappingURL=form-message.d.ts.map