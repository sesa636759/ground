import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Importance, Size, Status } from '../shared';
export type TagStatus = Status | 'neutral';
/**
 * The `<qds-tag>` element is a static descriptor used for items that need to
 * be labeled, categorized, or organized using keywords that describe them.
 *
 * @see https://quartz.se.com/build/components/tag
 */
export declare class Tag implements ComponentInterface {
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
     * The tag's importance.
     */
    readonly importance?: Importance;
    /**
     * The tag's status.
     */
    readonly status?: TagStatus;
    /**
     * The tag's size.
     */
    readonly size?: Size;
    /**
     * The tag's text.
     */
    readonly text?: string;
    /**
     * Provides a text description of the icon for screen readers.
     */
    readonly iconDescription?: string;
    /**
     * Displays an indicator if `true`.
     */
    readonly badge?: boolean;
    /**
     * The indicator badge's accessible text that will be used by
     * screen readers.
     */
    readonly badgeDescription?: string;
    private readonly host;
    componentWillLoad(): void;
    render(): any;
}
//# sourceMappingURL=tag.d.ts.map