import type { ComponentInterface } from '../../stencil-public-runtime';
export type Layer = 'accessory' | 'main' | 'panel' | 'popup';
export type Level = 'root' | 'section' | 'subsection';
export type Orientation = 'horizontal' | 'vertical';
/**
 * `<qds-tabbar>` is the component that facilitates navigation between the groups
 * of related content within the page.
 * It allows users to switch between groups by clicking on Tabs without going to another page.
 */
export declare class Tabbar implements ComponentInterface {
    #private;
    /**
     * The tabbar's layer.
     */
    layer?: Layer;
    /**
     * The tabbar's level.
     */
    level?: Level;
    /**
     * The tabbar's orientation.
     */
    orientation?: Orientation;
    /**
     * the tablist Description
     */
    readonly tablistDescription?: string;
    /**
     * Emitted when the user selects the tab.
     */
    private readonly showEmitter;
    /**
     * Emitted when the user selects the tab.
     */
    private readonly hideEmitter;
    private readonly host;
    private disableEndArrow;
    private disableStartArrow;
    private activeTab?;
    protected windowResize(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
//# sourceMappingURL=tabbar.d.ts.map