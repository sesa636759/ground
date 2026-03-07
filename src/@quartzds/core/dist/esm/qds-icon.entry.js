/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { r as registerInstance, c as createEvent, h, a as getElement } from './index-b1d6acd2.js';
import { b as inheritAriaAttributes } from './helpers-2e4ca34d.js';
import { g as getIconLibrary } from './library-2e5458af.js';

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
const cachedIconRequests = new Map();
const requestIcon = (url) => {
    const cachedIconRequest = cachedIconRequests.get(url);
    if (cachedIconRequest)
        return Promise.resolve(cachedIconRequest);
    const iconPromise = fetch(url, { mode: 'cors' }).then(async (response) => {
        const iconResponse = {
            ok: response.ok,
            status: response.status,
            data: await response.text(),
        };
        if (response.ok) {
            const div = document.createElement('div');
            div.innerHTML = iconResponse.data;
            const child = div.firstElementChild;
            iconResponse.data =
                child?.tagName.toLowerCase() === 'svg' ? child.outerHTML : '';
        }
        cachedIconRequests.set(url, iconResponse);
        return iconResponse;
    });
    cachedIconRequests.set(url, iconPromise);
    return iconPromise;
};

const iconCss = ":host([hidden]){display:none!important}:host{display:inline-block;height:1em;width:1em}.qds-container{position:relative}.qds-icon-wrapper{display:contents}svg{display:block;fill:currentcolor;height:100%;width:100%}.qds-click-target{height:var(--qds-experimental-icon-click-target-size);left:calc((var(--qds-experimental-icon-click-target-size) - 100%)*-1/2);position:absolute;top:calc((var(--qds-experimental-icon-click-target-size) - 100%)*-1/2);width:var(--qds-experimental-icon-click-target-size)}";
const QdsIconStyle0 = iconCss;

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Icon_inheritedAttributes;
let parser;
const Icon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.loadEmitter = createEvent(this, "qdsLoad", 6);
        this.errorEmitter = createEvent(this, "qdsError", 6);
        /**
         * The name of a registered icon library.
         */
        this.library = 'default';
        this.svg = '';
        _Icon_inheritedAttributes.set(this, {});
    }
    async setIcon() {
        if (!this.name)
            return;
        const library = getIconLibrary(this.library);
        if (!library)
            return;
        const url = library.resolver(this.name);
        if (!url) {
            this.svg = '';
            return;
        }
        try {
            const request = await requestIcon(url);
            if (!request.ok) {
                this.svg = '';
                this.errorEmitter.emit();
                return;
            }
            // Create an instance of the DOM parser. We do it here instead of at the
            // top-level to support SSR while maintaining a single parser instance
            // for optimal performance.
            parser || (parser = new DOMParser());
            const document = parser.parseFromString(request.data, 'text/html');
            const svgElement = document.body.querySelector('svg');
            if (svgElement === null) {
                this.svg = '';
                this.errorEmitter.emit();
            }
            else {
                for (const [key, value] of Object.entries(__classPrivateFieldGet(this, _Icon_inheritedAttributes, "f")))
                    if (value !== undefined)
                        svgElement.setAttribute(key, value);
                this.svg = svgElement.outerHTML;
                this.loadEmitter.emit();
            }
        }
        catch {
            this.errorEmitter.emit();
        }
    }
    async componentWillLoad() {
        __classPrivateFieldSet(this, _Icon_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        await this.setIcon();
    }
    render() {
        return (h("div", { key: '70a230b844d56b3c3546fe243c71e8ab93847aca', class: "qds-container" }, h("span", { key: '88b003880fb54fd138cfad5c670030cb9f4cfdc4', class: "qds-icon-wrapper", innerHTML: this.svg }), h("div", { key: 'e0e911ad95b588c5676be368f39d82c0511e966e', class: "qds-click-target" })));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "name": ["setIcon"],
        "library": ["setIcon"]
    }; }
};
_Icon_inheritedAttributes = new WeakMap();
Icon.style = QdsIconStyle0;

export { Icon as qds_icon };

//# sourceMappingURL=qds-icon.entry.js.map