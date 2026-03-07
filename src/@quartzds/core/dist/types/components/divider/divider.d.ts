import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Importance } from '../shared';
/**
 * The `<qds-divider>` element a thematic break between paragraph-level
 * elements: for example, a change of scene in a story, or a shift of topic
 * within a section.
 *
 * Dividers can also be used to group menu items in `<qds-dropdown>` elements.
 *
 * @see https://quartz.se.com/build/components/divider
 */
export declare class Divider implements ComponentInterface {
    #private;
    /**
     * The divider's importance.
     */
    readonly importance?: Importance;
    /**
     * Display the divider in vertical orientation.
     */
    readonly vertical: boolean;
    protected verticalChanged(): void;
    componentWillLoad(): void;
    render(): any;
}
//# sourceMappingURL=divider.d.ts.map