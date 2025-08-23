import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { mustHydrate, isServerSide } from "jopi-rewrite-ui";
import styles from "./mybutton.module.scss";
function Component({ name }) {
    function doClick(e) {
        e.preventDefault();
        alert("click !");
    }
    let text = "Hello " + name;
    if (isServerSide())
        text += " (server side)";
    else
        text += " (browser side)";
    return _jsx("div", { className: styles.myLocalStyle, onClick: doClick, children: _jsx("div", { className: "welcome", children: text }) });
}
// Here we add "styles" which allow automatically inclide the CSS module in the page header as inline CSS.
export default mustHydrate(import.meta, Component, styles);
//# sourceMappingURL=CssModuleButton.js.map