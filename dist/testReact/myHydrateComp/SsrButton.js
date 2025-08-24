import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import "./SsrButton.scss";
import { mustBundleExternalCss } from "jopi-rewrite-ui";
// Allow the compiler to automatically include the CSS file in the CSS bundle.
// To know: CSS found in active files (which are included by an import, like this file)
//          are automatically added doing that in fact, this call isn't required.
//
mustBundleExternalCss(import.meta, "./external-css.scss");
/**
 * A simple button, without hydration, for SSR.
 */
export default function ({ name }) {
    function doClick(e) {
        e.preventDefault();
        alert("click !");
    }
    return _jsx("div", { className: "SsrButton", onClick: doClick, children: _jsx("div", { className: "welcome", children: "Hi " + name }) });
}
//# sourceMappingURL=SsrButton.js.map