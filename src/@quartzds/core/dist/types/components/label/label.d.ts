import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Size } from '../shared';
/**
 * `<qds-label>` elements represent a caption for an item in a user interface.
 *
 * @see https://quartz.se.com/build/components/label
 */
export declare class Label implements ComponentInterface {
    #private;
    /**
     * Adds vertical margin to the label for alignment.
     *
     * This is useful when creating inline layouts so that the first lines have
     * the correct vertical centering.
     */
    readonly inline: boolean;
    /**
     * Specify the labelled item as required by appending a red asterisk (*).
     */
    readonly required: boolean;
    /**
     * The label's size.
     */
    readonly size?: Size;
    /**
     * The label's text.
     */
    readonly text?: string;
    private tooltip;
    protected textChanged(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
//# sourceMappingURL=label.d.ts.map