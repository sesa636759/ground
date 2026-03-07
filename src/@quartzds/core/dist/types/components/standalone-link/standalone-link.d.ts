import type { ComponentInterface } from '../../stencil-public-runtime';
import type { LiteralUnion } from 'type-fest';
import type { Importance, Size, Target } from '../shared';
/**
 * `<qds-standalone-link>` elements, with their `href` property, create a hyperlink
 * to web pages, files, email addresses, locations in the same page, or
 * anything else a URL can address.
 *
 * Content within each `<qds-standalone-link>` *should* indicate the standalone link's
 * destination. If the `href` property is present, pressing the enter key while
 * focused on the `<qds-standalone-link>` element will activate it.
 *
 * @slot Content to display for the standalone link.
 * @see https://quartz.se.com/build/components/standalone-link
 */
export declare class StandaloneLink implements ComponentInterface {
    #private;
    /**
     * Prevents the standalone link from being interacted with: it cannot be pressed
     * or focused.
     */
    readonly disabled: boolean;
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
     * The standalone link's importance.
     */
    readonly importance?: Importance;
    /**
     * The standalone link's size.
     */
    readonly size?: Size;
    /**
     * Defines if the standalone link will display the visited state.
     */
    readonly visitable: boolean;
    /**
     * Causes the browser to treat the linked URL as a download. Can be used with
     * or without a `filename` value:
     *
     * - Without a value, the browser will suggest a filename/extension,
     * generated from various sources:
     *
     *   - The
     *   [`Content-Disposition`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Content-Disposition)
     *   HTTP header
     *   - The final segment in the URL
     *   [path](https://developer.mozilla.org/docs/Web/API/URL/pathname)
     *   - The
     *   [media type](https://developer.mozilla.org/docs/Glossary/MIME_type)
     *   (from the
     *   [`Content-Type`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Content-Type)
     *   header, the start of a
     *   [`data:` URL](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URLs),
     *   or
     *   [`Blob.type`](https://developer.mozilla.org/docs/Web/API/Blob/type)
     *   for a
     *   [`blob:` URL](https://developer.mozilla.org/docs/Web/API/URL/createObjectURL))
     * - `filename`: defining a value suggests it as the filename. `/` and `\`
     * characters are converted to underscores (`_`). Filesystems may forbid
     * other characters in filenames, so browsers will adjust the suggested name
     * if necessary.
     *
     * @webnative
     */
    readonly download?: boolean | string;
    /**
     * The URL that the standalone link points to. Standalone links are not restricted to
     * HTTP-based URLs — they can use any URL scheme supported by browsers:
     *
     * - Sections of a page with document fragments
     * - Specific text portions with
     * [text fragments](https://developer.mozilla.org/docs/Web/Text_fragments)
     * - Pieces of media files with media fragments
     * - Telephone numbers with `tel:` URLs
     * - Email addresses with `mailto:` URLs
     * - While web browsers may not support other URL schemes, websites can with
     * [`registerProtocolHandler()`](https://developer.mozilla.org/docs/Web/API/Navigator/registerProtocolHandler)
     *
     * @webnative
     */
    readonly href?: URL | string;
    /**
     * Hints at the human language of the linked URL. No built-in functionality.
     * Allowed values are the same as
     * [the global `lang` attribute](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang).
     *
     * @webnative
     */
    readonly hreflang?: string;
    /**
     * How much of the
     * [referrer](https://developer.mozilla.org/docs/Web/HTTP/Headers/Referer)
     * to send when following the standalone link.
     *
     * - `no-referrer`: The
     * [`Referer`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Referer)
     * header will not be sent.
     * - `no-referrer-when-downgrade`: The
     * [`Referer`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Referer)
     * header will not be sent to
     * [origin](https://developer.mozilla.org/docs/Glossary/Origin)s
     * without [TLS](https://developer.mozilla.org/docs/Glossary/TLS)
     * ([HTTPS](https://developer.mozilla.org/docs/Glossary/HTTPS)).
     * - `origin`: The sent referrer will be limited to the origin of the
     * referring page: its
     * [scheme](https://developer.mozilla.org/docs/Learn/Common_questions/What_is_a_URL),
     * [host](https://developer.mozilla.org/docs/Glossary/Host), and
     * [port](https://developer.mozilla.org/docs/Glossary/Port).
     * - `origin-when-cross-origin`: The referrer sent to other origins will be
     * limited to the scheme, the host, and the port. Navigations on the same
     * origin will still include the path.
     * - `same-origin`: A referrer will be sent for
     * [same origin](https://developer.mozilla.org/docs/Glossary/Same-origin_policy),
     * but cross-origin requests will contain no referrer information.
     * - `strict-origin`: Only send the origin of the document as the referrer
     * when the protocol security level stays the same (HTTPS→HTTPS), but don't
     * send it to a less secure destination (HTTPS→HTTP).
     * - `strict-origin-when-cross-origin` (default): Send a full URL when
     * performing a same-origin request, only send the origin when the protocol
     * security level stays the same (HTTPS→HTTPS), and send no header to a less
     * secure destination (HTTPS→HTTP).
     * - `unsafe-url`: The referrer will include the origin and the path (but not the
     * [fragment](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/hash),
     * [password](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/password),
     * or [username](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/username)).
     * **This value is unsafe** because it leaks origins and paths from
     * TLS-protected resources to insecure origins.
     *
     * @webnative
     */
    readonly referrerPolicy?: ReferrerPolicy;
    /**
     * The relationship of the linked URL as space-separated
     * [link types](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel).
     *
     * The following list includes some of the most important existing keywords.
     * Every keyword within a space-separated value should be unique within that
     * value.
     *
     * - [`alternate`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-alternate):
     * Alternate representations of the current document.
     * - [`author`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-author):
     * Author of the current document or article.
     * - [`bookmark`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-bookmark):
     * Permalink for the nearest ancestor section.
     * - [`external`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-external):
     * The referenced document is not part of the same site as the current
     * document. An icon will be rendered next to the text if this value is
     * specified.
     * - [`help`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-help):
     * Link to context-sensitive help.
     * - [`license`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-license):
     * Indicates that the main content of the current document is covered by the
     * copyright license described by the referenced document.
     * - [`me`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel/me):
     * Indicates that the current document represents the person who owns the
     * linked content.
     * - [`next`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-next):
     * Indicates that the current document is a part of a series and that the
     * next document in the series is the referenced document.
     * - [`nofollow`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-nofollow):
     * Indicates that the current document's original author or publisher does
     * not endorse the referenced document.
     * - [`noopener`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel/noopener):
     * Creates a top-level browsing context that is not an auxiliary browsing
     * context if the hyperlink would create either of those, to begin with (i.e.,
     * has an appropriate `target` attribute value).
     * - [`noreferrer`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-noreferrer):
     * No `Referer` header will be included. Additionally, has the same effect as
     * `noopener`.
     * - [`opener`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-opener):
     * Creates an auxiliary browsing context if the hyperlink would otherwise
     * create a top-level browsing context that is not an auxiliary browsing
     * context (i.e., has "`_blank`" as `target` attribute value).
     * - [`prev`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-prev):
     * Indicates that the current document is a part of a series and that the
     * previous document in the series is the referenced document.
     * - [`search`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-search):
     * Gives a link to a resource that can be used to search through the current
     * document and its related pages.
     * - [`tag`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel#attr-tag):
     * Gives a tag (identified by the given address) that applies to the current
     * document.
     *
     * @webnative
     */
    readonly rel?: string;
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
    readonly target?: LiteralUnion<Target, string>;
    /**
     * Emitted when the standalone link loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when the standalone link gains focus.
     */
    private readonly focusEmitter;
    private readonly host;
    private linkIcon?;
    private tabIndex?;
    protected onClick(event: MouseEvent): void;
    protected disabledChanged(): void;
    protected tabindexChanged(newValue: string): void;
    protected hrefTargetChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
//# sourceMappingURL=standalone-link.d.ts.map