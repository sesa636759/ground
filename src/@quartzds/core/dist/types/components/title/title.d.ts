import type { ComponentInterface } from '../../stencil-public-runtime';
export type Layer = 'accessory' | 'main' | 'navigation' | 'panel' | 'popup';
export type Level = 'root' | 'section' | 'subsection';
export type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TitleVariant = 'web-main-section-display' | 'web-main-section-hero' | 'web-main-section-promo' | 'web-main-subsection-card';
export type Alignment = 'center' | 'end' | 'start';
/**
 * @slot Content to display for the title.
 * @see https://quartz.se.com/build/components/title
 */
export declare class Title implements ComponentInterface {
    #private;
    /**
     * The alignment of the title.
     */
    readonly alignment?: Alignment;
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
    readonly layer?: Layer;
    readonly level?: Level;
    /**
     * Text to display for the subtitle.
     */
    readonly subtitle?: string;
    /**
     * HTML tag to use to render the title.
     */
    readonly tag?: Tag;
    /**
     * The title's variant.
     */
    readonly variant?: TitleVariant;
    private readonly host;
    componentWillLoad(): void;
    render(): any;
}
//# sourceMappingURL=title.d.ts.map